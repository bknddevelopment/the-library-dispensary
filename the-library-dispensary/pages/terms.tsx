import { NextPage } from 'next'
import SEO from '../components/SEO'
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"
import { Shield, AlertCircle, Scale, FileText, Users, Package, CreditCard, Truck, Ban, Gavel } from 'lucide-react'
import Script from 'next/script'

const TermsPage: NextPage = () => {
  const lastUpdated = "January 1, 2025"

  const sections = [
    { id: 'age-requirements', title: 'Age Requirements & Verification', icon: Shield },
    { id: 'permitted-use', title: 'Permitted Use & Restrictions', icon: AlertCircle },
    { id: 'product-disclaimers', title: 'Product Disclaimers & Health Warnings', icon: Package },
    { id: 'user-conduct', title: 'User Conduct & Prohibited Activities', icon: Ban },
    { id: 'orders-payments', title: 'Orders, Payments & Refunds', icon: CreditCard },
    { id: 'delivery-pickup', title: 'Delivery & Pickup Policies', icon: Truck },
    { id: 'intellectual-property', title: 'Intellectual Property Rights', icon: FileText },
    { id: 'privacy', title: 'Privacy & Data Protection', icon: Users },
    { id: 'liability', title: 'Limitation of Liability', icon: Scale },
    { id: 'indemnification', title: 'Indemnification', icon: Shield },
    { id: 'dispute-resolution', title: 'Dispute Resolution & Governing Law', icon: Gavel }
  ]

  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read The Library of New Jersey's Terms of Service. Learn about age requirements, permitted use, product disclaimers, and policies for our cannabis dispensary in West Orange, NJ."
        keywords="terms of service, cannabis dispensary terms, marijuana legal terms, dispensary policies, New Jersey cannabis law, age verification, product disclaimers"
        canonicalUrl="https://thelibrarynj.com/terms"
      />

      {/* Structured Data for Terms of Service */}
      <Script
        id="terms-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service - The Library of New Jersey",
            "description": "Terms of Service for The Library of New Jersey cannabis dispensary",
            "url": "https://thelibrarynj.com/terms",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Library of New Jersey",
              "url": "https://thelibrarynj.com"
            },
            "datePublished": "2025-01-01",
            "dateModified": lastUpdated,
            "publisher": {
              "@type": "Organization",
              "name": "The Library of New Jersey",
              "url": "https://thelibrarynj.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1-3 Washington Street",
                "addressLocality": "West Orange",
                "addressRegion": "NJ",
                "postalCode": "07052",
                "addressCountry": "US"
              }
            }
          })
        }}
      />

      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen bg-gradient-to-b from-library-beige to-white">
          {/* Hero Section */}
          <section className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-library-brown/10 rounded-full">
                  <Scale className="w-12 h-12 text-library-brown" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-library-brown mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-library-brown/80 mb-2">
                Effective Date: {lastUpdated}
              </p>
              <p className="text-library-brown/70">
                Please read these terms carefully before using our services
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="py-8 px-4 bg-white/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-library-brown mb-6">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-library-gold/10 transition-colors group"
                  >
                    <section.icon className="w-5 h-5 text-library-gold group-hover:text-library-brown transition-colors" />
                    <span className="text-library-brown/80 group-hover:text-library-brown transition-colors">
                      {section.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Terms Content */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-library-brown/80 leading-relaxed">
                  Welcome to The Library of New Jersey ("The Library," "we," "us," or "our"). These Terms of Service
                  ("Terms") govern your use of our website located at thelibrarynj.com and our retail cannabis dispensary
                  services located at 1-3 Washington Street, West Orange, New Jersey 07052. By accessing or using our
                  services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Age Requirements & Verification */}
              <div id="age-requirements" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">1. Age Requirements & Verification</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <p>
                    <strong className="text-library-brown">1.1 Minimum Age:</strong> You must be at least twenty-one (21)
                    years of age to access, browse, or use any of our services, including this website and our physical
                    dispensary location. Cannabis products are strictly for adults 21 and older.
                  </p>
                  <p>
                    <strong className="text-library-brown">1.2 Age Verification:</strong> We employ age verification
                    systems on our website and require valid government-issued photo identification at our dispensary.
                    Acceptable forms of ID include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Valid driver's license</li>
                    <li>Valid passport</li>
                    <li>Valid state-issued identification card</li>
                    <li>Valid military identification</li>
                  </ul>
                  <p>
                    <strong className="text-library-brown">1.3 False Information:</strong> Providing false information
                    regarding your age or identity is strictly prohibited and may result in criminal prosecution under
                    New Jersey law.
                  </p>
                  <p>
                    <strong className="text-library-brown">1.4 Parental Responsibility:</strong> Parents and guardians
                    are responsible for monitoring and preventing minors' access to our website and services.
                  </p>
                </div>
              </div>

              {/* Permitted Use & Restrictions */}
              <div id="permitted-use" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">2. Permitted Use & Restrictions</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <p>
                    <strong className="text-library-brown">2.1 Legal Compliance:</strong> All cannabis products sold
                    by The Library are for legal use only within the State of New Jersey in accordance with the New Jersey
                    Cannabis Regulatory, Enforcement Assistance, and Marketplace Modernization Act (CREAMM Act) and all
                    applicable local ordinances.
                  </p>
                  <p>
                    <strong className="text-library-brown">2.2 Geographic Restrictions:</strong> Our products and services
                    are available only to residents and visitors within New Jersey. Cannabis products purchased from
                    The Library may not be transported across state lines.
                  </p>
                  <p>
                    <strong className="text-library-brown">2.3 Consumption Restrictions:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Cannabis consumption is prohibited on our premises</li>
                    <li>Public consumption of cannabis is illegal in New Jersey</li>
                    <li>Cannabis use is prohibited in vehicles</li>
                    <li>Cannabis use is prohibited in schools, workplaces, and federal properties</li>
                  </ul>
                  <p>
                    <strong className="text-library-brown">2.4 Purchase Limits:</strong> Customers are subject to
                    New Jersey state purchase limits: Up to 1 ounce (28.35 grams) of usable cannabis or its equivalent
                    in other cannabis products per day for recreational adult-use customers.
                  </p>
                  <p>
                    <strong className="text-library-brown">2.5 Resale Prohibition:</strong> The resale or redistribution
                    of cannabis products purchased from The Library is strictly prohibited and illegal under New Jersey law.
                  </p>
                </div>
              </div>

              {/* Product Disclaimers & Health Warnings */}
              <div id="product-disclaimers" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">3. Product Disclaimers & Health Warnings</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-red-900 mb-2">IMPORTANT HEALTH WARNINGS:</p>
                    <ul className="list-disc pl-5 space-y-2 text-red-800">
                      <li>Cannabis use during pregnancy and breastfeeding may be harmful</li>
                      <li>Cannabis may impair concentration, coordination, and judgment</li>
                      <li>Do not drive or operate machinery under the influence of cannabis</li>
                      <li>Cannabis smoke contains carcinogens and may negatively affect health</li>
                      <li>Cannabis use may be addictive</li>
                      <li>Keep all cannabis products away from children and pets</li>
                    </ul>
                  </div>
                  <p>
                    <strong className="text-library-brown">3.1 FDA Disclaimer:</strong> Cannabis products have not been
                    evaluated by the Food and Drug Administration (FDA). These products are not intended to diagnose,
                    treat, cure, or prevent any disease.
                  </p>
                  <p>
                    <strong className="text-library-brown">3.2 Medical Disclaimer:</strong> Information provided on our
                    website or by our staff is for educational purposes only and should not be considered medical advice.
                    Always consult with a qualified healthcare provider before using cannabis products.
                  </p>
                  <p>
                    <strong className="text-library-brown">3.3 Product Potency:</strong> Cannabis affects everyone differently.
                    Start with a low dose, especially with edibles, and wait at least 2 hours before consuming more.
                  </p>
                  <p>
                    <strong className="text-library-brown">3.4 Side Effects:</strong> Cannabis use may cause side effects
                    including but not limited to: dry mouth, red eyes, increased heart rate, anxiety, paranoia, impaired
                    memory, and altered perception.
                  </p>
                  <p>
                    <strong className="text-library-brown">3.5 Drug Interactions:</strong> Cannabis may interact with
                    prescription medications. Consult your healthcare provider if you are taking any medications.
                  </p>
                </div>
              </div>

              {/* User Conduct & Prohibited Activities */}
              <div id="user-conduct" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <Ban className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">4. User Conduct & Prohibited Activities</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <p>When using our services, you agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide false or misleading information</li>
                    <li>Use another person's identification or account</li>
                    <li>Attempt to purchase products if under 21 years of age</li>
                    <li>Resell or distribute products purchased from us</li>
                    <li>Use our services for any illegal purpose</li>
                    <li>Harass, threaten, or abuse our staff or other customers</li>
                    <li>Damage, disable, or impair our website or services</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Consume cannabis products on our premises</li>
                    <li>Bring weapons or illegal substances to our dispensary</li>
                  </ul>
                  <p>
                    <strong className="text-library-brown">4.1 Account Termination:</strong> We reserve the right to
                    refuse service, terminate accounts, or ban individuals who violate these Terms.
                  </p>
                </div>
              </div>

              {/* Orders, Payments & Refunds */}
              <div id="orders-payments" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">5. Orders, Payments & Refunds</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <p>
                    <strong className="text-library-brown">5.1 Order Placement:</strong> Orders may be placed online
                    through our website for pickup at our dispensary. All orders are subject to availability and
                    verification of age and identity.
                  </p>
                  <p>
                    <strong className="text-library-brown">5.2 Pricing:</strong> All prices are subject to change
                    without notice. Prices displayed online may differ from in-store prices. Applicable taxes will
                    be added at checkout.
                  </p>
                  <p>
                    <strong className="text-library-brown">5.3 Payment Methods:</strong> We accept cash and debit cards.
                    Credit card transactions may be processed as ATM withdrawals due to federal banking regulations.
                  </p>
                  <p>
                    <strong className="text-library-brown">5.4 Order Cancellation:</strong> Orders may be cancelled
                    before pickup without penalty. Unclaimed orders may be cancelled after 48 hours.
                  </p>
                  <p>
                    <strong className="text-library-brown">5.5 Returns & Refunds:</strong> Due to state regulations,
                    all cannabis sales are final. We cannot accept returns of cannabis products. However, if you receive
                    a defective product, please contact us immediately for resolution.
                  </p>
                  <p>
                    <strong className="text-library-brown">5.6 Product Availability:</strong> Product availability is
                    not guaranteed. We reserve the right to limit quantities and substitute products of equal or greater value.
                  </p>
                </div>
              </div>

              {/* Delivery & Pickup Policies */}
              <div id="delivery-pickup" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">6. Delivery & Pickup Policies</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <p>
                    <strong className="text-library-brown">6.1 Pickup Service:</strong> All orders must be picked up
                    by the person who placed the order. Valid ID matching the order name is required.
                  </p>
                  <p>
                    <strong className="text-library-brown">6.2 Pickup Hours:</strong> Orders may be picked up during
                    our regular business hours. Please check our website for current hours of operation.
                  </p>
                  <p>
                    <strong className="text-library-brown">6.3 Delivery Service:</strong> Delivery service may be
                    available in select areas. Delivery customers must be present to receive orders and show valid ID.
                  </p>
                  <p>
                    <strong className="text-library-brown">6.4 Third-Party Pickup:</strong> We do not allow third-party
                    pickup. The person who placed the order must be present with valid ID.
                  </p>
                  <p>
                    <strong className="text-library-brown">6.5 Curbside Pickup:</strong> Curbside pickup may be available
                    for customers with accessibility needs. Please call ahead to arrange curbside service.
                  </p>
                </div>
              </div>

              {/* Intellectual Property Rights */}
              <div id="intellectual-property" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">7. Intellectual Property Rights</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <p>
                    <strong className="text-library-brown">7.1 Ownership:</strong> All content on our website, including
                    text, graphics, logos, images, audio clips, and software, is the property of The Library of New Jersey
                    or its content suppliers and is protected by U.S. and international copyright laws.
                  </p>
                  <p>
                    <strong className="text-library-brown">7.2 Trademarks:</strong> "The Library of New Jersey" and our
                    logo are trademarks of our company. All other trademarks appearing on our site are the property of
                    their respective owners.
                  </p>
                  <p>
                    <strong className="text-library-brown">7.3 Limited License:</strong> You are granted a limited,
                    non-exclusive, non-transferable license to access and use our website for personal, non-commercial use.
                  </p>
                  <p>
                    <strong className="text-library-brown">7.4 Prohibited Uses:</strong> You may not reproduce, distribute,
                    modify, create derivative works, publicly display, or commercially exploit our content without our
                    express written permission.
                  </p>
                </div>
              </div>

              {/* Privacy & Data Protection */}
              <div id="privacy" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">8. Privacy & Data Protection</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <p>
                    <strong className="text-library-brown">8.1 Privacy Policy:</strong> Your use of our services is also
                    governed by our Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                  <p>
                    <strong className="text-library-brown">8.2 Data Collection:</strong> We collect and process personal
                    information as required by New Jersey cannabis regulations, including identity verification and
                    purchase tracking.
                  </p>
                  <p>
                    <strong className="text-library-brown">8.3 Regulatory Compliance:</strong> We may share information
                    with state regulators as required by law.
                  </p>
                  <p>
                    <strong className="text-library-brown">8.4 Marketing Communications:</strong> By providing your contact
                    information, you consent to receive marketing communications from us. You may opt-out at any time.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div id="liability" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">9. Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <p className="uppercase font-semibold">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE LIBRARY OF NEW JERSEY SHALL NOT BE LIABLE FOR ANY
                    INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
                    WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE
                    LOSSES, RESULTING FROM:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your use or inability to use our services</li>
                    <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                    <li>Any bugs, viruses, or other harmful code transmitted through our services</li>
                    <li>Any errors or omissions in content or for any loss or damage incurred from the use of any content</li>
                    <li>Your use or misuse of cannabis products purchased from us</li>
                    <li>Any adverse reactions or side effects from cannabis use</li>
                  </ul>
                  <p>
                    <strong className="text-library-brown">9.1 Maximum Liability:</strong> In no event shall our total
                    liability to you exceed the amount you paid to us in the ninety (90) days prior to the event giving
                    rise to the liability.
                  </p>
                  <p>
                    <strong className="text-library-brown">9.2 Assumption of Risk:</strong> You acknowledge that cannabis
                    use carries inherent risks and you assume all risks associated with your use of cannabis products.
                  </p>
                </div>
              </div>

              {/* Indemnification */}
              <div id="indemnification" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">10. Indemnification</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <p>
                    You agree to indemnify, defend, and hold harmless The Library of New Jersey, its officers, directors,
                    employees, agents, licensors, and suppliers from and against all claims, losses, expenses, damages,
                    and costs, including reasonable attorneys' fees, resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any law or regulation</li>
                    <li>Your use or misuse of our services or products</li>
                    <li>Any claim that your use of our services caused damage to a third party</li>
                    <li>Your provision of false or misleading information</li>
                    <li>Your violation of any third party's rights</li>
                  </ul>
                  <p>
                    This indemnification obligation will survive the termination of these Terms and your use of our services.
                  </p>
                </div>
              </div>

              {/* Dispute Resolution & Governing Law */}
              <div id="dispute-resolution" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <Gavel className="w-6 h-6 text-library-gold" />
                  <h2 className="text-2xl font-bold text-library-brown">11. Dispute Resolution & Governing Law</h2>
                </div>
                <div className="space-y-4 text-library-brown/80">
                  <p>
                    <strong className="text-library-brown">11.1 Governing Law:</strong> These Terms shall be governed
                    by and construed in accordance with the laws of the State of New Jersey, without regard to its
                    conflict of law provisions.
                  </p>
                  <p>
                    <strong className="text-library-brown">11.2 Jurisdiction:</strong> You agree that any dispute arising
                    from or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the
                    state and federal courts located in Essex County, New Jersey.
                  </p>
                  <p>
                    <strong className="text-library-brown">11.3 Arbitration:</strong> Any dispute arising out of or
                    relating to these Terms or our services shall be settled by binding arbitration in accordance with
                    the commercial arbitration rules of the American Arbitration Association. The arbitration shall be
                    conducted in Essex County, New Jersey.
                  </p>
                  <p>
                    <strong className="text-library-brown">11.4 Class Action Waiver:</strong> You agree that any dispute
                    resolution proceedings will be conducted only on an individual basis and not in a class, consolidated,
                    or representative action.
                  </p>
                  <p>
                    <strong className="text-library-brown">11.5 Injunctive Relief:</strong> Notwithstanding the above,
                    we may seek injunctive or other equitable relief in any court of competent jurisdiction.
                  </p>
                </div>
              </div>

              {/* Additional Terms */}
              <div className="scroll-mt-24 border-t border-library-brown/20 pt-8">
                <h2 className="text-2xl font-bold text-library-brown mb-4">12. Additional Terms</h2>
                <div className="space-y-4 text-library-brown/80">
                  <p>
                    <strong className="text-library-brown">12.1 Entire Agreement:</strong> These Terms constitute the
                    entire agreement between you and The Library of New Jersey regarding our services.
                  </p>
                  <p>
                    <strong className="text-library-brown">12.2 Modifications:</strong> We reserve the right to modify
                    these Terms at any time. Changes will be effective immediately upon posting to our website.
                  </p>
                  <p>
                    <strong className="text-library-brown">12.3 Severability:</strong> If any provision of these Terms
                    is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                  </p>
                  <p>
                    <strong className="text-library-brown">12.4 Waiver:</strong> Our failure to enforce any right or
                    provision of these Terms shall not be considered a waiver of those rights.
                  </p>
                  <p>
                    <strong className="text-library-brown">12.5 Assignment:</strong> You may not assign or transfer
                    these Terms or your rights hereunder without our prior written consent.
                  </p>
                  <p>
                    <strong className="text-library-brown">12.6 Survival:</strong> Provisions relating to intellectual
                    property, indemnification, limitation of liability, and dispute resolution shall survive termination
                    of these Terms.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-library-brown/5 rounded-lg p-6 mt-12">
                <h2 className="text-xl font-bold text-library-brown mb-4">Contact Information</h2>
                <div className="space-y-2 text-library-brown/80">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="mt-4 space-y-1">
                    <p><strong>The Library of New Jersey</strong></p>
                    <p>1-3 Washington Street</p>
                    <p>West Orange, NJ 07052</p>
                    <p>Phone: (973) 731-1199</p>
                    <p>Email: info@thelibrarynj.com</p>
                  </div>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="bg-library-gold/10 border border-library-gold/30 rounded-lg p-6 mt-8">
                <p className="text-library-brown font-medium text-center">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these
                  Terms of Service and all applicable laws and regulations regarding cannabis use in New Jersey.
                </p>
              </div>
            </div>
          </section>

          {/* Back to Top Button */}
          <div className="text-center pb-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-library-brown text-white rounded-lg hover:bg-library-gold transition-colors"
            >
              Back to Top
            </button>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default TermsPage