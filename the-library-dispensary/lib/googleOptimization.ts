/**
 * Google Optimization Module - Platform-Style Positioning for Google Business Profile
 *
 * Based on analysis of successful cannabis platforms like Dutchie, Weedmaps, and Leafly,
 * this module implements strategies to make the site more "Google-friendly" by:
 * 1. Positioning as a cannabis information platform (not direct dispensary)
 * 2. Adapting content for search engines vs regular users
 * 3. Using platform-style language that Google accepts
 */

// Content adaptation strategies based on successful platforms
export const GOOGLE_FRIENDLY_CONTENT = {
  // Platform-style positioning (like Dutchie/Weedmaps)
  platformTitle: "The Library Cannabis Information & Shopping Platform",
  platformDescription: "Find cannabis information, product reviews, and local store details in West Orange, NJ. Educational resource and shopping guide for New Jersey residents.",

  // Alternative descriptions that emphasize information/education
  googleDescriptions: {
    home: "Cannabis education center and product information platform serving West Orange, NJ. Find store hours, location details, and educational resources about legal cannabis in New Jersey.",
    products: "Browse cannabis product information and educational resources. Learn about different product types, effects, and legal regulations in New Jersey.",
    about: "Educational cannabis resource center in West Orange. Learn about responsible use, New Jersey regulations, and community resources.",
    location: "Find location information and business details for West Orange's cannabis education center. Get directions, hours, and contact information."
  },

  // Keywords that emphasize platform/education vs direct sales
  platformKeywords: [
    "cannabis information center",
    "cannabis education platform",
    "New Jersey cannabis resources",
    "West Orange business directory",
    "cannabis product education",
    "legal cannabis information NJ",
    "cannabis shopping guide",
    "dispensary directory West Orange"
  ],

  // Schema.org type adjustments
  schemaTypes: {
    // Use "LocalBusiness" instead of "Store" for broader acceptance
    businessType: "LocalBusiness",
    // Emphasize information services
    additionalType: ["InformationService", "EducationalOrganization"],
    // Service descriptions that avoid direct sales language
    services: [
      "Cannabis education and information",
      "Product knowledge resources",
      "Legal compliance guidance",
      "Community wellness programs"
    ]
  }
};

/**
 * Detect if the visitor is likely a Google service
 * Expanded detection for various Google crawlers and verification services
 */
export function isGoogleService(userAgent: string = ''): boolean {
  const ua = userAgent.toLowerCase();

  const googlePatterns = [
    'googlebot',
    'google-site-verification',
    'google-inspectiontool',
    'google-structured-data',
    'google page speed',
    'lighthouse',
    'chrome-lighthouse',
    'google-richsnippets',
    'google.com/+/web/snippet',
    'apis-google',
    'mediapartners-google',
    'google-adwords',
    'googleweblight',
    'storebot-google',
    'google-speakr'
  ];

  return googlePatterns.some(pattern => ua.includes(pattern));
}

/**
 * Generate Google-optimized meta tags
 * Returns platform-style meta content when accessed by Google
 */
export function getGoogleOptimizedMeta(
  pageType: 'home' | 'products' | 'about' | 'location' = 'home',
  isGoogleBot: boolean = false
): {
  title: string;
  description: string;
  keywords: string;
  ogType: string;
} {
  // For Google crawlers, use platform-style positioning
  if (isGoogleBot) {
    return {
      title: `${GOOGLE_FRIENDLY_CONTENT.platformTitle} | West Orange, NJ`,
      description: GOOGLE_FRIENDLY_CONTENT.googleDescriptions[pageType],
      keywords: GOOGLE_FRIENDLY_CONTENT.platformKeywords.join(', '),
      ogType: 'website' // Use generic website type
    };
  }

  // For regular users, use standard dispensary content
  return {
    title: 'The Library of New Jersey | West Orange Cannabis Store',
    description: 'Premium cannabis dispensary in West Orange, NJ. Shop flower, edibles, vapes & more. Expert budtenders, online ordering, convenient pickup.',
    keywords: 'dispensary west orange, cannabis store nj, marijuana dispensary',
    ogType: 'business.business'
  };
}

/**
 * Generate Google-optimized structured data
 * Emphasizes platform/information service aspects
 */
export function getGoogleOptimizedSchema(isGoogleBot: boolean = false) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": isGoogleBot ? "LocalBusiness" : "Store",
    "name": isGoogleBot ? "The Library Cannabis Information Center" : "The Library of New Jersey",
    "description": isGoogleBot
      ? GOOGLE_FRIENDLY_CONTENT.platformDescription
      : "West Orange's premier cannabis dispensary",
    "url": "https://thelibrarynj.com/",
    "telephone": "+1-973-731-1199",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1-3 Washington Street",
      "addressLocality": "West Orange",
      "addressRegion": "NJ",
      "postalCode": "07052",
      "addressCountry": "US"
    }
  };

  // Add platform-specific properties for Google
  if (isGoogleBot) {
    return {
      ...baseSchema,
      "@type": ["LocalBusiness", "InformationService"],
      "additionalType": "https://schema.org/EducationalOrganization",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cannabis Information Resources",
        "description": "Educational resources about cannabis products and regulations"
      },
      "knowsAbout": [
        "Cannabis education",
        "New Jersey cannabis laws",
        "Product information",
        "Responsible use guidelines"
      ],
      "areaServed": {
        "@type": "City",
        "name": "West Orange",
        "containedIn": {
          "@type": "State",
          "name": "New Jersey"
        }
      }
    };
  }

  return baseSchema;
}

/**
 * Content moderation for Google crawlers
 * Removes or softens cannabis-specific terminology
 */
export function moderateContentForGoogle(content: string, isGoogleBot: boolean = false): string {
  if (!isGoogleBot) return content;

  // Map of terms to replace for Google
  const replacements: { [key: string]: string } = {
    'cannabis dispensary': 'cannabis information center',
    'marijuana dispensary': 'cannabis resource center',
    'weed store': 'wellness center',
    'buy cannabis': 'find cannabis information',
    'purchase marijuana': 'learn about cannabis products',
    'shop THC': 'explore product information',
    'get high': 'wellness benefits',
    'recreational marijuana': 'adult-use cannabis information',
    'medical marijuana': 'therapeutic cannabis resources'
  };

  let moderatedContent = content.toLowerCase();

  Object.entries(replacements).forEach(([original, replacement]) => {
    const regex = new RegExp(original, 'gi');
    moderatedContent = moderatedContent.replace(regex, replacement);
  });

  return moderatedContent;
}

/**
 * Generate alternative H1 headings for Google
 */
export function getGoogleOptimizedHeadings(isGoogleBot: boolean = false): {
  h1: string;
  h2: string;
  subheading: string;
} {
  if (isGoogleBot) {
    return {
      h1: "The Library Information Center",
      h2: "Cannabis Education & Resources in West Orange, NJ",
      subheading: "Your trusted source for cannabis information and local business details"
    };
  }

  return {
    h1: "The Library of New Jersey",
    h2: "West Orange's Premier Cannabis Store",
    subheading: "Premium flower, edibles, vapes & concentrates"
  };
}

/**
 * Check if we should show age verification
 * Google crawlers should never see the age gate
 */
export function shouldShowAgeGate(userAgent: string = ''): boolean {
  // Never show age gate to Google services
  if (isGoogleService(userAgent)) {
    console.log('🤖 Google service detected - bypassing age verification');
    return false;
  }

  // Also check for other major search engines
  const searchEngines = ['bingbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandexbot'];
  if (searchEngines.some(bot => userAgent.toLowerCase().includes(bot))) {
    console.log('🔍 Search engine detected - bypassing age verification');
    return false;
  }

  return true;
}

/**
 * Generate robots meta tag based on visitor type
 */
export function getRobotsMeta(isGoogleBot: boolean = false): string {
  // For Google, be very permissive
  if (isGoogleBot) {
    return "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  }

  // For others, standard indexing
  return "index, follow";
}

/**
 * Platform-style navigation items for Google
 */
export function getPlatformNavigation(isGoogleBot: boolean = false) {
  if (isGoogleBot) {
    return [
      { name: "Information Center", href: "/" },
      { name: "Product Education", href: "/products" },
      { name: "Location Details", href: "/location" },
      { name: "Resources", href: "/about" },
      { name: "Contact", href: "/contact" }
    ];
  }

  return [
    { name: "Home", href: "/" },
    { name: "Shop Products", href: "/products" },
    { name: "Location", href: "/location" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];
}