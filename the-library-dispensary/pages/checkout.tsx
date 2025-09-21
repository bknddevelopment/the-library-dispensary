import { NextPage } from 'next';
import SEO from '../components/SEO';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

// External Dutchie URL for The Library Dispensary
const DUTCHIE_EXTERNAL_URL = 'https://dutchie.com/dispensary/the-library';

const CheckoutPage: NextPage = () => {
  useEffect(() => {
    // Automatically redirect to external Dutchie website
    window.location.href = DUTCHIE_EXTERNAL_URL;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-library-brown-darkest via-library-brown-dark to-library-brown-darkest flex items-center justify-center">
      <SEO
        title="Redirecting to Dutchie | The Library Dispensary"
        description="Redirecting to our Dutchie ordering platform for a secure checkout experience."
        keywords="cannabis checkout, dispensary order, West Orange dispensary, NJ marijuana, order cannabis online"
        ogImage="/og-checkout.jpg"
      />

      <div className="text-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-display text-library-gold mb-4 uppercase tracking-wider">
            Redirecting to Checkout
          </h1>
          <p className="text-library-cream/80 text-lg mb-6">
            Taking you to our secure Dutchie ordering platform...
          </p>

          {/* Loading animation */}
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-library-gold border-t-transparent rounded-full"
            />
          </div>

          <p className="text-library-cream/60 text-sm">
            If you are not redirected automatically,{' '}
            <a href={DUTCHIE_EXTERNAL_URL} className="text-library-gold hover:text-library-gold-light underline">
              click here to continue
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;