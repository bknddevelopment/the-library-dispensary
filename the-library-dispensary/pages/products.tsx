import { NextPage } from 'next';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import FloatingParticles from '../components/FloatingParticles';
import FloatingIntakeButton from '../components/FloatingIntakeButton';
import DutchieEmbed from '../components/DutchieEmbed';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Book, Clock, MapPin, Phone } from 'lucide-react';

// Dutchie retailer ID for The Library Dispensary
const DUTCHIE_RETAILER_ID = 'the-library';

const ProductsPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Products | The Library Dispensary - Premium Cannabis Menu"
        description="Browse our curated selection of premium cannabis products including flower, edibles, concentrates, and more. Shop online for pickup or delivery at The Library Dispensary in West Orange, NJ."
        keywords="cannabis products, dispensary menu, West Orange dispensary, NJ marijuana, cannabis flower, edibles, concentrates, vapes, CBD products"
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

      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />

      <PageTransition>
        <main className="min-h-screen bg-gradient-to-b from-library-brown-darkest via-library-brown-dark to-library-brown-darkest">
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                {/* Ornamental Header */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1 max-w-xs" />
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex items-center gap-2 glass-gold px-6 py-3 rounded-full"
                  >
                    <ShoppingBag className="w-5 h-5 text-library-gold" />
                    <span className="font-display text-library-gold uppercase tracking-wider">
                      Our Collection
                    </span>
                  </motion.div>
                  <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1 max-w-xs" />
                </div>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-5xl lg:text-7xl font-display text-gold-foil mb-4"
                >
                  Premium Cannabis
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl text-library-cream/80 italic max-w-3xl mx-auto"
                >
                  Explore our meticulously curated selection of finest cannabis products,
                  each chosen for quality, potency, and the exceptional experience they deliver.
                </motion.p>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                <div className="glass-dark p-6 rounded-lg border border-library-gold/20 text-center">
                  <Clock className="w-8 h-8 text-library-gold mx-auto mb-3" />
                  <h3 className="font-display text-library-gold-light text-lg mb-2">Store Hours</h3>
                  <p className="text-library-cream/70 text-sm">
                    Mon-Sat: 10AM - 9PM<br />
                    Sunday: 10AM - 8PM
                  </p>
                </div>

                <div className="glass-dark p-6 rounded-lg border border-library-gold/20 text-center">
                  <MapPin className="w-8 h-8 text-library-gold mx-auto mb-3" />
                  <h3 className="font-display text-library-gold-light text-lg mb-2">Location</h3>
                  <p className="text-library-cream/70 text-sm">
                    1-3 Washington St<br />
                    West Orange, NJ 07052
                  </p>
                </div>

                <div className="glass-dark p-6 rounded-lg border border-library-gold/20 text-center">
                  <Phone className="w-8 h-8 text-library-gold mx-auto mb-3" />
                  <h3 className="font-display text-library-gold-light text-lg mb-2">Contact</h3>
                  <p className="text-library-cream/70 text-sm">
                    Call: (973) 731-1199<br />
                    For orders & inquiries
                  </p>
                </div>
              </motion.div>

              {/* Category Navigation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-3 mb-8"
              >
                {['All Products', 'Flower', 'Edibles', 'Concentrates', 'Vapes', 'CBD', 'Accessories'].map((category, idx) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 glass rounded-full border border-library-gold/20 hover:border-library-gold/40 text-library-cream hover:text-library-gold transition-all text-sm font-medium"
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>

              {/* Dutchie Menu Embed */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="glass-dark p-4 lg:p-8 rounded-xl border border-library-gold/20"
              >
                <DutchieEmbed
                  retailerId={DUTCHIE_RETAILER_ID}
                  className="w-full"
                  enableSEO={true}
                  height="2500px"
                />
              </motion.div>

              {/* Additional Information */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-12 text-center"
              >
                <div className="glass p-8 rounded-lg max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Book className="w-6 h-6 text-library-gold" />
                    <h2 className="text-2xl font-display text-library-gold">Shopping Guide</h2>
                    <Sparkles className="w-6 h-6 text-library-gold" />
                  </div>
                  <p className="text-library-cream/80 mb-6">
                    Browse our complete menu above and add items to your cart. Choose between
                    pickup or delivery options at checkout. First-time customers receive a
                    special welcome discount!
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div>
                      <h3 className="font-display text-library-gold-light mb-2">Order Online</h3>
                      <p className="text-library-cream/70 text-sm">
                        Browse products, read reviews, and place your order directly through our menu.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-library-gold-light mb-2">Pickup or Delivery</h3>
                      <p className="text-library-cream/70 text-sm">
                        Choose in-store pickup for fastest service or delivery to your location.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-library-gold-light mb-2">Expert Guidance</h3>
                      <p className="text-library-cream/70 text-sm">
                        Our knowledgeable staff is here to help you find the perfect products.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </>
  );
};

export default ProductsPage;