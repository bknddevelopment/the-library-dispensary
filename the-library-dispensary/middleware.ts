import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware to detect search engine crawlers and bypass age verification
 * This runs BEFORE the page loads, allowing crawlers to see full content
 */

// List of known search engine bot user agents (lowercase)
const SEARCH_ENGINE_BOTS = [
  // Google
  'googlebot',
  'google-site-verification',
  'google-inspectiontool',
  'google-structured-data-testing-tool',
  'google-richsnippets',
  'google page speed insights',
  'lighthouse',
  'apis-google',
  'adsbot-google',
  'mediapartners-google',

  // Bing
  'bingbot',
  'bingpreview',

  // Other search engines
  'slurp', // Yahoo
  'duckduckbot', // DuckDuckGo
  'baiduspider', // Baidu
  'yandexbot', // Yandex

  // SEO tools
  'ahrefsbot',
  'semrushbot',
  'screaming frog',
  'moz.com',
  'seokicks',
  'sistrix',

  // Social media crawlers (for Open Graph)
  'facebookexternalhit',
  'linkedinbot',
  'twitterbot',
  'whatsapp',
  'pinterest',
  'tumblr',

  // Schema/structured data validators
  'structured-data',
  'schema.org',
];

function isSearchEngineCrawler(userAgent: string): boolean {
  const lowerUserAgent = userAgent.toLowerCase();
  return SEARCH_ENGINE_BOTS.some(bot => lowerUserAgent.includes(bot));
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isCrawler = isSearchEngineCrawler(userAgent);

  // Log crawler detection for monitoring
  if (isCrawler) {
    console.log(`🤖 Crawler detected in middleware: ${userAgent.substring(0, 100)}...`);
  }

  // Create response with crawler detection header
  const response = NextResponse.next();

  // Add custom header that our app can check
  if (isCrawler) {
    response.headers.set('X-Is-Crawler', 'true');
    response.headers.set('X-Crawler-Type', userAgent.split('/')[0] || 'unknown');
  }

  return response;
}

// Only run middleware on actual pages, not on static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.webp|.*\\.ico|.*\\.pdf|.*\\.js|.*\\.css).*)',
  ],
}