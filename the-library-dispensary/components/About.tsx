"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, Shield } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Licensed & Compliant",
      description: "Fully licensed by the State of New Jersey Cannabis Regulatory Commission"
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Knowledgeable budtenders ready to guide your cannabis journey"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Committed to serving West Orange with care and integrity"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Lab-tested products from trusted New Jersey cultivators"
    }
  ];

  return (
    <section id="about" className="py-20 bg-library-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-library-brown mb-4">
            About The Library
          </h2>
          <div className="w-24 h-1 bg-library-gold mx-auto mb-8"></div>
          <p className="text-lg text-library-black/80 max-w-3xl mx-auto">
            More than just a dispensary, The Library is your trusted resource for cannabis education 
            and premium products. We believe in empowering our community with knowledge while providing 
            access to the finest cannabis New Jersey has to offer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif text-library-brown mb-4">Our Story</h3>
            <div className="space-y-4 text-library-black/70">
              <p>
                The Library was founded on the principle that cannabis consumers deserve a sophisticated, 
                educational, and welcoming environment. Just as a traditional library serves as a repository 
                of knowledge, we serve as your trusted source for cannabis information and products.
              </p>
              <p>
                Located in the heart of West Orange, we&apos;re proud to be part of this vibrant community. 
                Our team is passionate about helping both newcomers and experienced consumers find the 
                perfect products for their needs.
              </p>
              <p>
                Every product on our shelves has been carefully selected for quality, potency, and consistency. 
                We work directly with New Jersey&apos;s finest cultivators and manufacturers to ensure you have 
                access to the best the state has to offer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-library-teal/5 rounded-lg p-8 border border-library-teal/20"
          >
            <h3 className="text-2xl font-serif text-library-brown mb-6">Our Mission</h3>
            <blockquote className="text-lg italic text-library-teal mb-6">
              &ldquo;To provide West Orange with a premier cannabis experience that combines education, 
              quality products, and exceptional service in an atmosphere of sophistication and comfort.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-library-gold rounded-full flex items-center justify-center">
                <BookIcon className="w-8 h-8 text-library-white" />
              </div>
              <div>
                <p className="font-semibold text-library-brown">The Library Team</p>
                <p className="text-sm text-library-black/60">Your Local Cannabis Experts</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg hover:bg-library-gold/5 transition-colors"
            >
              <div className="w-14 h-14 bg-library-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-library-gold" />
              </div>
              <h4 className="font-semibold text-library-brown mb-2">{feature.title}</h4>
              <p className="text-sm text-library-black/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom Book Icon Component
function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
    </svg>
  );
}