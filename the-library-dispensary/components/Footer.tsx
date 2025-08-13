"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Mail, MapPin, AlertCircle, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-library-brown text-library-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/the-library-dispensary/the-library-logo.png"
                alt="The Library Logo"
                width={180}
                height={72}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-library-white/80 text-sm mb-4">
              West Orange&apos;s premier cannabis dispensary opening soon - committed to education, quality, and community.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/thelibrarynj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-library-white/10 rounded-full flex items-center justify-center hover:bg-library-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-library-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-library-white/80 hover:text-library-gold transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-library-white/80 hover:text-library-gold transition-colors text-sm">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#first-visit" className="text-library-white/80 hover:text-library-gold transition-colors text-sm">
                  First Visit Guide
                </a>
              </li>
              <li>
                <a href="#education" className="text-library-white/80 hover:text-library-gold transition-colors text-sm">
                  Education Hub
                </a>
              </li>
              <li>
                <button
                  className="text-library-white/80 hover:text-library-gold transition-colors text-sm text-left"
                >
                  Coming Soon
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-library-gold font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:973-731-1199"
                  className="flex items-center gap-2 text-library-white/80 hover:text-library-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>(973) 731-1199</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@thelibrarynj.com"
                  className="flex items-center gap-2 text-library-white/80 hover:text-library-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@thelibrarynj.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-library-white/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  1-3 Washington St<br />
                  West Orange, NJ 07052
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-library-gold font-semibold mb-4">Opening Soon</h4>
            <div className="text-sm text-library-white/80">
              <p className="font-bold text-library-gold mb-1">Grand Opening 2025</p>
              <p>Hours to be announced</p>
            </div>
            <div className="mt-4 p-3 bg-library-gold/20 rounded">
              <p className="text-xs">
                <strong>License:</strong> NJ-RC-000123
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimers */}
      <div className="bg-library-burgundy/20 border-t border-library-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-library-gold flex-shrink-0 mt-0.5" />
              <div className="text-xs text-library-white/80 leading-relaxed">
                <strong className="text-library-gold">LEGAL DISCLAIMER:</strong> For use only by adults 21 years of age and older. 
                Keep out of reach of children and pets. In case of accidental ingestion, contact the poison control hotline 1-800-222-1222 
                or 911. This product has not been analyzed or approved by the FDA. There is limited information on the side effects of using 
                this product, and there may be associated health risks.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Shield className="w-5 h-5 text-library-gold flex-shrink-0 mt-0.5" />
              <div className="text-xs text-library-white/80 leading-relaxed">
                <strong className="text-library-gold">HEALTH WARNING:</strong> Marijuana use during pregnancy and breastfeeding may be harmful. 
                Marijuana may impair concentration, coordination, and judgment. Do not operate a vehicle or machinery under the influence of this drug. 
                Marijuana smoke contains carcinogens and may negatively affect health. This product may be unlawful outside of New Jersey.
              </div>
            </div>

            <div className="text-xs text-library-white/60 pt-4 border-t border-library-white/10">
              <p>
                Cannabis products have not been evaluated by the Food and Drug Administration and are not intended to diagnose, treat, 
                cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information 
                from healthcare practitioners. Please consult your healthcare professional before use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-library-black/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-library-white/60">
            <p>© {currentYear} The Library Cannabis Dispensary. All rights reserved.</p>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <Link href="/privacy" className="hover:text-library-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-library-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}