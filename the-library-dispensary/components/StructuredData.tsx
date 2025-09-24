import Script from 'next/script'

interface StructuredDataProps {
  pageType?: 'home' | 'product' | 'about' | 'contact'
}

const StructuredData: React.FC<StructuredDataProps> = ({ pageType = 'home' }) => {
  // Local Business Schema (for all pages)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": "https://thelibrarynj.com/#dispensary",
    "name": "The Library Dispensary",
    "alternateName": ["The Library Cannabis Store", "The Library West Orange", "The Library NJ"],
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
      "streetAddress": "1-3 Washington St",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "10:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "10:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/thelibrarynj/",
      "https://www.facebook.com/thelibrarydispensary"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cannabis Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Cannabis Flower",
            "category": "Flower"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Pre-Rolls",
            "category": "Pre-Rolls"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Edibles",
            "category": "Edibles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Vaporizers",
            "category": "Vapes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Concentrates",
            "category": "Concentrates"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://thelibrarynj.com/#organization",
    "name": "The Library Dispensary",
    "alternateName": "The Library NJ",
    "url": "https://thelibrarynj.com/",
    "logo": "https://thelibrarynj.com/the-library-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-973-731-1199",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["en"]
    },
    "sameAs": [
      "https://www.instagram.com/thelibrarynj/"
    ]
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thelibrarynj.com/#website",
    "url": "https://thelibrarynj.com/",
    "name": "The Library Dispensary",
    "description": "West Orange's premier cannabis dispensary",
    "publisher": {
      "@id": "https://thelibrarynj.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://thelibrarynj.com/products/?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  // Breadcrumb Schema (for non-home pages)
  const getBreadcrumbSchema = () => {
    const paths = {
      'product': [
        { name: 'Home', url: 'https://thelibrarynj.com/' },
        { name: 'Products', url: 'https://thelibrarynj.com/products/' }
      ],
      'about': [
        { name: 'Home', url: 'https://thelibrarynj.com/' },
        { name: 'About Us', url: 'https://thelibrarynj.com/about/' }
      ],
      'contact': [
        { name: 'Home', url: 'https://thelibrarynj.com/' },
        { name: 'Location', url: 'https://thelibrarynj.com/location/' }
      ]
    }

    if (!paths[pageType] || pageType === 'home') return null

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": paths[pageType].map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    }
  }

  const breadcrumbSchema = getBreadcrumbSchema()

  // FAQPage Schema for common questions
  const faqSchema = pageType === 'home' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are The Library Dispensary's hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're open Monday-Thursday 10am-9pm, Friday-Saturday 10am-10pm, and Sunday 10am-8pm."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a medical card to shop at The Library?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, The Library Dispensary is a recreational cannabis dispensary. You must be 21+ with valid ID to purchase."
        }
      },
      {
        "@type": "Question",
        "name": "Where is The Library Dispensary located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're located at 1-3 Washington St, West Orange, NJ 07052. Convenient parking is available."
        }
      },
      {
        "@type": "Question",
        "name": "Can I order online for pickup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can browse our menu and place orders online through our website for convenient in-store pickup."
        }
      }
    ]
  } : null

  return (
    <>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      {breadcrumbSchema && (
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          strategy="afterInteractive"
        />
      )}
      {faqSchema && (
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="afterInteractive"
        />
      )}
    </>
  )
}

export default StructuredData