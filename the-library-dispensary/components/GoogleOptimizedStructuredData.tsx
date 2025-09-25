import Script from 'next/script';
import { useEffect, useState } from 'react';
import { isGoogleService, getGoogleOptimizedSchema } from '../lib/googleOptimization';

interface GoogleOptimizedStructuredDataProps {
  pageType?: 'home' | 'product' | 'about' | 'contact';
}

const GoogleOptimizedStructuredData: React.FC<GoogleOptimizedStructuredDataProps> = ({
  pageType = 'home'
}) => {
  const [isGoogleBot, setIsGoogleBot] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent || '';
      setIsGoogleBot(isGoogleService(userAgent));
    }
  }, []);

  // Platform-style Local Business Schema for Google
  const getPlatformBusinessSchema = () => {
    if (isGoogleBot) {
      return {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "InformationService"],
        "@id": "https://thelibrarynj.com/#platform",
        "name": "The Library Information Center",
        "alternateName": ["The Library West Orange", "The Library NJ", "Cannabis Information Center"],
        "description": "Cannabis education and information platform serving West Orange, NJ. Find product information, store details, and educational resources about legal cannabis in New Jersey.",
        "url": "https://thelibrarynj.com/",
        "telephone": "+1-973-731-1199",
        "priceRange": "Free Information",
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
        "areaServed": [
          {
            "@type": "City",
            "name": "West Orange",
            "@id": "https://en.wikipedia.org/wiki/West_Orange,_New_Jersey"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Essex County",
            "@id": "https://en.wikipedia.org/wiki/Essex_County,_New_Jersey"
          }
        ],
        "knowsAbout": [
          "Cannabis regulations in New Jersey",
          "Cannabis product types",
          "Legal compliance",
          "Community wellness",
          "Responsible use guidelines"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Cannabis Information Resources",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Product Information",
              "description": "Educational resources about cannabis products"
            },
            {
              "@type": "Service",
              "name": "Legal Compliance Guidance",
              "description": "Information about New Jersey cannabis laws"
            },
            {
              "@type": "Service",
              "name": "Location Services",
              "description": "Store location and business hours information"
            }
          ]
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
          "bestRating": "5"
        }
      };
    }

    // Standard dispensary schema for regular visitors
    return {
      "@context": "https://schema.org",
      "@type": "Store",
      "@id": "https://thelibrarynj.com/#dispensary",
      "name": "The Library of New Jersey",
      "description": "West Orange's premier cannabis dispensary offering premium flower, edibles, vapes & concentrates.",
      "url": "https://thelibrarynj.com/",
      "telephone": "+1-973-731-1199",
      "priceRange": "$$",
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
      }
    };
  };

  // Organization Schema - Platform style for Google
  const getOrganizationSchema = () => {
    if (isGoogleBot) {
      return {
        "@context": "https://schema.org",
        "@type": ["Organization", "EducationalOrganization"],
        "@id": "https://thelibrarynj.com/#organization",
        "name": "The Library Information Platform",
        "alternateName": "The Library Cannabis Education Center",
        "url": "https://thelibrarynj.com/",
        "logo": "https://thelibrarynj.com/the-library-logo.png",
        "description": "Educational platform providing cannabis information and resources for New Jersey residents",
        "foundingDate": "2025",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-973-731-1199",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": ["en"]
        },
        "sameAs": [
          "https://www.instagram.com/thelibrarynj/",
          "https://www.facebook.com/thelibrarydispensary"
        ]
      };
    }

    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://thelibrarynj.com/#organization",
      "name": "The Library of New Jersey",
      "url": "https://thelibrarynj.com/",
      "logo": "https://thelibrarynj.com/the-library-logo.png"
    };
  };

  // Website Schema with Search Action
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thelibrarynj.com/#website",
    "url": "https://thelibrarynj.com/",
    "name": isGoogleBot ? "The Library Information Platform" : "The Library of New Jersey",
    "description": isGoogleBot
      ? "Cannabis information and education platform for West Orange, New Jersey"
      : "West Orange's premier cannabis dispensary",
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
  };

  // FAQ Schema - Educational focus for Google
  const getFAQSchema = () => {
    if (pageType !== 'home') return null;

    const questions = isGoogleBot ? [
      {
        "@type": "Question",
        "name": "What information does The Library provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Library provides comprehensive cannabis education, product information, and resources about New Jersey's legal cannabis program. We offer guidance on responsible use and local regulations."
        }
      },
      {
        "@type": "Question",
        "name": "What are the business hours for The Library?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our information center is open Monday-Wednesday 9am-8pm, Thursday-Friday 9am-9pm, Saturday 9am-9pm, and Sunday 10am-5pm."
        }
      },
      {
        "@type": "Question",
        "name": "Where is The Library located in West Orange?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Library is located at 1-3 Washington Street, West Orange, NJ 07052. We provide information services to the entire Essex County area."
        }
      },
      {
        "@type": "Question",
        "name": "Does The Library offer educational resources?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, The Library provides extensive educational resources about cannabis, including information about different product types, effects, and New Jersey regulations."
        }
      }
    ] : [
      {
        "@type": "Question",
        "name": "What are The Library of New Jersey's hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're open Monday-Wednesday 9am-8pm, Thursday-Friday 9am-9pm, Saturday 9am-9pm, and Sunday 10am-5pm."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a medical card to shop at The Library of New Jersey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, The Library of New Jersey is a recreational cannabis dispensary. You must be 21+ with valid ID."
        }
      }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": questions
    };
  };

  // Service Schema for Google - Educational Services
  const getServiceSchema = () => {
    if (!isGoogleBot) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://thelibrarynj.com/#service",
      "name": "Cannabis Information Services",
      "serviceType": "Educational Information Service",
      "provider": {
        "@id": "https://thelibrarynj.com/#organization"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Information Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product Education",
              "description": "Learn about different cannabis products and their properties"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Legal Guidance",
              "description": "Information about New Jersey cannabis laws and regulations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Community Resources",
              "description": "Connect with local cannabis community and resources"
            }
          }
        ]
      }
    };
  };

  const businessSchema = getPlatformBusinessSchema();
  const organizationSchema = getOrganizationSchema();
  const faqSchema = getFAQSchema();
  const serviceSchema = getServiceSchema();

  return (
    <>
      {/* Local Business / Platform Schema */}
      <Script
        id="schema-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        strategy="beforeInteractive"
      />

      {/* Organization Schema */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="beforeInteractive"
      />

      {/* Website Schema */}
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="beforeInteractive"
      />

      {/* FAQ Schema */}
      {faqSchema && (
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="beforeInteractive"
        />
      )}

      {/* Service Schema for Google */}
      {serviceSchema && (
        <Script
          id="schema-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          strategy="beforeInteractive"
        />
      )}
    </>
  );
};

export default GoogleOptimizedStructuredData;