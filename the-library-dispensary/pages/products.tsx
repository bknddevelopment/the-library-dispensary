import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import FloatingParticles from '../components/FloatingParticles';
import FloatingIntakeButton from '../components/FloatingIntakeButton';
import ProductPageAlert from '../components/ProductPageAlert';

interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
  available: boolean;
}

const productCategories: ProductCategory[] = [
  {
    id: 'flower',
    title: 'Flower',
    subtitle: 'Premium Cannabis Buds',
    description: 'Hand-selected strains cultivated with care. From energizing sativas to relaxing indicas, each bud tells its own story.',
    icon: '🌿',
    color: 'text-library-emerald-light',
    bgGradient: 'from-library-emerald/20 to-library-emerald/5',
    available: true
  },
  {
    id: 'pre-rolls',
    title: 'Pre-Rolls',
    subtitle: 'Expertly Crafted Joints',
    description: 'Perfectly rolled and ready to enjoy. Premium flower in convenient, artisanal form.',
    icon: '🚬',
    color: 'text-library-gold',
    bgGradient: 'from-library-gold/20 to-library-gold/5',
    available: true
  },
  {
    id: 'vaporizers',
    title: 'Vaporizers',
    subtitle: 'Discreet & Refined',
    description: 'High-quality vape cartridges and disposables for a smooth, sophisticated experience.',
    icon: '💨',
    color: 'text-library-copper-light',
    bgGradient: 'from-library-copper/20 to-library-copper/5',
    available: true
  },
  {
    id: 'concentrates',
    title: 'Concentrates',
    subtitle: 'Potent Extracts',
    description: 'Premium waxes, shatters, and oils for the experienced connoisseur.',
    icon: '💎',
    color: 'text-library-burgundy-light',
    bgGradient: 'from-library-burgundy/20 to-library-burgundy/5',
    available: true
  },
  {
    id: 'edibles',
    title: 'Edibles',
    subtitle: 'Delicious Infusions',
    description: 'Gummies, chocolates, and beverages. Precisely dosed for a controlled journey.',
    icon: '🍬',
    color: 'text-library-gold-light',
    bgGradient: 'from-library-gold-light/20 to-library-gold-light/5',
    available: true
  },
  {
    id: 'accessories',
    title: 'Accessories',
    subtitle: 'Essential Tools',
    description: 'Premium grinders, papers, and everything you need for the perfect session.',
    icon: '🔧',
    color: 'text-library-cream',
    bgGradient: 'from-library-brown-light/20 to-library-brown-light/5',
    available: true
  }
];

const ProductsPage: NextPage = () => {
  const router = useRouter();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // External Dutchie URL for The Library Dispensary
  const DUTCHIE_EXTERNAL_URL = 'https://dutchie.com/dispensary/the-library';

  const handleOrderNow = () => {
    // Redirect to external Dutchie website
    window.location.href = DUTCHIE_EXTERNAL_URL;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-library-brown-darkest via-library-brown-dark to-library-brown-darkest">
      <SEO
        title="Browse Our Collection | The Library Dispensary"
        description="Explore our curated selection of premium cannabis products. From classic flower to modern concentrates, discover your perfect match at The Library."
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
              "itemListElement": productCategories.map(cat => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": cat.title,
                  "category": cat.title,
                  "description": cat.description
                }
              }))
            }
          })
        }}
      />

      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />

      <PageTransition>
        <main className="relative">
          {/* Hero Section with Library Theme */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-72 h-72 bg-library-gold rounded-full filter blur-3xl animate-pulse-glow" />
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-library-burgundy rounded-full filter blur-3xl animate-pulse-glow" />
            </div>

            <div className="relative max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Library Metaphor Title */}
                <h1 className="font-display text-5xl md:text-7xl text-gold-foil mb-6 tracking-wider uppercase">
                  Browse Our Collection
                </h1>
                <p className="text-xl md:text-2xl text-library-cream/80 mb-4 font-serif italic">
                  "Every strain tells a story, every product a journey"
                </p>
                <p className="text-lg text-library-cream/60 max-w-3xl mx-auto">
                  Welcome to The Library's curated cannabis collection. Like rare volumes in a distinguished library,
                  each product is carefully selected to ensure the highest quality and most refined experience.
                </p>
              </motion.div>

              {/* Product Page Alert - September Promotion */}
              <ProductPageAlert />

              {/* Prominent Order Now Button with Enhanced Styling */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-12"
              >
                <motion.button
                  onClick={handleOrderNow}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-library-gold via-library-gold-light to-library-gold text-library-brown-darkest font-bold text-xl rounded-full shadow-2xl hover:shadow-library-gold/50 transform transition-all duration-300"
                  aria-label="Order Now - Shop on Dutchie"
                >
                  {/* Animated glow effect */}
                  <span className="absolute inset-0 rounded-full bg-library-gold opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 animate-pulse" />

                  {/* Shopping cart icon */}
                  <svg className="w-7 h-7 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v8m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>

                  <span className="relative z-10 uppercase tracking-widest font-display">
                    Order Now
                  </span>

                  {/* Arrow icon with animation */}
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-6 relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.button>

                <p className="mt-4 text-library-cream/60 text-sm">
                  You'll be redirected to our Dutchie ordering platform • Free pickup available
                </p>
              </motion.div>
            </div>
          </section>

          {/* Product Categories Grid - Library Themed */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl text-library-gold mb-4 uppercase tracking-wide">
                  Explore by Category
                </h2>
                <p className="text-library-cream/70 max-w-2xl mx-auto">
                  Each section of our collection is thoughtfully curated, like chapters in a masterpiece
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    onHoverStart={() => setHoveredCategory(category.id)}
                    onHoverEnd={() => setHoveredCategory(null)}
                    className="relative group"
                  >
                    <motion.div
                      className={`
                        relative h-full p-8 rounded-2xl overflow-hidden cursor-pointer
                        bg-gradient-to-br ${category.bgGradient}
                        backdrop-blur-md border border-library-gold/20
                        hover:border-library-gold/40 transition-all duration-300
                        shadow-lg hover:shadow-2xl hover:shadow-library-gold/20
                        min-h-[320px] flex flex-col
                        leather-texture
                      `}
                      role="button"
                      tabIndex={0}
                      aria-label={`Browse ${category.title} products`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleOrderNow();
                        }
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleOrderNow();
                      }}
                    >
                      {/* Background Pattern - Book Spine Effect */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-repeat" style={{
                          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(212, 165, 116, 0.2) 35px, rgba(212, 165, 116, 0.2) 40px)`
                        }} />
                      </div>

                      {/* Icon with Enhanced Size */}
                      <div className="relative mb-4">
                        <motion.span
                          animate={hoveredCategory === category.id ? { rotate: [0, -5, 5, 0] } : {}}
                          transition={{ duration: 0.5 }}
                          className="text-6xl filter drop-shadow-lg block"
                        >
                          {category.icon}
                        </motion.span>
                      </div>

                      {/* Content */}
                      <div className="relative flex-grow">
                        <h3 className={`font-display text-2xl mb-2 ${category.color} transition-colors uppercase tracking-wide`}>
                          {category.title}
                        </h3>
                        <p className="text-library-gold/80 font-semibold mb-3 font-serif">
                          {category.subtitle}
                        </p>
                        <p className="text-library-cream/60 text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>

                      {/* Hover Indicator */}
                      <AnimatePresence>
                        {hoveredCategory === category.id && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute bottom-4 right-4 flex items-center gap-2 text-library-gold"
                          >
                            <span className="text-sm font-semibold">Explore</span>
                            <motion.svg
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </motion.svg>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Decorative Corner - Book Page Effect */}
                      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-t-library-gold/10 border-l-[80px] border-l-transparent group-hover:border-t-library-gold/20 transition-colors duration-300" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Library-Themed Call to Action Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Library Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(212, 165, 116, 0.1) 50px, rgba(212, 165, 116, 0.1) 51px)`,
              }} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-4xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl text-library-gold mb-6 uppercase tracking-wide">
                Ready to Write Your Story?
              </h2>
              <p className="text-lg text-library-cream/70 mb-10 font-serif">
                Our knowledgeable librarians are here to guide you through our extensive collection.
                Whether you're a seasoned scholar or new to the library, we'll help you find
                the perfect addition to your personal collection.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  onClick={handleOrderNow}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-library-gold to-library-gold-light text-library-brown-darkest font-bold text-lg rounded-full shadow-xl hover:shadow-library-gold/40 transform transition-all duration-300"
                  aria-label="Start Shopping on Dutchie"
                >
                  <span className="absolute inset-0 rounded-full bg-library-gold opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
                  <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="relative z-10 uppercase tracking-wider">Start Shopping</span>
                </motion.button>

                <a
                  href="/first-visit"
                  className="inline-flex items-center gap-2 px-8 py-4 glass border border-library-gold/30 rounded-full text-library-cream hover:glass-gold hover:text-library-brown-darkest font-semibold transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  First Time Visit Guide
                </a>
              </div>

              {/* Store Hours Card - Library Card Style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 p-8 glass-dark rounded-2xl border border-library-gold/20 max-w-2xl mx-auto book-shadow"
              >
                <h3 className="font-display text-2xl text-library-gold mb-4 uppercase tracking-wide">
                  Library Hours
                </h3>
                <div className="space-y-2 text-library-cream/70">
                  <p className="font-semibold text-library-cream font-serif text-lg">Open for Browsing</p>
                  <p>Monday - Saturday: 10:00 AM - 9:00 PM</p>
                  <p>Sunday: 10:00 AM - 8:00 PM</p>
                  <div className="pt-4 mt-4 border-t border-library-gold/20">
                    <p className="text-library-gold/80 font-serif">
                      1-3 Washington St, West Orange, NJ 07052
                    </p>
                    <a
                      href="tel:973-731-1199"
                      className="inline-flex items-center gap-2 mt-3 text-library-gold hover:text-library-gold-light transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-semibold">(973) 731-1199</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Additional Order Now Section */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-library-gold/10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-library-cream/60 mb-6">
                Ready to check out your selections?
              </p>
              <motion.button
                onClick={handleOrderNow}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-4 bg-library-gold text-library-brown-darkest font-bold text-lg rounded-full shadow-lg hover:bg-library-gold-light transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="uppercase tracking-wider">Shop on Dutchie</span>
              </motion.button>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
};

export default ProductsPage;