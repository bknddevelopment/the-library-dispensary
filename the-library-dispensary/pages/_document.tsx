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
      </Head>
      <body>
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