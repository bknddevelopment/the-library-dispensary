import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Performance: Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics 4 - REPLACE G-XXXXXXXXXX with your actual GA4 measurement ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4A574" />

        {/* PWA and Mobile Optimizations */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="The Library" />

        {/* Viewport optimization for mobile performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes" />

        {/* Critical SEO meta tags - MUST be in static HTML for crawlers */}
        <title>West Orange Dispensary | Cannabis Near Me | The Library NJ</title>
        <meta name="description" content="The Library: West Orange's #1 cannabis dispensary. Premium flower, edibles, vapes in Essex County NJ. Order online, same-day pickup. Open daily 1-3 Washington St." />
        <meta name="keywords" content="dispensary west orange nj, cannabis near me, marijuana west orange, weed dispensary essex county, cannabis store west orange new jersey, recreational marijuana nj, The Library Dispensary" />
        <link rel="canonical" href="https://thelibrarynj.com/" />

        {/* Open Graph tags for better social sharing and crawler recognition */}
        <meta property="og:title" content="The Library of New Jersey - Premier Cannabis Dispensary" />
        <meta property="og:description" content="West Orange's premier cannabis dispensary. Premium flower, edibles, vapes & concentrates. Order online for same-day pickup." />
        <meta property="og:url" content="https://thelibrarynj.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thelibrarynj.com/the-library-logo.png" />

        {/* Critical Business Information for Google Business Profile Verification */}
        {/* MUST MATCH EXACTLY with Google Business Profile - DO NOT CHANGE */}
        <meta name="business:name" content="The Library of New Jersey" />
        <meta name="business:address" content="1-3 Washington Street, West Orange, NJ 07052" />
        <meta name="business:phone" content="+1-973-731-1199" />
        <meta name="business:hours" content="Mon-Wed: 9am-8pm, Thu-Fri: 9am-9pm, Sat: 9am-9pm, Sun: 10am-5pm" />
        <meta name="business:type" content="Cannabis Dispensary" />
        <meta name="business:url" content="https://thelibrarynj.com" />

        {/* Open Graph tags for social media and crawlers */}
        <meta property="og:site_name" content="The Library of New Jersey" />
        <meta property="og:locale" content="en_US" />
        <meta property="business:contact_data:street_address" content="1-3 Washington Street" />
        <meta property="business:contact_data:locality" content="West Orange" />
        <meta property="business:contact_data:region" content="NJ" />
        <meta property="business:contact_data:postal_code" content="07052" />
        <meta property="business:contact_data:country_name" content="United States" />

        {/* Critical Structured Data for Search Engines - MUST be in static HTML */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "@id": "https://thelibrarynj.com/#dispensary",
              "name": "The Library of New Jersey",
              "alternateName": ["The Library Dispensary", "The Library Cannabis Store", "The Library West Orange", "The Library NJ"],
              "description": "West Orange NJ cannabis dispensary near me. Premium marijuana flower, edibles, vapes & concentrates. Same-day pickup, expert budtenders. Serving Essex County since 2025.",
              "url": "https://thelibrarynj.com/",
              "telephone": "+1-973-731-1199",
              "priceRange": "$$",
              "image": [
                "https://thelibrarynj.com/the-library-logo.png",
                "https://thelibrarynj.com/images/storefront.jpg"
              ],
              "logo": "https://thelibrarynj.com/the-library-logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1-3 Washington Street",
                "addressLocality": "West Orange",
                "addressRegion": "NJ",
                "postalCode": "07052",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7987,
                "longitude": -74.2391
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday"],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/thelibrarynj/",
                "https://www.facebook.com/thelibrarydispensary"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      </Head>
      <body>
        {/* Critical Business Information for crawlers and noscript users */}
        <noscript>
          <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
            <h1>The Library of New Jersey - Cannabis Dispensary</h1>
            <p><strong>West Orange's Premier Cannabis Dispensary</strong></p>
            <p>Address: 1-3 Washington Street, West Orange, NJ 07052</p>
            <p>Phone: (973) 731-1199</p>
            <p>Hours: Mon-Wed 9am-8pm, Thu-Fri 9am-9pm, Sat 9am-9pm, Sun 10am-5pm</p>
            <p>Visit us for premium cannabis flower, edibles, vapes, and concentrates.</p>
            <p>Order online at https://thelibrarynj.com</p>
            <p>Must be 21+ with valid ID. New Jersey licensed cannabis dispensary.</p>
          </div>
        </noscript>
        <Main />
        <NextScript />
        {/* Critical fix for Dutchie cart modal visibility */}
        <script src="/dutchie-cart-fix.js" defer />

        {/* Register Service Worker for offline support and performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('[ServiceWorker] Registration successful');
                    },
                    function(err) {
                      console.log('[ServiceWorker] Registration failed:', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </Html>
  )
}