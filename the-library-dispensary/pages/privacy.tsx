import { NextPage } from 'next'
import Script from 'next/script'
import SEO from '../components/SEO'
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"
import { Shield, Eye, Lock, Database, Users, FileText, Mail, Clock, AlertTriangle, CheckCircle } from "lucide-react"

interface SectionProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  id?: string
}

const Section: React.FC<SectionProps> = ({ title, icon, children, id }) => (
  <div className="mb-12" id={id}>
    <div className="flex items-center gap-3 mb-4">
      <div className="text-library-gold">{icon}</div>
      <h2 className="text-2xl font-bold text-library-brown">{title}</h2>
    </div>
    <div className="prose prose-lg max-w-none text-library-brown/90 space-y-4">
      {children}
    </div>
  </div>
)

const PrivacyPage: NextPage = () => {
  const effectiveDate = "January 15, 2025"

  // Schema markup for privacy policy
  const privacyPolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://thelibrarynj.com/privacy",
    "name": "Privacy Policy",
    "description": "Privacy Policy for The Library of New Jersey cannabis dispensary. Learn how we collect, use, and protect your personal information.",
    "url": "https://thelibrarynj.com/privacy",
    "isPartOf": {
      "@id": "https://thelibrarynj.com/#website"
    },
    "inLanguage": "en-US",
    "datePublished": "2025-01-15",
    "dateModified": effectiveDate,
    "publisher": {
      "@id": "https://thelibrarynj.com/#organization"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://thelibrarynj.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": "https://thelibrarynj.com/privacy"
        }
      ]
    }
  }

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for The Library of New Jersey. Learn how we collect, use, and protect your personal information in compliance with CCPA and New Jersey cannabis regulations."
        keywords="privacy policy, data protection, cannabis dispensary privacy, The Library NJ, personal information, data security"
        canonicalUrl="https://thelibrarynj.com/privacy"
      />

      <Script
        id="schema-privacy-policy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicySchema) }}
        strategy="beforeInteractive"
      />

      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />

      <PageTransition>
        <main className="min-h-screen bg-gradient-to-b from-library-cream to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-library-brown mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-library-brown/70">
                Effective Date: {effectiveDate}
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-12">
              <h3 className="text-lg font-semibold text-library-brown mb-4">Quick Navigation</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <a href="#information-collection" className="text-library-teal hover:text-library-gold transition-colors">→ Information We Collect</a>
                <a href="#age-verification" className="text-library-teal hover:text-library-gold transition-colors">→ Age Verification</a>
                <a href="#age-verification" className="text-library-teal hover:text-library-gold transition-colors">→ Age Verification</a>
                <a href="#data-usage" className="text-library-teal hover:text-library-gold transition-colors">→ How We Use Your Information</a>
                <a href="#cookies" className="text-library-teal hover:text-library-gold transition-colors">→ Cookies & Tracking</a>
                <a href="#third-parties" className="text-library-teal hover:text-library-gold transition-colors">→ Third-Party Services</a>
                <a href="#data-security" className="text-library-teal hover:text-library-gold transition-colors">→ Data Security</a>
                <a href="#your-rights" className="text-library-teal hover:text-library-gold transition-colors">→ Your Rights</a>
              </div>
            </div>

            {/* Introduction */}
            <Section title="Introduction" icon={<FileText className="w-6 h-6" />}>
              <p>
                The Library of New Jersey ("The Library," "we," "our," or "us") is committed to protecting the privacy and security of our customers' personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our dispensary, use our website at thelibrarynj.com, or interact with our services.
              </p>
              <p>
                As a licensed recreational cannabis dispensary in New Jersey, we are subject to specific state regulations regarding the handling of customer information. We take our legal obligations seriously and maintain strict protocols to ensure your privacy is protected in accordance with all applicable laws, including the California Consumer Privacy Act (CCPA), and the General Data Protection Regulation (GDPR) where applicable.
              </p>
              <p className="font-semibold">
                By accessing our website or services, you consent to the data practices described in this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </Section>

            {/* Information Collection */}
            <Section title="Information We Collect" icon={<Database className="w-6 h-6" />} id="information-collection">
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p>We collect several types of information to provide and improve our services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Information:</strong> Full name, date of birth, government-issued ID details, and photograph (for age and identity verification)</li>
                <li><strong>Contact Information:</strong> Email address, phone number, and mailing address</li>
                <li><strong>Transaction Information:</strong> Purchase history, product preferences, and payment information (credit/debit card details are processed by secure third-party providers)</li>
                <li><strong>Compliance Information:</strong> Records required by New Jersey Cannabis Regulatory Commission (NJCRC) regulations</li>
                <li><strong>Communication Records:</strong> Customer service inquiries, feedback, and correspondence</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, and referral sources</li>
                <li><strong>Location Data:</strong> Approximate geographic location based on IP address (we do not collect precise GPS location)</li>
                <li><strong>Cookie Data:</strong> Information stored through cookies and similar tracking technologies</li>
              </ul>
            </Section>

{/* Age Verification */}
            <Section title="Age Verification Data Handling" icon={<CheckCircle className="w-6 h-6" />} id="age-verification">
              <p>
                In compliance with New Jersey law, we are required to verify that all customers are 21 years of age or older. Our age verification process involves:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>ID Scanning:</strong> We scan government-issued IDs to verify age and authenticity. This data is encrypted and stored securely.</li>
                <li><strong>Retention Period:</strong> Age verification records are retained as required by NJCRC regulations (typically 5 years) and then securely destroyed.</li>
                <li><strong>Third-Party Verification:</strong> We may use third-party age verification services that comply with all applicable privacy laws.</li>
                <li><strong>No Marketing Use:</strong> Age verification data is never used for marketing purposes without separate consent.</li>
              </ul>
              <p className="mt-4">
                <strong>Website Age Gate:</strong> Our website uses session-based age verification that does not store personal information. This is solely to comply with regulations requiring age-appropriate access to cannabis-related content.
              </p>
            </Section>

            {/* Data Usage */}
            <Section title="How We Use Your Information" icon={<Eye className="w-6 h-6" />} id="data-usage">
              <p>We use the collected information for the following purposes:</p>
              <h3 className="text-xl font-semibold mb-3">Primary Purposes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Verify your identity and age as required by law</li>
                <li>Comply with state cannabis regulations and reporting requirements</li>
                <li>Communicate with you about your orders and account</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Maintain records as required by NJCRC</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Secondary Purposes (with consent)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send promotional communications about products, events, and special offers</li>
                <li>Personalize your experience and recommend products based on purchase history</li>
                <li>Conduct market research and analyze usage trends</li>
                <li>Improve our website, products, and services</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </Section>

            {/* Cookies */}
            <Section title="Cookies & Tracking Technologies" icon={<Eye className="w-6 h-6" />} id="cookies">
              <p>Our website uses cookies and similar tracking technologies to enhance your experience:</p>

              <h3 className="text-xl font-semibold mb-3">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality, including age verification and shopping cart</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (only with your consent)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Managing Cookies</h3>
              <p>
                You can control cookies through your browser settings. However, disabling certain cookies may limit website functionality. For more information about cookies and how to manage them, visit www.allaboutcookies.org.
              </p>
            </Section>

            {/* Third-Party Services */}
            <Section title="Third-Party Services" icon={<Users className="w-6 h-6" />} id="third-parties">
              <p>We work with trusted third-party service providers to operate our business:</p>

              <h3 className="text-xl font-semibold mb-3">Dutchie Integration</h3>
              <p>
                We use Dutchie as our e-commerce platform for online ordering. When you place an order through our website, you interact with Dutchie's platform, which has its own privacy policy. We recommend reviewing Dutchie's privacy practices at dutchie.com/privacy.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Other Service Providers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Payment Processors:</strong> Secure payment processing (PCI DSS compliant)</li>
                <li><strong>Analytics Providers:</strong> Google Analytics for website usage analysis</li>
                <li><strong>Cloud Storage:</strong> Secure data storage providers (SOC 2 certified)</li>
                <li><strong>Marketing Platforms:</strong> Email marketing and SMS services (with opt-in consent)</li>
                <li><strong>Compliance Software:</strong> METRC and other state-mandated tracking systems</li>
              </ul>

              <p className="mt-4">
                All third-party providers are contractually obligated to protect your information and use it only for the services they provide to us.
              </p>
            </Section>

            {/* Data Security */}
            <Section title="Data Security Measures" icon={<Lock className="w-6 h-6" />} id="data-security">
              <p>
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission and AES-256 encryption for stored data</li>
                <li><strong>Access Controls:</strong> Role-based access controls and multi-factor authentication for staff</li>
                <li><strong>Physical Security:</strong> Secured facilities with restricted access to servers and records</li>
                <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                <li><strong>Employee Training:</strong> Regular privacy and security training for all staff members</li>
                <li><strong>Incident Response:</strong> Established procedures for detecting and responding to data breaches</li>
                <li><strong>Data Minimization:</strong> We only collect and retain information necessary for business purposes</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    While we implement robust security measures, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security but commit to promptly notifying affected users of any breach as required by law.
                  </p>
                </div>
              </div>
            </Section>

            {/* Your Rights */}
            <Section title="Your Rights & Choices" icon={<Shield className="w-6 h-6" />} id="your-rights">
              <h3 className="text-xl font-semibold mb-3">Under CCPA (California Residents)</h3>
              <p>California residents have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Know:</strong> Request disclosure of personal information we collect, use, and share</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information (subject to legal exceptions)</li>
                <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of personal information (we do not sell personal information)</li>
                <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of exercising privacy rights</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Under GDPR (European Residents)</h3>
              <p>European residents have additional rights including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access and portability of personal data</li>
                <li>Right to rectification of inaccurate information</li>
                <li>Right to restriction of processing</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent at any time</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">General Rights for All Users</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Opt-Out of Marketing:</strong> Unsubscribe from marketing emails via the link in any email or by contacting us</li>
                <li><strong>Update Information:</strong> Access and update your account information through our website or by contacting us</li>
                <li><strong>Data Portability:</strong> Request a copy of your personal information in a machine-readable format</li>
                <li><strong>Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
              </ul>

              <p className="mt-6">
                To exercise any of these rights, please contact us using the information provided below. We may require verification of your identity before processing requests.
              </p>
            </Section>

            {/* Data Retention */}
            <Section title="Data Retention" icon={<Clock className="w-6 h-6" />}>
              <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Transaction Records:</strong> 5 years as required by NJCRC regulations</li>
                <li><strong>Marketing Data:</strong> Until you opt-out or request deletion</li>
                <li><strong>Website Analytics:</strong> 26 months (Google Analytics default)</li>
                <li><strong>Security Footage:</strong> 90 days unless required for investigation</li>
              </ul>
              <p className="mt-4">
                After the retention period expires, personal information is securely destroyed using industry-standard methods.
              </p>
            </Section>

            {/* Children's Privacy */}
            <Section title="Children's Privacy" icon={<Shield className="w-6 h-6" />}>
              <p>
                Our services are strictly intended for adults aged 21 and over. We do not knowingly collect personal information from anyone under 21 years of age. If we become aware that we have collected information from someone under 21, we will promptly delete that information and terminate any associated account.
              </p>
              <p className="mt-4">
                Parents or guardians who believe we may have inadvertently collected information from their child should contact us immediately.
              </p>
            </Section>

            {/* Updates to Policy */}
            <Section title="Changes to This Privacy Policy" icon={<FileText className="w-6 h-6" />}>
              <p>
                We reserve the right to update this Privacy Policy at any time to reflect changes in our practices, technologies, legal requirements, or other factors. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting the updated policy on our website with a new effective date</li>
                <li>Sending an email notification to registered users (for material changes)</li>
                <li>Displaying a notice on our website homepage</li>
              </ul>
              <p className="mt-4">
                Your continued use of our services after changes become effective constitutes acceptance of the revised Privacy Policy. We encourage you to review this policy periodically.
              </p>
            </Section>

            {/* Contact Information */}
            <Section title="Contact Us" icon={<Mail className="w-6 h-6" />}>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="font-bold text-library-brown mb-4">The Library of New Jersey</h3>
                <div className="space-y-2 text-library-brown/80">
                  <p><strong>Privacy Officer</strong></p>
                  <p>Address: 1-3 Washington Street, West Orange, NJ 07052</p>
                  {/* Phone number removed - business doesn't have one yet */}
                  {/* <p>Phone: (973) 731-1199</p> */}
                  <p>Email: privacy@thelibrarynj.com</p>
                  <p>Website: https://thelibrarynj.com</p>
                </div>
                <div className="mt-4 pt-4 border-t border-library-brown/10">
                  <p className="text-sm text-library-brown/70">
                    <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 30 days.
                  </p>
                </div>
              </div>

            </Section>

            {/* Legal Compliance Notice */}
            <div className="mt-12 p-6 bg-library-burgundy/10 rounded-lg border border-library-burgundy/20">
              <h3 className="text-xl font-bold text-library-burgundy mb-3">Legal Compliance Notice</h3>
              <p className="text-library-brown/80">
                This Privacy Policy is designed to comply with:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3 text-library-brown/80">
                <li>New Jersey Cannabis Regulatory Commission (NJCRC) regulations</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>General Data Protection Regulation (GDPR)</li>
                <li>Children's Online Privacy Protection Act (COPPA)</li>
                <li>CAN-SPAM Act</li>
              </ul>
              <p className="mt-4 text-sm text-library-brown/70">
                In case of any conflict between this Privacy Policy and applicable law, the applicable law will govern.
              </p>
            </div>

            {/* Acknowledgment */}
            <div className="mt-12 text-center">
              <p className="text-sm text-library-brown/60">
                Last reviewed and updated: {effectiveDate}
              </p>
              <p className="text-sm text-library-brown/60 mt-2">
                Document Version: 1.0
              </p>
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </>
  )
}

export default PrivacyPage