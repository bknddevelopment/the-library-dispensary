import { NextPage } from 'next'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"
import Link from 'next/link'

const MarijuanaDispensaryEssexCounty: NextPage = () => {
  return (
    <>
      <SEO
        title="Marijuana Dispensary Essex County NJ | Cannabis Store | The Library"
        description="The Library is Essex County's premier marijuana dispensary. Serving West Orange, Montclair, Livingston, and all of Essex County NJ with premium cannabis products. Open daily, online ordering available."
        keywords="marijuana dispensary essex county, cannabis dispensary essex county nj, weed store essex county, recreational marijuana essex county, medical cannabis essex county, dispensary near me essex county, essex county dispensary"
        canonicalUrl="https://thelibrarynj.com/marijuana-dispensary-essex-county/"
      />
      <StructuredData pageType="home" />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen bg-gradient-to-b from-library-tan via-white to-library-cream">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-library-brown mb-6">
                  Essex County's Premier Marijuana Dispensary
                </h1>
                <p className="text-xl md:text-2xl text-library-teal max-w-3xl mx-auto mb-8">
                  Serving all of Essex County NJ with premium cannabis products, expert knowledge, and exceptional service at The Library Dispensary
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/products" className="bg-library-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Explore Our Menu
                  </Link>
                  <Link href="/location" className="bg-library-teal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Find Our Location
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Essex County Overview */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-8 text-center">
                Proudly Serving All of Essex County, New Jersey
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The Library Dispensary stands as Essex County's leading marijuana dispensary, strategically located in West Orange to serve the entire county's diverse communities. As one of New Jersey's most populous counties, Essex County deserves a cannabis dispensary that matches its standards for quality, accessibility, and community service.
                </p>
                <p>
                  Essex County, home to nearly 850,000 residents across 22 municipalities, represents one of New Jersey's most dynamic and diverse regions. From the bustling streets of Newark to the tree-lined neighborhoods of the Caldwells, from the artistic communities of Montclair to the suburban comfort of Livingston, our marijuana dispensary serves this entire tapestry of Essex County life.
                </p>
                <p>
                  Located at 1-3 Washington Street in West Orange, The Library Dispensary is centrally positioned within Essex County, making us easily accessible from every corner of the county. Whether you're coming from the eastern border near Belleville and Nutley, the western reaches of Fairfield and Roseland, or anywhere in between, our Essex County dispensary is never more than a short drive away.
                </p>
              </div>
            </div>
          </section>

          {/* Cities and Towns Served */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Communities We Serve Throughout Essex County
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-library-teal mb-3">Northern Essex County</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Montclair</strong> - 10 minutes away</li>
                    <li>• <strong>Bloomfield</strong> - 12 minutes away</li>
                    <li>• <strong>Glen Ridge</strong> - 11 minutes away</li>
                    <li>• <strong>Verona</strong> - 8 minutes away</li>
                    <li>• <strong>Cedar Grove</strong> - 10 minutes away</li>
                    <li>• <strong>North Caldwell</strong> - 12 minutes away</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-library-teal mb-3">Central Essex County</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>West Orange</strong> - Our home!</li>
                    <li>• <strong>Orange</strong> - 5 minutes away</li>
                    <li>• <strong>East Orange</strong> - 8 minutes away</li>
                    <li>• <strong>South Orange</strong> - 7 minutes away</li>
                    <li>• <strong>Maplewood</strong> - 10 minutes away</li>
                    <li>• <strong>Irvington</strong> - 10 minutes away</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-library-teal mb-3">Eastern & Western Essex</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Newark</strong> - 15 minutes away</li>
                    <li>• <strong>Belleville</strong> - 15 minutes away</li>
                    <li>• <strong>Nutley</strong> - 14 minutes away</li>
                    <li>• <strong>Livingston</strong> - 10 minutes away</li>
                    <li>• <strong>Millburn</strong> - 12 minutes away</li>
                    <li>• <strong>Roseland</strong> - 12 minutes away</li>
                    <li>• <strong>Essex Fells</strong> - 11 minutes away</li>
                    <li>• <strong>Fairfield</strong> - 15 minutes away</li>
                    <li>• <strong>Caldwell</strong> - 10 minutes away</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-700 text-center">
                  <strong>No matter where you are in Essex County</strong>, The Library Dispensary is your closest source for legal, high-quality cannabis products. Our central location ensures that whether you're in Newark's Ironbound district, Millburn's downtown, or anywhere else in Essex County, premium cannabis is just a short drive away.
                </p>
              </div>
            </div>
          </section>

          {/* Why Essex County Chooses The Library */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Why The Library is Essex County's Top Choice for Cannabis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Understanding Essex County's Diverse Needs
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Essex County's diversity is its strength, and our marijuana dispensary celebrates this by offering products and services that cater to all communities. From young professionals in Montclair to families in Livingston, from students near Newark's universities to seniors in the Caldwells, we understand that Essex County's cannabis consumers have varied needs and preferences.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our staff reflects Essex County's diversity, with team members who speak multiple languages and understand various cultural perspectives on cannabis use. This inclusive approach ensures that everyone who walks through our doors feels welcomed and understood.
                  </p>
                  <p className="text-gray-700">
                    We've studied Essex County's demographics, from its urban centers to its suburban enclaves, and curated our product selection accordingly. Whether you're seeking medical relief, recreational enjoyment, or wellness support, our Essex County dispensary has options tailored to your specific needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Supporting Essex County's Economy
                  </h3>
                  <p className="text-gray-700 mb-4">
                    As a locally-operated marijuana dispensary in Essex County, we're committed to supporting our regional economy. We employ Essex County residents, partner with local businesses, and contribute tax revenue that benefits our communities.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our dispensary sources products from New Jersey cultivators and manufacturers whenever possible, supporting the state's growing cannabis industry. This commitment to local sourcing ensures freshness while supporting Essex County's position as a leader in New Jersey's cannabis market.
                  </p>
                  <p className="text-gray-700">
                    Beyond direct economic impact, we participate in Essex County community events, support local charities, and collaborate with area organizations. When you shop at The Library, you're not just buying cannabis – you're investing in Essex County's future.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Products and Services */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Comprehensive Cannabis Solutions for Essex County
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-library-gold mb-6">
                    Medical Cannabis for Essex County Patients
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Essex County residents with qualifying medical conditions can find relief at our dispensary. We offer a comprehensive selection of medical-grade cannabis products, including high-CBD options, precise-dose formulations, and therapeutic topicals.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Compassionate care discounts for patients</li>
                    <li>• Private consultation rooms available</li>
                    <li>• Knowledgeable staff trained in medical applications</li>
                    <li>• Tax-free purchases for cardholders</li>
                    <li>• Special ordering for specific medical needs</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-library-gold mb-6">
                    Recreational Cannabis for Adult Essex County Residents
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Adults 21+ throughout Essex County can explore our extensive recreational cannabis menu. From social consumption to personal relaxation, we offer products for every experience level and preference.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Premium flower from top NJ cultivators</li>
                    <li>• Convenient pre-rolls and vapes</li>
                    <li>• Delicious edibles in various potencies</li>
                    <li>• Educational materials for new users</li>
                    <li>• Regular specials and loyalty rewards</li>
                  </ul>
                </div>
              </div>
              <div className="bg-library-tan p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-library-brown mb-4 text-center">
                  Essex County's Most Trusted Cannabis Brands
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  Our marijuana dispensary proudly carries Essex County's favorite cannabis brands, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-library-teal">Verano</p>
                    <p className="text-sm text-gray-600">Premium Flower</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-library-teal">Rythm</p>
                    <p className="text-sm text-gray-600">Vapes & Concentrates</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-library-teal">Select</p>
                    <p className="text-sm text-gray-600">Elite Edibles</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-library-teal">Kind Tree</p>
                    <p className="text-sm text-gray-600">Quality & Value</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transportation and Access */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Easy Access from Anywhere in Essex County
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Major Highway Access
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our Essex County marijuana dispensary is conveniently located near major highways, making us accessible from every corner of the county:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Route 280:</strong> Direct access from Newark, East Orange, and points east</li>
                    <li><strong>Garden State Parkway:</strong> Easy access via Exit 145 or 147</li>
                    <li><strong>Route 10:</strong> Convenient for Livingston and western Essex County</li>
                    <li><strong>Route 24:</strong> Quick access from Millburn and southern areas</li>
                    <li><strong>Route 46:</strong> Accessible from northern Essex County</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Our central West Orange location means you're never more than 20 minutes away from premium cannabis, regardless of where you are in Essex County.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Public Transportation Options
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Essex County's robust public transportation network makes reaching our dispensary easy even without a car:
                  </p>
                  <div className="bg-library-cream p-6 rounded-lg">
                    <h4 className="font-semibold text-library-brown mb-3">NJ Transit Bus Routes:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>21 Route:</strong> Newark to West Orange</li>
                      <li>• <strong>71 Route:</strong> Newark Penn Station connection</li>
                      <li>• <strong>DeCamp 33:</strong> Montclair to West Orange</li>
                      <li>• <strong>73 Route:</strong> Livingston Mall connection</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mt-4">
                    For Essex County residents using public transportation, our dispensary is just a short walk from several bus stops, making cannabis access convenient for all.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Essex County Cannabis Culture */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Leading Essex County's Cannabis Revolution
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Essex County has always been at the forefront of progressive change in New Jersey, and cannabis legalization is no exception. As one of the state's most diverse and forward-thinking counties, Essex County embraces responsible cannabis use as part of a modern, inclusive society.
                </p>
                <p>
                  The Library Dispensary is proud to be part of this transformation. We're not just a marijuana dispensary in Essex County – we're advocates for responsible use, educators for curious minds, and partners in destigmatizing cannabis. Our commitment goes beyond selling products; we're building a community that understands and appreciates cannabis's role in wellness, recreation, and social justice.
                </p>
                <p>
                  From hosting educational events to supporting expungement clinics, from partnering with local artists to sponsoring community initiatives, The Library is deeply invested in Essex County's cannabis future. We believe that a well-informed, responsible cannabis community benefits everyone in Essex County.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Essex County Cannabis Dispensary FAQs
              </h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Is The Library the only marijuana dispensary in Essex County?
                  </h3>
                  <p className="text-gray-700">
                    While Essex County has several dispensaries, The Library stands out for our central location in West Orange, making us easily accessible to all Essex County residents. We're known for our curated selection, knowledgeable staff, and commitment to serving the entire county's diverse communities.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Do you serve all Essex County towns equally?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely! Whether you're from Newark, Montclair, Livingston, or any other Essex County municipality, you'll receive the same excellent service and pricing at our dispensary. We're proud to serve all 22 municipalities in Essex County without discrimination or preference.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What do I need to bring to shop at your Essex County dispensary?
                  </h3>
                  <p className="text-gray-700">
                    For recreational purchases, bring a valid government-issued ID showing you're 21 or older. Medical patients should bring their New Jersey medical marijuana card and ID. Essex County residents and visitors from anywhere are welcome with proper identification.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    How do Essex County cannabis taxes work?
                  </h3>
                  <p className="text-gray-700">
                    Recreational cannabis purchases in Essex County include state and local taxes. Medical marijuana patients with valid cards are exempt from most taxes. Tax revenue supports Essex County communities through various programs and services. Our staff can explain the tax breakdown on any purchase.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Can I consume cannabis products at your Essex County location?
                  </h3>
                  <p className="text-gray-700">
                    No, on-site consumption is not permitted at any Essex County marijuana dispensary, including ours. Cannabis must be consumed in private residences. Public consumption remains illegal throughout Essex County and can result in fines.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Do you offer education about cannabis for Essex County residents?
                  </h3>
                  <p className="text-gray-700">
                    Yes! We regularly host educational events for Essex County residents, covering topics from cannabis basics to advanced cultivation. Our knowledgeable staff also provides one-on-one consultations to help you understand products, dosing, and effects.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    How does The Library support Essex County communities?
                  </h3>
                  <p className="text-gray-700">
                    We're committed to Essex County through local hiring, community partnerships, charitable contributions, and participation in county events. We also support social equity initiatives and expungement efforts for those affected by past cannabis convictions in Essex County.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What makes your dispensary the best choice for Essex County?
                  </h3>
                  <p className="text-gray-700">
                    Our central Essex County location, extensive product selection, knowledgeable staff, and commitment to community set us apart. We understand Essex County's diverse needs and work hard to serve everyone from first-time users to cannabis connoisseurs with equal dedication.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-library-gold to-library-teal">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Experience Essex County's Premier Cannabis Dispensary
              </h2>
              <p className="text-xl text-white mb-8 opacity-90">
                Join thousands of Essex County residents who trust The Library for their cannabis needs. Quality products, expert guidance, and community commitment await.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="bg-white text-library-teal px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                  View Menu & Order
                </Link>
                <Link href="/first-visit" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-library-teal transition-colors inline-block">
                  Plan Your First Visit
                </Link>
              </div>
              <div className="mt-12 text-white">
                <p className="text-lg mb-2">Serving All 22 Essex County Municipalities</p>
                <p className="opacity-75">
                  📍 1-3 Washington St, West Orange, NJ 07052 | 📞 (973) 731-1199
                </p>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default MarijuanaDispensaryEssexCounty