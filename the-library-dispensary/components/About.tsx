"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, Shield, Feather, BookOpen } from "lucide-react";
import PremiumBackground from "./PremiumBackground";

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Licensed & Compliant",
      description: "Fully licensed by the State of New Jersey Cannabis Regulatory Commission (License: RE000228)"
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Knowledgeable budtenders ready to guide your cannabis journey"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Committed to serving New Jersey with care and integrity"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Lab-tested products from trusted New Jersey cultivators"
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <PremiumBackground variant="dark" enableParallax={false}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent w-24" />
              <Feather className="w-8 h-8 text-library-gold animate-float" />
              <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent w-24" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-display text-gold-foil mb-6">
              About The Library of New Jersey
            </h2>
            <p className="text-lg text-library-cream/80 max-w-3xl mx-auto leading-relaxed">
              More than just a dispensary, The Library of New Jersey is your trusted resource for cannabis education 
              and premium products. We believe in empowering our community with knowledge while providing 
              access to the finest cannabis New Jersey has to offer.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-gold rounded-xl p-6 text-center hover:shadow-gold transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-library-gold/20 to-library-gold-dark/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-library-gold-light" />
                </div>
                <h3 className="text-lg font-display text-library-cream mb-2">{feature.title}</h3>
                <p className="text-library-cream/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-display text-library-gold-light mb-6">
                Your Cannabis Journey Starts Here
              </h3>
              <div className="mb-6 p-4 bg-library-gold/10 border border-library-gold/30 rounded-lg">
                <p className="text-library-gold font-semibold">
                  NJ Cannabis Retail License: RE000228
                </p>
              </div>
              <div className="space-y-4 text-library-cream/80">
                <p>
                  The Library of New Jersey is more than a name – it&apos;s our philosophy. Just as a traditional library 
                  serves as a repository of knowledge and a community gathering space, we&apos;re creating a 
                  dispensary that prioritizes education, quality, and community connection.
                </p>
                <p>
                  Our carefully curated selection represents the finest that New Jersey&apos;s cannabis 
                  industry has to offer. From premium flower to artisanal edibles, every product on 
                  our shelves has been chosen with care and expertise.
                </p>
                <p>
                  When you visit The Library of New Jersey, you&apos;re not just a customer – you&apos;re a member of our 
                  community. Our knowledgeable staff is here to guide you, whether you&apos;re a cannabis 
                  connoisseur or just beginning your journey.
                </p>
              </div>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative group overflow-hidden rounded-full inline-block mt-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-library-gold via-library-gold-light to-library-gold animate-shimmer bg-[length:200%_100%]" />
                <span className="relative flex items-center gap-2 px-8 py-3 text-library-brown-darkest font-semibold">
                  Learn More About Us
                  <BookOpen className="w-4 h-4" />
                </span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-dark rounded-2xl p-8 border border-library-gold/30 shadow-book"
            >
              <blockquote className="text-lg italic text-library-cream/90 mb-4 font-serif">
                &ldquo;We&apos;re building something special in West Orange – a dispensary that honors the 
                rich tradition of cannabis culture while embracing innovation and education. 
                The Library of New Jersey will be your trusted guide in exploring the world of cannabis.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-library-gold to-library-gold-dark rounded-full flex items-center justify-center shadow-gold">
                  <span className="text-library-brown-darkest font-bold font-display">TL</span>
                </div>
                <div>
                  <p className="font-semibold text-library-cream font-display">The Library of New Jersey Team</p>
                  <p className="text-sm text-library-cream/60">West Orange, New Jersey</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </PremiumBackground>
    </section>
  );
}