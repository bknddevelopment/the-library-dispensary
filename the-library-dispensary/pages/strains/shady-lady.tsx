import { NextPage } from 'next'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageTransition from "../../components/PageTransition"
import FloatingParticles from "../../components/FloatingParticles"
import FloatingIntakeButton from "../../components/FloatingIntakeButton"
import Link from 'next/link'

const ShadyLadyStrain: NextPage = () => {
  return (
    <>
      <SEO
        title="Shady Lady Strain Guide | Effects, THC & Reviews | The Library"
        description="Complete guide to Shady Lady strain. Learn about effects, THC levels, terpenes, and user reviews. Available at The Library of New Jersey in West Orange, NJ. Order online for pickup."
        keywords="shady lady strain, shady lady weed strain, shady lady cannabis, shady lady strain effects, shady lady strain review, shady lady thc level, shady lady terpenes, shady lady strain indica or sativa"
        canonicalUrl="https://thelibrarynj.com/strains/shady-lady/"
      />
      <StructuredData pageType="product" />
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
                  Shady Lady Strain
                </h1>
                <p className="text-xl md:text-2xl text-library-teal max-w-3xl mx-auto mb-8">
                  A mysterious and alluring hybrid strain delivering balanced effects with a touch of elegance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/products" className="bg-library-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Check Availability
                  </Link>
                  <Link href="#strain-details" className="bg-library-teal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-library-teal font-semibold mb-2">TYPE</h3>
                  <p className="text-2xl font-bold text-library-brown">Hybrid</p>
                  <p className="text-sm text-gray-600 mt-1">50/50 Balanced</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-library-teal font-semibold mb-2">THC LEVEL</h3>
                  <p className="text-2xl font-bold text-library-brown">22-26%</p>
                  <p className="text-sm text-gray-600 mt-1">Potent</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-library-teal font-semibold mb-2">PRIMARY EFFECT</h3>
                  <p className="text-2xl font-bold text-library-brown">Euphoric</p>
                  <p className="text-sm text-gray-600 mt-1">Uplifting & Relaxing</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-library-teal font-semibold mb-2">FLAVOR</h3>
                  <p className="text-2xl font-bold text-library-brown">Sweet</p>
                  <p className="text-sm text-gray-600 mt-1">Berry & Floral</p>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Description */}
          <section id="strain-details" className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-8 text-center">
                About Shady Lady Strain
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Shady Lady is an enigmatic hybrid cannabis strain that has been gaining popularity among connoisseurs for its perfectly balanced effects and complex flavor profile. This mysterious beauty delivers a harmonious blend of cerebral stimulation and physical relaxation, making it an ideal choice for both recreational and medicinal users.
                </p>
                <p>
                  The Shady Lady strain is believed to be a cross between carefully selected parent strains, though its exact lineage remains somewhat mysterious – adding to its allure. What we do know is that this balanced hybrid typically features a 50/50 split between indica and sativa genetics, offering users the best of both worlds.
                </p>
                <p>
                  With THC levels ranging from 22% to 26%, Shady Lady is considered a potent strain that should be approached with respect, especially by novice users. The high THC content delivers powerful effects that can last for several hours, making it an economical choice for regular cannabis consumers.
                </p>
                <p>
                  The buds of Shady Lady are visually striking, featuring dense, medium-sized nugs with a beautiful color palette. Deep forest green leaves are interwoven with vibrant purple hues, while bright orange pistils wind throughout. A generous coating of crystalline trichomes gives the buds a frosty, almost ethereal appearance that hints at the strain's potency.
                </p>
              </div>
            </div>
          </section>

          {/* Effects and Benefits */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Effects & Benefits of Shady Lady
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Recreational Effects
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">😊</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Euphoria</h4>
                        <p className="text-gray-700">Shady Lady delivers an initial wave of euphoria that lifts mood and promotes positive thinking.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">🎨</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Creativity</h4>
                        <p className="text-gray-700">Many users report enhanced creativity and artistic inspiration, making it great for creative projects.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">💬</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Sociability</h4>
                        <p className="text-gray-700">The strain promotes conversation and social engagement, perfect for gatherings with friends.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">🛋️</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Relaxation</h4>
                        <p className="text-gray-700">As effects progress, a gentle body relaxation sets in without causing sedation.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Medical Benefits
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-library-cream p-4 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">Stress Relief</h4>
                      <p className="text-gray-700">Shady Lady's balanced effects make it excellent for managing daily stress and anxiety without overwhelming sedation.</p>
                    </div>
                    <div className="bg-library-cream p-4 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">Pain Management</h4>
                      <p className="text-gray-700">The strain's body effects can help alleviate chronic pain, muscle tension, and inflammation.</p>
                    </div>
                    <div className="bg-library-cream p-4 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">Mood Enhancement</h4>
                      <p className="text-gray-700">Patients with depression often find relief from Shady Lady's uplifting and euphoric properties.</p>
                    </div>
                    <div className="bg-library-cream p-4 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">Appetite Stimulation</h4>
                      <p className="text-gray-700">Like many cannabis strains, Shady Lady can help stimulate appetite in patients dealing with eating disorders or treatment side effects.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Terpene Profile */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Shady Lady Terpene Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">🍋</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-2">Limonene</h3>
                  <p className="text-gray-700 mb-2">Primary Terpene</p>
                  <p className="text-sm text-gray-600">Provides citrusy aroma and mood-lifting effects. Known for stress relief and antibacterial properties.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">🌲</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-2">Myrcene</h3>
                  <p className="text-gray-700 mb-2">Secondary Terpene</p>
                  <p className="text-sm text-gray-600">Contributes earthy, musky notes. Promotes relaxation and enhances THC absorption.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">🌸</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-2">Linalool</h3>
                  <p className="text-gray-700 mb-2">Supporting Terpene</p>
                  <p className="text-sm text-gray-600">Adds floral, lavender notes. Known for calming effects and potential anti-anxiety properties.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-library-teal mb-4">Flavor & Aroma Profile</h3>
                <p className="text-gray-700 mb-4">
                  Shady Lady strain offers a complex and enticing sensory experience. On first inhale, users are greeted with sweet berry notes reminiscent of fresh blueberries and blackberries. This fruity foundation is complemented by subtle floral undertones that add sophistication to the flavor profile.
                </p>
                <p className="text-gray-700 mb-4">
                  The aroma is equally captivating, with a sweet and slightly skunky scent that fills the room. Breaking apart the buds releases additional notes of earth and pine, creating a well-rounded olfactory experience. The smoke is smooth and pleasant, with a sweet aftertaste that lingers on the palate.
                </p>
                <p className="text-gray-700">
                  When vaporized, Shady Lady's terpene profile truly shines, allowing users to fully appreciate the nuanced flavors without combustion byproducts. The lower temperatures of vaporization preserve the delicate terpenes, resulting in a cleaner, more flavorful experience.
                </p>
              </div>
            </div>
          </section>

          {/* Growing Information */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Growing Shady Lady Strain
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Cultivation Details
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown">Difficulty Level</h4>
                      <p className="text-gray-700">Moderate - Suitable for growers with some experience</p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown">Flowering Time</h4>
                      <p className="text-gray-700">8-10 weeks indoors, early October outdoors</p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown">Yield</h4>
                      <p className="text-gray-700">Indoor: 14-18 oz/m² | Outdoor: 18-22 oz/plant</p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown">Height</h4>
                      <p className="text-gray-700">Medium height, 4-6 feet indoors, up to 8 feet outdoors</p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown">Climate</h4>
                      <p className="text-gray-700">Prefers Mediterranean climate, resistant to mold and mildew</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Growing Tips
                  </h3>
                  <div className="bg-library-cream p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li>• <strong>Training:</strong> Responds well to LST (Low Stress Training) and SCROG methods</li>
                      <li>• <strong>Nutrients:</strong> Moderate feeder, benefits from calcium and magnesium supplements</li>
                      <li>• <strong>Humidity:</strong> Maintain 40-50% during flowering to prevent bud rot</li>
                      <li>• <strong>Temperature:</strong> Optimal range 68-80°F (20-27°C)</li>
                      <li>• <strong>Pruning:</strong> Regular pruning improves air circulation and light penetration</li>
                      <li>• <strong>Harvest:</strong> Watch for 70% amber trichomes for peak potency</li>
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-library-tan rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Growing cannabis at home in New Jersey is currently not legal for recreational users. Medical patients may be permitted limited home cultivation in the future. Always check current state and local laws.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Reviews Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                What Users Say About Shady Lady
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Shady Lady is my go-to evening strain. Perfect balance of head and body effects. Great for unwinding after work without getting couch-locked."
                  </p>
                  <p className="text-sm text-gray-500">- Sarah M., West Orange</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Amazing flavor profile! The berry notes are so pronounced. Effects are exactly what I need for my anxiety - calming but not sedating."
                  </p>
                  <p className="text-sm text-gray-500">- Mike R., Montclair</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="ml-2 text-gray-600">4.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Potent strain! New users should start slow. Great for creative projects - I painted my best work after enjoying Shady Lady."
                  </p>
                  <p className="text-sm text-gray-500">- Jessica T., Livingston</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "This strain helps with my chronic pain better than anything else I've tried. The Library always has it in stock which I appreciate!"
                  </p>
                  <p className="text-sm text-gray-500">- David L., Essex County</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Frequently Asked Questions About Shady Lady Strain
              </h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Is Shady Lady strain indica or sativa?
                  </h3>
                  <p className="text-gray-700">
                    Shady Lady is a perfectly balanced hybrid strain with a 50/50 indica to sativa ratio. This balance provides users with both cerebral stimulation from the sativa genetics and body relaxation from the indica side.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What is the THC level of Shady Lady strain?
                  </h3>
                  <p className="text-gray-700">
                    Shady Lady typically contains between 22% and 26% THC, making it a potent strain. New users should start with small doses to assess their tolerance, while experienced users will appreciate its strong effects.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What are the main effects of Shady Lady?
                  </h3>
                  <p className="text-gray-700">
                    Users report feeling euphoric, creative, relaxed, and social. The strain provides an initial cerebral uplift followed by gentle body relaxation. It's known for promoting happiness and creativity without causing sedation.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Is Shady Lady good for beginners?
                  </h3>
                  <p className="text-gray-700">
                    Due to its high THC content (22-26%), Shady Lady may be intense for beginners. New users should start with very small amounts and gradually increase as they become familiar with its effects. Consider starting with lower-THC strains if you're new to cannabis.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What does Shady Lady strain taste like?
                  </h3>
                  <p className="text-gray-700">
                    Shady Lady offers a delicious flavor profile featuring sweet berry notes, particularly blueberry and blackberry, with subtle floral undertones. The aroma is sweet and slightly skunky with hints of earth and pine.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    When is the best time to use Shady Lady strain?
                  </h3>
                  <p className="text-gray-700">
                    Shady Lady is versatile enough for afternoon or evening use. Its balanced effects make it suitable for social gatherings, creative projects, or relaxing at home. Many users enjoy it in the early evening to unwind without becoming too sedated.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Where can I buy Shady Lady strain in New Jersey?
                  </h3>
                  <p className="text-gray-700">
                    Shady Lady strain is available at The Library of New Jersey in West Orange, NJ. Check our online menu for current availability and pricing. We offer convenient online ordering with in-store pickup for all customers 21+ or medical patients with valid cards.
                  </p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What medical conditions might Shady Lady help with?
                  </h3>
                  <p className="text-gray-700">
                    Medical patients report Shady Lady may help with stress, anxiety, depression, chronic pain, and appetite loss. However, always consult with a healthcare provider about using cannabis for medical purposes. Individual results may vary.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-library-gold to-library-teal">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Experience Shady Lady Strain at The Library
              </h2>
              <p className="text-xl text-white mb-8 opacity-90">
                Ready to discover why Shady Lady is becoming one of New Jersey's most sought-after strains? Visit The Library of New Jersey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="bg-white text-library-teal px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                  Check Availability
                </Link>
                <Link href="/location" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-library-teal transition-colors inline-block">
                  Visit Us Today
                </Link>
              </div>
              <p className="text-white mt-8 opacity-75">
                📍 1-3 Washington St, West Orange, NJ | 📞 (973) 731-1199
              </p>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default ShadyLadyStrain