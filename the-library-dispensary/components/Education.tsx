"use client";

import { motion } from "framer-motion";
import { BookOpen, Beaker, Heart, Brain, Shield, Sprout, ArrowRight } from "lucide-react";

export default function Education() {
  const topics = [
    {
      icon: Beaker,
      title: "Understanding Cannabinoids",
      description: "Learn about THC, CBD, CBG, and other cannabinoids and their unique effects.",
      color: "bg-library-gold/10",
      iconColor: "text-library-gold",
      content: [
        "Different cannabinoid profiles",
        "Entourage effect explained",
        "Choosing the right ratios"
      ]
    },
    {
      icon: Sprout,
      title: "Indica vs Sativa vs Hybrid",
      description: "Discover the differences between cannabis types and their typical effects.",
      color: "bg-library-teal/10",
      iconColor: "text-library-teal",
      content: [
        "Physical vs mental effects",
        "Best times for use",
        "Popular strain recommendations"
      ]
    },
    {
      icon: Brain,
      title: "Consumption Methods",
      description: "From flower to edibles, understand onset times and duration of effects.",
      color: "bg-library-burgundy/10",
      iconColor: "text-library-burgundy",
      content: [
        "Smoking vs vaping",
        "Edibles dosing guide",
        "Topicals and tinctures"
      ]
    },
    {
      icon: Heart,
      title: "Cannabis for Wellness",
      description: "Explore how cannabis may support various wellness goals and conditions.",
      color: "bg-library-gold/10",
      iconColor: "text-library-gold",
      content: [
        "Sleep and relaxation",
        "Exercise recovery",
        "Stress management"
      ]
    },
    {
      icon: Shield,
      title: "Safe & Responsible Use",
      description: "Best practices for responsible consumption and storage.",
      color: "bg-library-teal/10",
      iconColor: "text-library-teal",
      content: [
        "Start low, go slow",
        "Proper storage methods",
        "Know your limits"
      ]
    },
    {
      icon: BookOpen,
      title: "New Jersey Cannabis Laws",
      description: "Stay informed about state regulations and your rights as a consumer.",
      color: "bg-library-burgundy/10",
      iconColor: "text-library-burgundy",
      content: [
        "Purchase limits",
        "Where you can consume",
        "Driving regulations"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-library-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-library-brown mb-4">
            Education Hub
          </h2>
          <div className="w-24 h-1 bg-library-gold mx-auto mb-8"></div>
          <p className="text-lg text-library-black/80 max-w-3xl mx-auto">
            Knowledge is power. Explore our educational resources to make informed decisions 
            about your cannabis journey.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-library-white border border-library-brown/10 rounded-lg overflow-hidden hover:shadow-lg transition-all"
            >
              <div className={`${topic.color} p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-library-white rounded-full flex items-center justify-center`}>
                    <topic.icon className={`w-6 h-6 ${topic.iconColor}`} />
                  </div>
                  <ArrowRight className="w-5 h-5 text-library-black/30 group-hover:text-library-gold transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-library-brown mb-2">{topic.title}</h3>
                <p className="text-library-black/70 text-sm">{topic.description}</p>
              </div>
              <div className="p-6">
                <h4 className="text-sm font-semibold text-library-brown mb-3">Learn About:</h4>
                <ul className="space-y-2">
                  {topic.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-library-black/60">
                      <span className={`${topic.iconColor} mt-0.5`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Educational Resources CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-library-teal to-library-teal/90 rounded-lg p-8 lg:p-12 text-library-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-serif mb-4">
              Want to Learn More?
            </h3>
            <p className="mb-6 text-library-white/90">
              When we open, our knowledgeable staff will be ready to answer your questions and provide 
              personalized guidance. You&apos;ll be able to schedule one-on-one consultations and join 
              educational workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-library-white text-library-teal px-6 py-3 rounded-full font-semibold hover:bg-library-white/90 transition-colors">
                Get Updates on Consultations
              </button>
              <button className="border-2 border-library-white text-library-white px-6 py-3 rounded-full font-semibold hover:bg-library-white hover:text-library-teal transition-all">
                Learn About Future Workshops
              </button>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 bg-library-burgundy/5 border border-library-burgundy/20 rounded-lg"
        >
          <p className="text-sm text-library-burgundy text-center">
            <strong>Educational Disclaimer:</strong> This information is for educational purposes only and is not intended 
            as medical advice. Cannabis affects everyone differently. Always consult with a healthcare 
            professional regarding medical conditions and start with low doses when trying new products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}