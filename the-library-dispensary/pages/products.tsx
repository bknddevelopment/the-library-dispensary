import { NextPage } from 'next';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import DutchieEmbed from '../components/DutchieEmbed';

// Dutchie retailer ID for The Library Dispensary
const DUTCHIE_RETAILER_ID = 'the-library';

const ProductsPage: NextPage = () => {
  return (
    <div className="products-fullpage">
      <SEO
        title="Shop Online | The Library Dispensary"
        description="Browse and order premium cannabis products online. Flower, edibles, concentrates, and more available for pickup or delivery at The Library Dispensary in West Orange, NJ."
        keywords="cannabis products, dispensary menu, West Orange dispensary, NJ marijuana, cannabis flower, edibles, concentrates, vapes, CBD products, order online"
        ogImage="/og-products.jpg"
      />

      {/* Structured Data for Products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "The Library Dispensary",
            "description": "Premium cannabis dispensary in West Orange, NJ",
            "url": "https://thelibrarydispensary.com/products",
            "telephone": "973-731-1199",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1-3 Washington St",
              "addressLocality": "West Orange",
              "addressRegion": "NJ",
              "postalCode": "07052",
              "addressCountry": "US"
            },
            "openingHours": "Mo-Sa 10:00-21:00, Su 10:00-20:00",
            "priceRange": "$$",
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
                    "name": "Edibles",
                    "category": "Edibles"
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
            }
          })
        }}
      />

      <Header />

      <PageTransition>
        <main className="flex flex-col min-h-screen bg-gradient-to-b from-library-brown-darkest via-library-brown-dark to-library-brown-darkest">
          {/* Full-page Dutchie Embed Section */}
          <section className="flex-1 flex flex-col relative">
            {/* Dutchie Menu Embed - Full viewport height */}
            <div className="flex-1 w-full">
              <DutchieEmbed
                retailerId={DUTCHIE_RETAILER_ID}
                className="w-full h-full"
                enableSEO={true}
                fullPage={true}
              />
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
};

export default ProductsPage;