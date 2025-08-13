"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, GraduationCap, ShoppingBag, Users, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Leaf,
      title: "Recreational Cannabis",
      description: "Premium flower, edibles, concentrates, and more for adults 21+",
      features: ["Wide product selection", "Daily specials", "New arrivals weekly"],
      bgColor: "bg-library-gold/10",
      iconColor: "text-library-gold"
    },
    {
      icon: Heart,
      title: "Medical Cannabis",
      description: "Compassionate care for registered medical marijuana patients",
      features: ["Personalized consultations", "Medical-grade products", "Patient discounts"],
      bgColor: "bg-library-teal/10",
      iconColor: "text-library-teal"
    },
    {
      icon: GraduationCap,
      title: "Cannabis Education",
      description: "Learn about strains, effects, and responsible consumption",
      features: ["One-on-one guidance", "Educational materials", "Community workshops"],
      bgColor: "bg-library-burgundy/10",
      iconColor: "text-library-burgundy"
    }
  ];

  const additionalServices = [
    {
      icon: ShoppingBag,
      title: "Online Ordering",
      description: "Coming soon - Browse and order ahead for quick pickup"
    },
    {
      icon: Users,
      title: "Personal Consultations",
      description: "Coming soon - Get personalized recommendations from our experts"
    },
    {
      icon: Clock,
      title: "Express Pickup",
      description: "Coming soon - Skip the line with online orders"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-library-white to-library-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-library-brown mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-library-gold mx-auto mb-8"></div>
          <p className="text-lg text-library-black/80 max-w-3xl mx-auto">
            When we open, we&apos;ll provide comprehensive services to meet your cannabis needs 
            with professionalism and care - for both medical patients and recreational consumers.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-library-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`${service.bgColor} p-6`}>
                <div className="w-16 h-16 bg-library-white rounded-full flex items-center justify-center mb-4">
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-2xl font-serif text-library-brown mb-2">{service.title}</h3>
                <p className="text-library-black/70">{service.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className={`w-5 h-5 rounded-full ${service.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <span className={`text-xs ${service.iconColor}`}>✓</span>
                      </div>
                      <span className="text-library-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-library-brown rounded-lg p-8 lg:p-12"
        >
          <h3 className="text-2xl font-serif text-library-white mb-8 text-center">
            Additional Services Coming Soon
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="text-center">
                <div className="w-12 h-12 bg-library-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <service.icon className="w-6 h-6 text-library-white" />
                </div>
                <h4 className="text-library-white font-semibold mb-2">{service.title}</h4>
                <p className="text-library-white/80 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-library-black/70 mb-6">
            Be the first to know when The Library opens!
          </p>
          <button
            className="inline-flex items-center gap-2 bg-library-gold text-library-white px-8 py-3 rounded-full font-semibold hover:bg-library-gold/90 transition-colors"
          >
            Sign Up for Updates
          </button>
        </motion.div>
      </div>
    </section>
  );
}