/**
 * Submits all sitemap URLs to IndexNow after build/deploy.
 * Run: node scripts/submit-indexnow.mjs
 */

const INDEXNOW_KEY = 'a1b2c3d4e5f6g7h8i9j0salarytakehome';
const SITE_HOST = 'www.salarytakehome.co.uk';
const SITEMAP_URL = `https://${SITE_HOST}/sitemap.xml`;

async function getUrlsFromSitemap() {
  const response = await fetch(SITEMAP_URL);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  return urls;
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
    const urls = await getUrlsFromSitemap();
    console.log(`Found ${urls.length} URLs in sitemap.`);

    if (urls.length === 0) {
      console.log('No URLs found. Skipping IndexNow submission.');
      return;
    }

    console.log('Submitting to IndexNow...');
    const response = await submitToIndexNow(urls);
    console.log(`IndexNow response: ${response.status} ${response.statusText}`);

    if (response.ok || response.status === 202) {
      console.log(`Successfully submitted ${urls.length} URLs to IndexNow.`);
    } else {
      const text = await response.text();
      console.error(`IndexNow error: ${text}`);
      process.exit(1);
    }
  } catch (error) {
    console.error('IndexNow submission failed:', error.message);
    process.exit(1);
  }
}

main();
