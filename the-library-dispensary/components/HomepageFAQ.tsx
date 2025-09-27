"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, Clock, Phone, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  icon: any;
}

const faqs: FAQItem[] = [
  {
    question: "Where is The Library dispensary located in West Orange?",
    answer: "We're conveniently located at 1-3 Washington Street, West Orange, NJ 07052, in the heart of Essex County. Our cannabis dispensary is easily accessible from Route 280 and serves customers from West Orange, Livingston, Montclair, Maplewood, and surrounding areas.",
    icon: MapPin
  },
  {
    question: "What are your dispensary hours?",
    answer: "The Library dispensary is open daily to serve your cannabis needs. Monday-Thursday: 10am-9pm, Friday-Saturday: 10am-10pm, Sunday: 10am-8pm. We offer convenient hours for both medical marijuana patients and recreational cannabis customers in West Orange.",
    icon: Clock
  },
  {
    question: "Can I order cannabis online for pickup?",
    answer: "Yes! You can browse our full cannabis menu and place orders online for same-day pickup at our West Orange location. Order your favorite marijuana flower, edibles, vapes, and concentrates through our website and skip the wait.",
    icon: ShoppingBag
  },
  {
    question: "Do you serve recreational cannabis customers?",
    answer: "Yes, The Library is a licensed recreational cannabis dispensary serving adults 21+ in New Jersey. We welcome both recreational customers and medical marijuana patients. Bring a valid government-issued ID to shop our premium cannabis selection.",
    icon: Phone
  },
  {
    question: "What cannabis products do you carry?",
    answer: "Our West Orange dispensary offers a curated selection of premium cannabis products including flower (indica, sativa, hybrid strains), pre-rolls, edibles (gummies, chocolates), vapes, concentrates, topicals, and CBD products. Our expert budtenders can help you find the perfect product.",
    icon: ShoppingBag
  },
  {
    question: "Is this the closest dispensary near me in Essex County?",
    answer: "If you're in West Orange, Livingston, Montclair, Maplewood, South Orange, Millburn, or anywhere in Essex County, The Library is likely your closest premium cannabis dispensary. We're centrally located and easily accessible from major highways.",
    icon: MapPin
  }
];

export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-library-brown-darkest to-library-brown-dark">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-display text-gold-foil mb-4">
            Cannabis Dispensary FAQs
          </h2>
          <p className="text-lg text-library-cream/80">
            Everything you need to know about visiting West Orange's premier marijuana dispensary
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark rounded-lg overflow-hidden border border-library-gold/20 hover:border-library-gold/40 transition-all"
                style={{ backgroundColor: 'rgba(44, 31, 22, 0.8)', backdropFilter: 'blur(10px)' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-library-gold/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-library-gold/10">
                      <Icon className="w-5 h-5 text-library-gold" />
                    </div>
                    <h3 className="text-lg font-semibold text-library-cream">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-library-gold" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pl-16">
                    <p className="text-library-cream/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* License Display Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-lg glass-gold border border-library-gold/30"
               style={{ backgroundColor: 'rgba(212, 165, 116, 0.1)', backdropFilter: 'blur(10px)' }}>
            <p className="text-library-gold font-semibold text-lg">
              NJ Cannabis Retail License: RE000228
            </p>
            <p className="text-library-cream/70 text-sm mt-1">
              Fully licensed and compliant with New Jersey Cannabis Regulatory Commission
            </p>
          </div>
        </motion.div>

        {/* Schema Markup for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}