/**
 * Submits recently-modified sitemap URLs to IndexNow (streaming mode).
 *
 * Default: submits URLs whose <lastmod> is within the last 7 days.
 * Flags:
 *   --all       Submit every URL in the sitemap (batch mode).
 *   --days=N    Change the recency window (default 7).
 *
 * Run: node scripts/submit-indexnow.mjs
 *      node scripts/submit-indexnow.mjs --all
 *      node scripts/submit-indexnow.mjs --days=30
 */

const INDEXNOW_KEY = 'a1b2c3d4e5f6g7h8i9j0salarytakehome';
const SITE_HOST = 'www.salarytakehome.co.uk';
const SITEMAP_URL = `https://${SITE_HOST}/sitemap.xml`;

const args = process.argv.slice(2);
const submitAll = args.includes('--all');
const daysArg = args.find(a => a.startsWith('--days='));
const DAYS = daysArg ? parseInt(daysArg.split('=')[1], 10) : 7;

function getUrlsFromSitemap(xml) {
  // Extract <url> blocks with both <loc> and <lastmod>
  const urlBlocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  return urlBlocks.map(block => {
    const loc = block[1].match(/<loc>(.*?)<\/loc>/)?.[1];
    const lastmod = block[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
    return { url: loc, lastmod };
  }).filter(entry => entry.url);
}

function filterRecent(entries, days) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return entries.filter(entry => {
    if (!entry.lastmod) return true; // no lastmod → include to be safe
    return new Date(entry.lastmod) >= cutoff;
  });
}

async function submitToIndexNow(urls) {
  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  return response;
}

async function main() {
  try {
    console.log('Fetching sitemap URLs...');
    const response = await fetch(SITEMAP_URL);
    const xml = await response.text();
    const allEntries = getUrlsFromSitemap(xml);
    console.log(`Found ${allEntries.length} URLs in sitemap.`);

    let urlsToSubmit;
    if (submitAll) {
      urlsToSubmit = allEntries.map(e => e.url);
      console.log(`Mode: batch (--all) — submitting all ${urlsToSubmit.length} URLs.`);
    } else {
      const recent = filterRecent(allEntries, DAYS);
      urlsToSubmit = recent.map(e => e.url);
      console.log(`Mode: streaming — ${urlsToSubmit.length} URLs modified in the last ${DAYS} days.`);
    }

    if (urlsToSubmit.length === 0) {
      console.log('No URLs to submit. Skipping IndexNow submission.');
      return;
    }

    console.log('Submitting to IndexNow...');
    const result = await submitToIndexNow(urlsToSubmit);
    console.log(`IndexNow response: ${result.status} ${result.statusText}`);

    if (result.ok || result.status === 202) {
      console.log(`Successfully submitted ${urlsToSubmit.length} URLs to IndexNow.`);
    } else {
      const text = await result.text();
      console.error(`IndexNow error: ${text}`);
      process.exit(1);
    }
  } catch (error) {
    console.error('IndexNow submission failed:', error.message);
    process.exit(1);
  }
}

main();
