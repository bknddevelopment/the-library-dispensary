/**
 * Detects if the current user agent is a search engine crawler/bot
 * This allows search engines to bypass age verification to access business information
 * for Google Business Profile verification and SEO purposes
 */

// List of known search engine bot user agents
const SEARCH_ENGINE_BOTS = [
  // Google
  'googlebot',
  'google-site-verification',
  'google-inspectiontool',
  'google-structured-data-testing-tool',
  'google-richsnippets',
  'google page speed insights',
  'lighthouse',

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

  // Social media crawlers (for Open Graph)
  'facebookexternalhit',
  'linkedinbot',
  'twitterbot',
  'whatsapp',

  // Schema/structured data validators
  'structured-data',
  'schema.org',
];

/**
 * Check if the current request is from a search engine crawler
 * @returns true if the user agent is a known search engine bot
 */
export function isSearchEngineCrawler(): boolean {
  // Server-side check using headers (for SSR/SSG)
  if (typeof window === 'undefined') {
    return false; // We'll handle this server-side in the future if needed
  }

  // Client-side check using navigator.userAgent
  const userAgent = navigator.userAgent?.toLowerCase() || '';

  // Check if any bot pattern matches the user agent
  return SEARCH_ENGINE_BOTS.some(bot => userAgent.includes(bot));
}

/**
 * Check if we should bypass age verification
 * This includes search engine crawlers and special testing parameters
 */
export function shouldBypassAgeVerification(): boolean {
  // Check for search engine crawlers
  if (isSearchEngineCrawler()) {
    console.log('🤖 Search engine crawler detected - bypassing age verification');
    return true;
  }

  // Check for testing parameter (for manual testing)
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (params.get('bypass_age_verification') === 'googlebot_test') {
      console.log('🧪 Testing mode - bypassing age verification');
      return true;
    }
  }

  return false;
}

/**
 * Log crawler detection for monitoring
 */
export function logCrawlerDetection(): void {
  if (typeof window === 'undefined') return;

  const userAgent = navigator.userAgent || 'Unknown';
  const isCrawler = isSearchEngineCrawler();

  if (isCrawler) {
    console.log('🤖 Crawler Detection:', {
      userAgent,
      detected: true,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
  }
}