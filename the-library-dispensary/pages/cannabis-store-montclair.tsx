import { NextPage } from 'next'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"
import Link from 'next/link'

const CannabisStoreMontclair: NextPage = () => {
  return (
    <>
      <SEO
        title="Cannabis Store Near Montclair | Dispensary Montclair NJ | The Library"
        description="Looking for a cannabis store near Montclair? The Library in West Orange is your closest dispensary to Montclair NJ. Premium cannabis products, edibles, vapes. Just 10 minutes from downtown Montclair."
        keywords="montclair dispensary, cannabis store montclair, cannabis dispensary near montclair nj, marijuana store montclair, recreational cannabis montclair, medical cannabis montclair nj, dispensary near montclair"
        canonicalUrl="https://thelibrarynj.com/cannabis-store-montclair/"
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
                  Montclair's Closest Premium Cannabis Store
                </h1>
                <p className="text-xl md:text-2xl text-library-teal max-w-3xl mx-auto mb-8">
                  The Library of New Jersey - Just 10 minutes from downtown Montclair, serving the community with exceptional cannabis products and expert guidance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/products" className="bg-library-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Shop Our Menu
                  </Link>
                  <Link href="/location" className="bg-library-teal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Directions from Montclair
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Location Proximity Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-8 text-center">
                Your Neighborhood Cannabis Store Serving Montclair
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-4">
                    Conveniently Located Near Montclair
                  </h3>
                  <p className="text-gray-700 mb-4">
                    While Montclair awaits its own dispensary, The Library in West Orange has become the go-to cannabis store for Montclair residents. Located just 10 minutes away at 1-3 Washington Street in West Orange, we're the closest and most convenient dispensary to Montclair NJ.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our proximity to Montclair means you don't have to travel far for premium cannabis products. We understand the Montclair community's values of quality, sustainability, and social responsibility, and we've built our dispensary to reflect these same principles.
                  </p>
                  <p className="text-gray-700">
                    Many of our staff members live in or near Montclair, giving us deep roots in the community. We're not just a cannabis store near Montclair – we're your neighbors, committed to providing safe, legal access to cannabis products for adult consumers.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-4">
                    Easy Directions from Montclair to The Library
                  </h3>
                  <div className="bg-library-cream p-6 rounded-lg">
                    <h4 className="font-semibold text-library-brown mb-3">From Downtown Montclair:</h4>
                    <ol className="space-y-2 text-gray-700">
                      <li>1. Head south on Park Street toward Bloomfield Avenue</li>
                      <li>2. Turn right onto Bloomfield Avenue</li>
                      <li>3. Continue onto Orange Road</li>
                      <li>4. Turn left onto Valley Road</li>
                      <li>5. Continue straight to Washington Street</li>
                      <li>6. The Library will be on your right at 1-3 Washington St</li>
                    </ol>
                    <p className="mt-4 text-sm text-gray-600">
                      <strong>Distance:</strong> 3.2 miles | <strong>Drive Time:</strong> 10 minutes
                    </p>
                  </div>
                  <div className="mt-4 bg-library-tan p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Public Transit Option:</strong> Take the DeCamp 33 bus from Montclair to West Orange. Get off at Main Street and walk 5 minutes to our dispensary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Montclair Chooses The Library */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Why Montclair Residents Choose The Library of New Jersey
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                <p>
                  Montclair, known for its progressive values, arts scene, and diverse community, deserves a cannabis dispensary that matches its high standards. Until Montclair gets its own dispensary, The Library in neighboring West Orange fills that role perfectly. We share Montclair's commitment to quality, community, and conscious consumption.
                </p>
                <p>
                  Our cannabis store near Montclair offers the same sophisticated, welcoming atmosphere that Montclair residents expect. From our carefully curated product selection to our knowledgeable staff, we provide an elevated cannabis retail experience that aligns with Montclair's discerning tastes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl mb-4">🌿</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-3">
                    Curated Selection
                  </h3>
                  <p className="text-gray-700">
                    Like Montclair's boutique shops and farmers markets, we focus on quality over quantity. Our products are carefully selected from trusted New Jersey cultivators and manufacturers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-3">
                    Educational Focus
                  </h3>
                  <p className="text-gray-700">
                    Montclair values education, and so do we. Our cannabis store provides comprehensive education about products, effects, and responsible consumption for both new and experienced users.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-3">
                    Community Minded
                  </h3>
                  <p className="text-gray-700">
                    We embrace Montclair's community spirit. Many of our customers and staff are Montclair residents, creating a familiar, neighborhood feel despite being in West Orange.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Products for Montclair */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Premium Cannabis Products for Montclair Customers
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Products Popular with Montclair Residents
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown mb-2">Organic & Sustainably Grown Flower</h4>
                      <p className="text-gray-700">
                        Montclair's environmentally conscious community appreciates our selection of organically grown cannabis flower. We prioritize cultivators who use sustainable practices and avoid harmful pesticides.
                      </p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown mb-2">Artisanal Edibles & Beverages</h4>
                      <p className="text-gray-700">
                        From craft cannabis chocolates to infused seltzers, our edibles selection mirrors Montclair's appreciation for artisanal foods. We stock locally-made products that use high-quality, often organic ingredients.
                      </p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown mb-2">Low-Dose & Micro-Dose Options</h4>
                      <p className="text-gray-700">
                        Many Montclair professionals prefer controlled, functional doses. We offer an extensive selection of low-dose edibles, tinctures, and vapes perfect for maintaining productivity and clarity.
                      </p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown mb-2">CBD & Wellness Products</h4>
                      <p className="text-gray-700">
                        Aligning with Montclair's wellness-focused lifestyle, we carry a full range of CBD products including topicals, tinctures, and capsules for those seeking therapeutic benefits without psychoactive effects.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Services Tailored for Montclair
                  </h3>
                  <div className="bg-library-cream p-6 rounded-lg">
                    <h4 className="font-semibold text-library-brown mb-4">Express Pickup for Montclair Commuters</h4>
                    <p className="text-gray-700 mb-4">
                      We know many Montclair residents commute to NYC. Order online during your commute and pick up on your way home – we're right off the main routes between Montclair and the city.
                    </p>
                  </div>
                  <div className="bg-library-tan p-6 rounded-lg mt-4">
                    <h4 className="font-semibold text-library-brown mb-4">Special Events & Education</h4>
                    <p className="text-gray-700 mb-4">
                      We regularly host events that appeal to Montclair's culturally engaged community, including artist showcases, educational seminars, and product launches featuring local cannabis brands.
                    </p>
                  </div>
                  <div className="bg-library-cream p-6 rounded-lg mt-4">
                    <h4 className="font-semibold text-library-brown mb-4">Personalized Consultations</h4>
                    <p className="text-gray-700">
                      Our budtenders take time to understand your needs, whether you're a Montclair parent seeking stress relief, an artist looking for creative inspiration, or a senior exploring cannabis products for wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Montclair Community Connection */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-8 text-center">
                Connecting with the Montclair Community
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The Library of New Jersey recognizes Montclair as more than just a neighboring town – it's a vibrant community with its own unique character. From the Montclair Art Museum to the Wellmont Theater, from Watchung Plaza to the farmers market, Montclair represents the best of North Jersey's cultural life.
                </p>
                <p>
                  We're proud to serve Montclair residents who value quality, creativity, and community. Our cannabis store may be located in West Orange, but our heart extends to all of Essex County. We support local Montclair artists, partner with area nonprofits, and participate in regional events that bring our communities together.
                </p>
                <p>
                  As Montclair continues to explore its own cannabis retail options, The Library stands ready to share our expertise and support responsible cannabis product access throughout the region. We believe in collaboration over competition and look forward to a future where every community has safe, legal access to cannabis products.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Frequently Asked Questions from Montclair Customers
              </h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    How far is The Library from downtown Montclair?
                  </h3>
                  <p className="text-gray-700">
                    The Library of New Jersey is located just 3.2 miles from downtown Montclair, typically a 10-minute drive via Valley Road. We're the closest dispensary to Montclair, making us the most convenient option for cannabis product shopping.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    When will Montclair get its own dispensary?
                  </h3>
                  <p className="text-gray-700">
                    While Montclair has approved cannabis retail, no dispensaries have opened yet. Until then, The Library in West Orange remains your closest and best option for legal cannabis products. We're just a short drive away and proudly serve the Montclair community.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Do you offer any discounts for Montclair residents?
                  </h3>
                  <p className="text-gray-700">
                    We offer the same great prices and daily deals to all our customers, including those from Montclair. First-time customers receive a special discount, and we have a loyalty program that rewards frequent shoppers. Check our menu for current specials.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Can I order online and pick up if I'm coming from Montclair?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely! Online ordering is perfect for Montclair customers. Place your order from home or during your commute, and we'll have it ready when you arrive. This is especially convenient if you're stopping by on your way home from work.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Is there parking available for customers coming from Montclair?
                  </h3>
                  <p className="text-gray-700">
                    Yes, we have ample parking at our West Orange location. There's a dedicated parking area for dispensary customers, plus street parking available. The short drive from Montclair ends with easy, convenient parking right at our door.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Do you carry products that align with Montclair's preference for organic and sustainable options?
                  </h3>
                  <p className="text-gray-700">
                    Yes! We specifically stock products that appeal to Montclair's environmentally conscious community. This includes organically grown flower, sustainably produced edibles, and products from companies that prioritize social responsibility and environmental stewardship.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What are your busiest times for Montclair customers?
                  </h3>
                  <p className="text-gray-700">
                    We see many Montclair customers on weekday evenings (5-7 PM) and weekend afternoons. To avoid wait times, consider visiting during weekday afternoons or use our online ordering system to skip the line entirely.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Do your budtenders understand the Montclair market?
                  </h3>
                  <p className="text-gray-700">
                    Several of our budtenders live in or near Montclair and understand the community's preferences perfectly. They can recommend products that align with Montclair's wellness-focused, quality-conscious approach to cannabis consumption.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-library-gold to-library-teal">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Montclair's Premier Cannabis Destination is Just Minutes Away
              </h2>
              <p className="text-xl text-white mb-8 opacity-90">
                Join your Montclair neighbors who've discovered The Library – where quality cannabis products meet exceptional service, just 10 minutes from downtown.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="bg-white text-library-teal px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                  Browse Menu & Order
                </Link>
                <Link href="/location" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-library-teal transition-colors inline-block">
                  Get Directions from Montclair
                </Link>
              </div>
              <p className="text-white mt-8 opacity-75">
                📍 Only 3.2 miles from downtown Montclair
              </p>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default CannabisStoreMontclair