"use client";

import { motion } from "framer-motion";
import { IdCard, MessageCircle, ShoppingCart, Package, CheckCircle, Info } from "lucide-react";

export default function FirstVisit() {
  const steps = [
    {
      icon: IdCard,
      number: "1",
      title: "Bring Your ID",
      description: "You&apos;ll need a valid government-issued ID. Must be 21+ to enter.",
      tips: ["Driver's license or passport accepted", "We verify all IDs for compliance"]
    },
    {
      icon: MessageCircle,
      number: "2",
      title: "Speak with Our Team",
      description: "Our knowledgeable budtenders will be ready to guide you through our selection and answer questions.",
      tips: ["Ask about effects and potency", "Share your preferences and needs"]
    },
    {
      icon: ShoppingCart,
      number: "3",
      title: "Browse & Select",
      description: "You&apos;ll be able to explore our curated selection of flower, edibles, concentrates, and accessories.",
      tips: ["Start with lower doses", "Try different product types"]
    },
    {
      icon: Package,
      number: "4",
      title: "Complete Purchase",
      description: "We&apos;ll accept cash and debit. All products will be packaged in compliant, child-resistant containers.",
      tips: ["ATM available on-site", "Ask about daily specials"]
    }
  ];

  const whatToBring = [
    "Valid government-issued ID (21+)",
    "Cash or debit card",
    "Questions for our budtenders",
    "An open mind to learn"
  ];

  return (
    <section id="first-visit" className="py-20 bg-library-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-library-brown mb-4">
            What to Expect When We Open
          </h2>
          <div className="w-24 h-1 bg-library-gold mx-auto mb-8"></div>
          <p className="text-lg text-library-black/80 max-w-3xl mx-auto">
            When The Library opens, we&apos;ll make your first visit simple and comfortable. 
            Here&apos;s what you can expect when our doors open.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-library-gold/20 -z-10"></div>
              )}
              
              <div className="bg-library-white border border-library-gold/20 rounded-lg p-6 hover:border-library-gold/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-library-gold text-library-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <step.icon className="w-6 h-6 text-library-gold" />
                </div>
                <h3 className="font-semibold text-library-brown mb-2">{step.title}</h3>
                <p className="text-sm text-library-black/70 mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.tips.map((tip, idx) => (
                    <li key={idx} className="text-xs text-library-teal flex items-start gap-1">
                      <span className="text-library-gold mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What to Bring & FAQ */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-library-teal/5 rounded-lg p-8 border border-library-teal/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-library-teal" />
              <h3 className="text-xl font-serif text-library-brown">What You&apos;ll Need to Bring</h3>
            </div>
            <ul className="space-y-3">
              {whatToBring.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-library-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-library-teal">✓</span>
                  </div>
                  <span className="text-library-black/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-library-gold/5 rounded-lg p-8 border border-library-gold/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-6 h-6 text-library-gold" />
              <h3 className="text-xl font-serif text-library-brown">Good to Know</h3>
            </div>
            <div className="space-y-3 text-library-black/70">
              <p>
                <strong>Parking:</strong> Free parking will be available on-site and street parking nearby.
              </p>
              <p>
                <strong>Wait Times:</strong> We&apos;re designing our process to keep wait times under 10 minutes.
              </p>
              <p>
                <strong>Limits:</strong> Daily purchase limits will apply per state regulations.
              </p>
              <p>
                <strong>Privacy:</strong> Your information will be kept strictly confidential and secure.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 p-8 bg-library-brown rounded-lg"
        >
          <h3 className="text-2xl font-serif text-library-white mb-4">
            Stay Informed About Our Opening
          </h3>
          <p className="text-library-white/90 mb-6">
            Our team is excited to welcome you to The Library when we open. 
            Be the first to know about our grand opening date and exclusive launch offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://thelibrary.app.n8n.cloud/form/2de56228-8522-485f-af34-36b282fe359d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-library-gold text-library-white px-6 py-3 rounded-full font-semibold hover:bg-library-gold/90 transition-colors"
            >
              Get Notified
            </a>
            {/* Phone number removed - business doesn't have one yet */}
            {/* <a
              href="tel:973-731-1199"
              className="inline-flex items-center justify-center bg-library-white text-library-brown px-6 py-3 rounded-full font-semibold hover:bg-library-white/90 transition-colors"
            >
              Call for Info: (973) 731-1199
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}