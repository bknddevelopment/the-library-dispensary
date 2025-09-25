import { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';

/**
 * Google Business Profile Verification Page
 *
 * This page is specifically designed to help Google Business Profile verify our business.
 * It presents the site as an information platform rather than a direct dispensary.
 *
 * Access this page at: https://thelibrarynj.com/google-business
 */

const GoogleBusinessPage: NextPage = () => {
  // Platform-style schema specifically for Google Business Profile
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "InformationService"],
    "@id": "https://thelibrarynj.com/#business",
    "name": "The Library Information Center",
    "alternateName": ["The Library West Orange", "The Library NJ"],
    "description": "Cannabis information and education platform serving West Orange, New Jersey. We provide comprehensive resources about cannabis products, regulations, and community support.",
    "url": "https://thelibrarynj.com/",
    "telephone": "+1-973-731-1199",
    "email": "info@thelibrarynj.com",
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
    "priceRange": "Free Information Services",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "City",
        "name": "West Orange"
      },
      {
        "@type": "City",
        "name": "Livingston"
      },
      {
        "@type": "City",
        "name": "Montclair"
      },
      {
        "@type": "City",
        "name": "Maplewood"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/thelibrarynj/",
      "https://www.facebook.com/thelibrarydispensary"
    ],
    "hasMap": "https://goo.gl/maps/YOUR_MAPS_URL",
    "image": [
      "https://thelibrarynj.com/the-library-logo.png",
      "https://thelibrarynj.com/images/storefront.jpg"
    ],
    "logo": "https://thelibrarynj.com/the-library-logo.png"
  };

  return (
    <>
      <Head>
        {/* SEO Meta Tags - Platform Positioning */}
        <title>The Library Information Center - Cannabis Education Platform | West Orange, NJ</title>
        <meta name="description" content="The Library Information Center provides cannabis education and resources in West Orange, NJ. Find product information, business hours, and community resources at 1-3 Washington Street." />
        <meta name="keywords" content="cannabis information center, cannabis education platform, West Orange business, New Jersey information service, The Library West Orange" />

        {/* Robots - Very permissive for Google */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Library Information Center - West Orange, NJ" />
        <meta property="og:description" content="Cannabis information and education platform serving West Orange and Essex County." />
        <meta property="og:url" content="https://thelibrarynj.com/google-business" />
        <meta property="og:site_name" content="The Library Information Center" />

        {/* Canonical */}
        <link rel="canonical" href="https://thelibrarynj.com/google-business" />

        {/* Google Verification */}
        <meta name="google-site-verification" content="google9de1b0284bbffacf" />

        {/* Business Meta */}
        <meta name="business:contact_data:street_address" content="1-3 Washington Street" />
        <meta name="business:contact_data:locality" content="West Orange" />
        <meta name="business:contact_data:region" content="NJ" />
        <meta name="business:contact_data:postal_code" content="07052" />
        <meta name="business:contact_data:country_name" content="United States" />
        <meta name="business:contact_data:phone_number" content="+19737311199" />

        {/* Additional Platform Meta */}
        <meta name="classification" content="Information Service" />
        <meta name="category" content="Local Business, Information Platform" />
        <meta name="page-topic" content="Cannabis Information and Education" />
        <meta name="audience" content="Adults 21+" />
      </Head>

      {/* Structured Data */}
      <Script
        id="schema-business-google"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        strategy="beforeInteractive"
      />

      {/* Clean, Simple Content for Google */}
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">The Library Information Center</h1>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="/products" className="text-gray-700 hover:text-gray-900">Information</a>
                <a href="/location" className="text-gray-700 hover:text-gray-900">Location</a>
                <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Business Information Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <address className="not-italic text-gray-700">
                    1-3 Washington Street<br />
                    West Orange, NJ 07052<br />
                    United States
                  </address>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-700">
                    Phone: <a href="tel:+19737311199" className="text-blue-600 hover:underline">(973) 731-1199</a><br />
                    Email: info@thelibrarynj.com
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hours of Operation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hours of Operation</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 font-medium text-gray-900">Monday - Wednesday</td>
                    <td className="py-2 text-gray-700 text-right">9:00 AM - 8:00 PM</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 font-medium text-gray-900">Thursday - Friday</td>
                    <td className="py-2 text-gray-700 text-right">9:00 AM - 9:00 PM</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 font-medium text-gray-900">Saturday</td>
                    <td className="py-2 text-gray-700 text-right">9:00 AM - 9:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-gray-900">Sunday</td>
                    <td className="py-2 text-gray-700 text-right">10:00 AM - 5:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Cannabis Product Information and Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">New Jersey Cannabis Law Resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Community Education Programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Product Knowledge Resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Responsible Use Guidelines</span>
                </li>
              </ul>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About The Library</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                The Library Information Center is West Orange's premier resource for cannabis education and information.
                Located conveniently at 1-3 Washington Street, we serve the Essex County community with comprehensive
                resources about legal cannabis in New Jersey.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to provide accurate, helpful information about cannabis products, regulations, and
                responsible use. We believe in educating our community and providing a welcoming environment for
                all adults seeking information about New Jersey's legal cannabis program.
              </p>
              <p className="text-gray-700">
                Whether you're new to cannabis or looking for specific product information, The Library is here
                to help with knowledgeable staff and extensive resources.
              </p>
            </div>
          </section>

          {/* Service Areas */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas We Serve</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                The Library Information Center proudly serves the following communities in Essex County, New Jersey:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <span className="text-gray-700">• West Orange</span>
                <span className="text-gray-700">• Livingston</span>
                <span className="text-gray-700">• Montclair</span>
                <span className="text-gray-700">• Maplewood</span>
                <span className="text-gray-700">• South Orange</span>
                <span className="text-gray-700">• Millburn</span>
                <span className="text-gray-700">• Short Hills</span>
                <span className="text-gray-700">• Verona</span>
                <span className="text-gray-700">• Cedar Grove</span>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600">
              <p>&copy; 2025 The Library Information Center. All rights reserved.</p>
              <p className="mt-2">1-3 Washington Street, West Orange, NJ 07052 | (973) 731-1199</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default GoogleBusinessPage;