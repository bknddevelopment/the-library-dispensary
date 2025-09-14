"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, GraduationCap, ShoppingBag, Users, Clock, Sparkles, BookOpen } from "lucide-react";
import LibraryCard from "./LibraryCard";
import PremiumBackground from "./PremiumBackground";

export default function Services() {
  const mainServices = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Recreational Cannabis",
      category: "PREMIUM COLLECTION",
      description: "Discover our carefully curated selection of premium flower, artisanal edibles, and refined concentrates, all selected for the discerning connoisseur.",
      details: [
        "Hand-selected premium strains",
        "Artisan-crafted edibles",
        "Small-batch concentrates",
        "Exclusive weekly arrivals"
      ],
      featured: true
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Wellness Curation",
      category: "HEALTH & HARMONY",
      description: "Experience cannabis through the lens of wellness with products selected for their therapeutic properties and balanced effects.",
      details: [
        "Lab-tested for purity",
        "Cannabinoid profiles available",
        "Wellness-focused selection",
        "Personalized recommendations"
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Cannabis Education",
      category: "KNOWLEDGE CENTER",
      description: "Elevate your understanding with our comprehensive education program, from beginner basics to connoisseur cultivation.",
      details: [
        "One-on-one consultations",
        "Monthly masterclasses",
        "Tasting events",
        "Digital resource library"
      ]
    }
  ];

  const comingSoonServices = [
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Reserve & Collect",
      description: "Browse our digital catalog and reserve your selections for a seamless in-store experience"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Private Consultations",
      description: "Schedule exclusive sessions with our cannabis sommeliers for personalized guidance"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Members' Hour",
      description: "Enjoy early access and exclusive benefits during our special members-only hours"
    }
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <PremiumBackground variant="section" enableParallax={false}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Ornamental header */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent w-24" />
              <BookOpen className="w-8 h-8 text-library-gold animate-float" />
              <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent w-24" />
            </div>

            <h2 className="text-5xl lg:text-6xl font-display text-gold-foil mb-6 gpu-accelerated" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Our Distinguished Services
            </h2>
            
            <p className="text-lg text-library-cream/80 max-w-3xl mx-auto leading-relaxed">
              Step into a world where cannabis meets sophistication. Our services are designed 
              to elevate your experience beyond the ordinary dispensary visit.
            </p>
          </motion.div>

          {/* Main Services Grid with Library Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <LibraryCard
                key={service.title}
                title={service.title}
                category={service.category}
                description={service.description}
                details={service.details}
                icon={service.icon}
                delay={index * 0.2}
                featured={service.featured}
              />
            ))}
          </div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-dark rounded-2xl p-12 mb-16"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-display text-library-gold-light mb-4">
                Enhanced Services Coming Soon
              </h3>
              <p className="text-library-cream/70">
                We&apos;re crafting exclusive experiences for our distinguished clientele
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {comingSoonServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.2, type: "spring" } }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="w-16 h-16 bg-gradient-to-br from-library-gold/20 to-library-gold-dark/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-gold border border-library-gold/30 gpu-accelerated"
                  >
                    <div className="text-library-gold-light">
                      {service.icon}
                    </div>
                  </motion.div>
                  <h4 className="text-library-cream font-display text-lg mb-3">
                    {service.title}
                  </h4>
                  <p className="text-library-cream/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Premium CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-block">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="glass-gold rounded-2xl p-8 text-center"
              >
                <Sparkles className="w-8 h-8 text-library-gold mx-auto mb-4 animate-pulse" />
                <p className="text-library-cream mb-6 text-lg">
                  Be among the first to experience The Library&apos;s premium offerings
                </p>
                <motion.a
                  href="https://thelibrary.app.n8n.cloud/form/2de56228-8522-485f-af34-36b282fe359d"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 165, 116, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group overflow-hidden rounded-full inline-block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-library-gold via-library-gold-light to-library-gold animate-shimmer bg-[length:200%_100%]" />
                  <span className="relative flex items-center gap-2 px-10 py-4 text-library-brown-darkest font-semibold tracking-wide">
                    Join Our Founding Members
                    <Sparkles className="w-4 h-4" />
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </PremiumBackground>
    </section>
  );
}