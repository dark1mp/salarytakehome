import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'a1b2c3d4e5f6g7h8i9j0salarytakehome';
const SITE_HOST = 'salarytakehome.co.uk';

/**
 * IndexNow API endpoint for instant Bing/search engine indexing
 *
 * POST /api/indexnow
 * Body: { urls: ["/blog/new-post", "/take-home-pay-calculator"] }
 *
 * Or to submit a single URL:
 * Body: { url: "/blog/new-post" }
 */
export async function POST(request) {
  try {
    const body = await request.json();

    // Support both single URL and array of URLs
    let urls = body.urls || (body.url ? [body.url] : []);

    if (urls.length === 0) {
      return NextResponse.json(
        { error: 'No URLs provided. Send { url: "/path" } or { urls: ["/path1", "/path2"] }' },
        { status: 400 }
      );
    }

    // Convert relative URLs to absolute
    const absoluteUrls = urls.map(url => {
      if (url.startsWith('http')) return url;
      return `https://${SITE_HOST}${url.startsWith('/') ? url : '/' + url}`;
    });

    // Submit to IndexNow API
    const indexNowPayload = {
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: absoluteUrls
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(indexNowPayload)
    });

    // IndexNow returns 200 for success, 202 for accepted
    if (response.ok || response.status === 202) {
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${absoluteUrls.length} URL(s) to IndexNow`,
        urls: absoluteUrls
      });
    }

    const errorText = await response.text();
    return NextResponse.json(
      { error: `IndexNow API error: ${response.status} - ${errorText}` },
      { status: response.status }
    );

  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit to IndexNow', details: error.message },
      { status: 500 }
    );
  }
}

/**
 * GET /api/indexnow - Returns info about the IndexNow configuration
 */
export async function GET() {
  return NextResponse.json({
    service: 'IndexNow',
    description: 'Instant URL submission to Bing and other search engines',
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    usage: {
      method: 'POST',
      body: '{ "url": "/path" } or { "urls": ["/path1", "/path2"] }',
      example: 'curl -X POST /api/indexnow -H "Content-Type: application/json" -d \'{"url": "/blog/new-post"}\''
    }
  });
}
