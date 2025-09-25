import { NextPage } from 'next'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"
import Link from 'next/link'

const DispensaryWestOrangeNJ: NextPage = () => {
  return (
    <>
      <SEO
        title="Dispensary West Orange NJ | Premium Cannabis Store | The Library"
        description="Looking for a dispensary in West Orange NJ? The Library offers premium cannabis flower, edibles, vapes & concentrates. Same-day pickup, expert budtenders. Open daily at 1-3 Washington St."
        keywords="dispensary west orange nj, cannabis dispensary west orange, marijuana dispensary west orange new jersey, weed store west orange, recreational cannabis west orange nj, medical marijuana west orange, the library dispensary west orange"
        canonicalUrl="https://thelibrarynj.com/dispensary-west-orange-nj/"
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
                  West Orange's Premier Cannabis Dispensary
                </h1>
                <p className="text-xl md:text-2xl text-library-teal max-w-3xl mx-auto mb-8">
                  Your trusted dispensary in West Orange NJ for premium cannabis products, expert guidance, and exceptional service
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/products" className="bg-library-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Browse Our Menu
                  </Link>
                  <Link href="/location" className="bg-library-teal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Get Directions
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-8 text-center">
                Why Choose The Library of New Jersey in West Orange NJ?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Located in the heart of West Orange, New Jersey, The Library of New Jersey stands as Essex County's premier destination for both recreational and medical cannabis. Our dispensary in West Orange NJ combines the warmth of a neighborhood bookstore with the professionalism of a modern cannabis retail experience.
                </p>
                <p>
                  As West Orange's newest and most innovative cannabis dispensary, we've carefully curated our selection to meet the diverse needs of our community. Whether you're a seasoned cannabis connoisseur or exploring cannabis for the first time, our knowledgeable budtenders are here to guide you through our extensive collection of premium products.
                </p>
                <p>
                  Conveniently located at 1-3 Washington Street, our West Orange dispensary is easily accessible from all major highways and public transportation routes. We proudly serve not just West Orange, but the entire Essex County region including Montclair, South Orange, Maplewood, Livingston, and surrounding communities.
                </p>
              </div>
            </div>
          </section>

          {/* Product Categories */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Premium Cannabis Products at Our West Orange Dispensary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-library-gold mb-4">Cannabis Flower</h3>
                  <p className="text-gray-700 mb-4">
                    Our West Orange dispensary features hand-selected premium flower from New Jersey's top cultivators. From energizing sativas to relaxing indicas and balanced hybrids, we have strains to suit every preference and experience level.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Indoor & greenhouse grown</li>
                    <li>• Lab-tested for purity & potency</li>
                    <li>• 20+ strains in stock daily</li>
                    <li>• Pre-packaged & fresh options</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-library-gold mb-4">Cannabis Edibles</h3>
                  <p className="text-gray-700 mb-4">
                    Discover our extensive selection of cannabis-infused edibles. Perfect for those who prefer a smoke-free experience, our West Orange NJ dispensary stocks gummies, chocolates, beverages, and more.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Precise dosing options</li>
                    <li>• Vegan & gluten-free choices</li>
                    <li>• Fast-acting nano formulations</li>
                    <li>• Trusted local brands</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-library-gold mb-4">Vapes & Concentrates</h3>
                  <p className="text-gray-700 mb-4">
                    For those seeking potency and convenience, our dispensary in West Orange offers premium vape cartridges, disposables, and concentrates from industry-leading brands.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Live resin & distillate options</li>
                    <li>• Battery-compatible cartridges</li>
                    <li>• All-in-one disposables</li>
                    <li>• Solventless concentrates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Local Area Information */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-8 text-center">
                Serving West Orange and Surrounding Essex County Communities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-4">
                    Your Local West Orange Cannabis Experts
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The Library of New Jersey is proud to be part of the West Orange community. Our location at 1-3 Washington Street puts us at the center of Essex County's cannabis scene, making us the go-to dispensary for residents throughout the region.
                  </p>
                  <p className="text-gray-700 mb-4">
                    West Orange, known for its diverse neighborhoods and rich history, is the perfect home for our dispensary. From the bustling downtown district to the quiet residential areas, we serve all of West Orange with pride and dedication to quality cannabis products and education.
                  </p>
                  <p className="text-gray-700">
                    Our West Orange NJ dispensary is more than just a retail location – we're a community hub where cannabis enthusiasts can learn, explore, and connect. We regularly host educational events, product showcases, and community gatherings to foster a responsible and informed cannabis culture in Essex County.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-4">
                    Easy Access from Anywhere in Essex County
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our dispensary in West Orange NJ is conveniently located for customers throughout Essex County and beyond:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>From Montclair:</strong> Just 10 minutes via Valley Road</li>
                    <li><strong>From South Orange:</strong> 5 minutes via South Orange Avenue</li>
                    <li><strong>From Livingston:</strong> 8 minutes via Route 10</li>
                    <li><strong>From Maplewood:</strong> 7 minutes via Valley Street</li>
                    <li><strong>From Newark:</strong> 15 minutes via I-280 West</li>
                    <li><strong>From Millburn:</strong> 10 minutes via Main Street</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Ample parking is available, and we're easily accessible by NJ Transit bus routes. Our West Orange location makes us the most convenient dispensary for cannabis consumers throughout northern New Jersey.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Exceptional Services at Our West Orange NJ Dispensary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-library-gold mb-4">
                    Online Ordering & Express Pickup
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Skip the wait at our West Orange dispensary with convenient online ordering. Browse our full menu, place your order, and pick it up at your convenience. Our express pickup service ensures you get your cannabis products quickly and discreetly.
                  </p>
                  <Link href="/products" className="text-library-teal hover:text-library-gold font-semibold">
                    Order Online Now →
                  </Link>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-library-gold mb-4">
                    Expert Cannabis Consultations
                  </h3>
                  <p className="text-gray-700 mb-4">
                    New to cannabis or looking for something specific? Our West Orange budtenders are certified cannabis experts ready to guide you. We offer personalized consultations to help you find the perfect products for your needs and preferences.
                  </p>
                  <Link href="/first-visit" className="text-library-teal hover:text-library-gold font-semibold">
                    Plan Your Visit →
                  </Link>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-library-gold mb-4">
                    Educational Resources
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Knowledge is power, especially when it comes to cannabis. Our West Orange NJ dispensary provides comprehensive educational resources, from strain guides to consumption methods, helping you make informed decisions about your cannabis journey.
                  </p>
                  <Link href="/education" className="text-library-teal hover:text-library-gold font-semibold">
                    Learn More →
                  </Link>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-library-gold mb-4">
                    Daily Deals & Loyalty Program
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Get more value from your visits to our West Orange dispensary. We offer daily specials, first-time customer discounts, and a rewarding loyalty program that gives back to our regular customers.
                  </p>
                  <Link href="/products" className="text-library-teal hover:text-library-gold font-semibold">
                    View Today's Deals →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Frequently Asked Questions About Our West Orange NJ Dispensary
              </h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What are the hours for your dispensary in West Orange NJ?
                  </h3>
                  <p className="text-gray-700">
                    The Library of New Jersey in West Orange is open Monday through Thursday from 10:00 AM to 9:00 PM, Friday and Saturday from 10:00 AM to 10:00 PM, and Sunday from 10:00 AM to 8:00 PM. We recommend checking our website for holiday hours or special events.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Do I need a medical marijuana card to shop at your West Orange dispensary?
                  </h3>
                  <p className="text-gray-700">
                    No, you don't need a medical marijuana card to shop at our West Orange NJ dispensary. We serve both recreational customers (21+) and medical patients. However, medical patients with valid NJ medical marijuana cards receive special discounts and tax benefits.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What forms of payment does your West Orange cannabis dispensary accept?
                  </h3>
                  <p className="text-gray-700">
                    Our dispensary in West Orange NJ accepts cash and debit cards (processed as ATM transactions with a small fee). We have an ATM on-site for your convenience. Due to federal banking regulations, we cannot accept credit cards at this time.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Is there parking available at your West Orange dispensary location?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Our West Orange NJ dispensary at 1-3 Washington Street offers convenient parking for our customers. We have dedicated parking spaces as well as street parking available. The location is also accessible via public transportation.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Can I order online from your dispensary in West Orange?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely! Our West Orange dispensary offers convenient online ordering through our website. Browse our full menu, add items to your cart, and select a pickup time that works for you. This helps you skip the line and get in and out quickly.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What makes The Library different from other dispensaries in West Orange NJ?
                  </h3>
                  <p className="text-gray-700">
                    The Library of New Jersey stands out in West Orange for our curated selection, knowledgeable staff, and commitment to education. We combine the cozy atmosphere of a neighborhood bookstore with premium cannabis products and exceptional customer service. Our focus on community engagement and cannabis education sets us apart.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Do you offer delivery from your West Orange dispensary?
                  </h3>
                  <p className="text-gray-700">
                    Currently, our West Orange NJ dispensary offers in-store shopping and express pickup services. While we don't offer delivery at this time, our convenient location and quick pickup options make getting your cannabis products fast and easy. Check back for updates on delivery services.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Are there purchase limits at your dispensary in West Orange?
                  </h3>
                  <p className="text-gray-700">
                    Yes, in accordance with New Jersey state law, recreational customers can purchase up to 1 ounce of flower, 5 grams of concentrate, or 1000mg of edibles per day at our West Orange dispensary. Medical patients may have different limits based on their doctor's recommendations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-library-gold to-library-teal">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Visit West Orange's Premier Cannabis Dispensary Today
              </h2>
              <p className="text-xl text-white mb-8 opacity-90">
                Experience the difference at The Library of New Jersey. Expert guidance, premium products, and exceptional service await you at our West Orange NJ location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="bg-white text-library-teal px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                  Shop Online Now
                </Link>
                <Link href="/location" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-library-teal transition-colors inline-block">
                  Get Directions
                </Link>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default DispensaryWestOrangeNJ