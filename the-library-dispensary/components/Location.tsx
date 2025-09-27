"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Car, Train } from "lucide-react";

export default function Location() {

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-library-white to-library-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-library-brown mb-4">
            Location & Hours
          </h2>
          <div className="w-24 h-1 bg-library-gold mx-auto mb-8"></div>
          <p className="text-lg text-library-black/80 max-w-3xl mx-auto">
            Now open in West Orange - conveniently accessible by car or public transportation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-library-white rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.5896774998775!2d-74.25168368459175!3d40.77106097932532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ab3e1234567890%3A0x1234567890abcdef!2s1-3%20Washington%20St%2C%20West%20Orange%2C%20NJ%2007052!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="The Library Location"
            ></iframe>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-library-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-library-gold/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-library-gold" />
                </div>
                <h3 className="text-xl font-serif text-library-brown">Our Future Location</h3>
              </div>
              <address className="not-italic text-library-black/70">
                1-3 Washington St<br />
                West Orange, NJ 07052<br />
                United States
              </address>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://maps.google.com?q=1-3+Washington+St+West+Orange+NJ+07052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-library-gold hover:text-library-gold/80 text-sm font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-library-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-library-teal/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-library-teal" />
                </div>
                <h3 className="text-xl font-serif text-library-brown">Store Hours</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b border-library-gold/10">
                  <span className="text-library-brown font-medium">Saturday</span>
                  <span className="text-library-black/70">9 AM–9 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-library-gold/10">
                  <span className="text-library-brown font-medium">Sunday</span>
                  <span className="text-library-black/70">10 AM–5 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-library-gold/10">
                  <span className="text-library-brown font-medium">Monday</span>
                  <span className="text-library-black/70">9 AM–8 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-library-gold/10">
                  <span className="text-library-brown font-medium">Tuesday</span>
                  <span className="text-library-black/70">9 AM–8 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-library-gold/10">
                  <span className="text-library-brown font-medium">Wednesday</span>
                  <span className="text-library-black/70">9 AM–8 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-library-gold/10">
                  <span className="text-library-brown font-medium">Thursday</span>
                  <span className="text-library-black/70">9 AM–9 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-library-brown font-medium">Friday</span>
                  <span className="text-library-black/70">9 AM–9 PM</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-library-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-library-burgundy/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-library-burgundy" />
                </div>
                <h3 className="text-xl font-serif text-library-brown">Contact Us</h3>
              </div>
              <div className="space-y-3">
                {/* Phone number removed - business doesn't have one yet */}
                {/* <a
                  href="tel:973-731-1199"
                  className="flex items-center gap-2 text-library-black/70 hover:text-library-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(973) 731-1199</span>
                </a> */}
                <a
                  href="mailto:info@thelibrarynj.com"
                  className="flex items-center gap-2 text-library-black/70 hover:text-library-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@thelibrarynj.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transportation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-library-brown/5 rounded-lg p-6 border border-library-brown/10">
            <div className="flex items-center gap-2 mb-3">
              <Car className="w-5 h-5 text-library-brown" />
              <h4 className="font-semibold text-library-brown">By Car</h4>
            </div>
            <p className="text-library-black/70 text-sm">
              Free parking will be available on-site. Additional street parking on Washington St and Main St. 
              Easily accessible from Route 280 and Garden State Parkway.
            </p>
          </div>
          <div className="bg-library-teal/5 rounded-lg p-6 border border-library-teal/10">
            <div className="flex items-center gap-2 mb-3">
              <Train className="w-5 h-5 text-library-teal" />
              <h4 className="font-semibold text-library-brown">Public Transit</h4>
            </div>
            <p className="text-library-black/70 text-sm">
              NJ Transit buses 21, 73, and 79 stop nearby. 
              Short walk from Highland Avenue station on the Morris & Essex Line.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}