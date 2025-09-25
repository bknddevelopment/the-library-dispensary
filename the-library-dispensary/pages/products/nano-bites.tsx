import { NextPage } from 'next'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageTransition from "../../components/PageTransition"
import FloatingParticles from "../../components/FloatingParticles"
import FloatingIntakeButton from "../../components/FloatingIntakeButton"
import Link from 'next/link'

const NanoBitesProduct: NextPage = () => {
  return (
    <>
      <SEO
        title="Nano Bites Cannabis Edibles | Fast-Acting THC Gummies | The Library"
        description="Discover Nano Bites - revolutionary fast-acting cannabis edibles with nano-enhanced THC. Feel effects in 15-30 minutes. Available at The Library of New Jersey in West Orange, NJ."
        keywords="nano bites, nano bites edibles, nano bites thc, fast acting edibles, nano enhanced cannabis, nano thc gummies, quick onset edibles, nano bites weed"
        canonicalUrl="https://thelibrarynj.com/products/nano-bites/"
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
                <div className="inline-block bg-library-gold text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  FAST-ACTING TECHNOLOGY
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-library-brown mb-6">
                  Nano Bites
                </h1>
                <p className="text-xl md:text-2xl text-library-teal max-w-3xl mx-auto mb-8">
                  Revolutionary nano-enhanced cannabis edibles that work in 15-30 minutes instead of hours
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/products" className="bg-library-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Shop Nano Bites
                  </Link>
                  <Link href="#how-it-works" className="bg-library-teal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Learn How It Works
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="text-library-teal font-semibold mb-2">ONSET TIME</h3>
                  <p className="text-2xl font-bold text-library-brown">15-30min</p>
                  <p className="text-sm text-gray-600 mt-1">vs 1-2 hours traditional</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="text-library-teal font-semibold mb-2">PRECISION</h3>
                  <p className="text-2xl font-bold text-library-brown">Exact Dosing</p>
                  <p className="text-sm text-gray-600 mt-1">Consistent effects</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="text-3xl mb-2">🍬</div>
                  <h3 className="text-library-teal font-semibold mb-2">FLAVORS</h3>
                  <p className="text-2xl font-bold text-library-brown">6 Options</p>
                  <p className="text-sm text-gray-600 mt-1">Fruit & dessert flavors</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="text-3xl mb-2">🔬</div>
                  <h3 className="text-library-teal font-semibold mb-2">TECHNOLOGY</h3>
                  <p className="text-2xl font-bold text-library-brown">Nano-Enhanced</p>
                  <p className="text-sm text-gray-600 mt-1">Water-soluble THC</p>
                </div>
              </div>
            </div>
          </section>

          {/* What Are Nano Bites */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-8 text-center">
                What Are Nano Bites Cannabis Edibles?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Nano Bites represent the cutting edge of cannabis edible technology. These innovative products use nanotechnology to create water-soluble THC particles that your body can absorb much faster than traditional edibles. While standard cannabis edibles can take 1-2 hours (or more) to take effect, Nano Bites typically begin working within 15-30 minutes.
                </p>
                <p>
                  The secret lies in the nano-emulsification process, which breaks down THC molecules into tiny, water-compatible particles roughly 20-40 nanometers in size. To put this in perspective, that's about 1,000 times smaller than the width of a human hair. These microscopic particles bypass the traditional digestive process, allowing for rapid absorption through the mouth and stomach lining directly into the bloodstream.
                </p>
                <p>
                  Beyond just faster onset, Nano Bites offer improved bioavailability, meaning your body can use more of the THC compared to traditional edibles. This increased efficiency means you may need less product to achieve your desired effects, making Nano Bites both economical and predictable. The consistent, reliable experience has made them a favorite among both recreational users and medical patients who need dependable relief.
                </p>
              </div>
            </div>
          </section>

          {/* How Nano Technology Works */}
          <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                The Science Behind Nano Bite Technology
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Traditional Edibles vs Nano Bites
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-library-cream p-6 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-3">Traditional Edibles Process:</h4>
                      <ol className="space-y-2 text-gray-700">
                        <li>1. THC must pass through digestive system</li>
                        <li>2. Liver converts THC to 11-hydroxy-THC</li>
                        <li>3. Process takes 60-120+ minutes</li>
                        <li>4. Effects can be unpredictable</li>
                        <li>5. Absorption rate varies by individual</li>
                      </ol>
                    </div>
                    <div className="bg-library-tan p-6 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-3">Nano Bites Process:</h4>
                      <ol className="space-y-2 text-gray-700">
                        <li>1. Water-soluble particles absorb quickly</li>
                        <li>2. Bypasses first-pass liver metabolism</li>
                        <li>3. Effects felt in 15-30 minutes</li>
                        <li>4. Consistent, predictable experience</li>
                        <li>5. Higher bioavailability (up to 90%)</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Benefits of Nano-Enhanced Cannabis
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">⏱️</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Rapid Onset</h4>
                        <p className="text-gray-700">Feel effects in minutes, not hours. Perfect for those who need quick relief or don't want to wait.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">📊</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Predictable Effects</h4>
                        <p className="text-gray-700">Consistent absorption means you know what to expect every time, reducing the risk of overconsumption.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">💪</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Enhanced Potency</h4>
                        <p className="text-gray-700">Better absorption means more bang for your buck - achieve desired effects with smaller doses.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">⏳</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Shorter Duration</h4>
                        <p className="text-gray-700">Effects typically last 2-4 hours instead of 4-8, giving you more control over your experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Varieties */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Nano Bites Product Line
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4 text-center">🍓</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-3 text-center">Strawberry Burst</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Type:</strong> Sativa-leaning hybrid</p>
                    <p><strong>THC per piece:</strong> 5mg</p>
                    <p><strong>Package size:</strong> 20 pieces (100mg total)</p>
                    <p><strong>Effects:</strong> Energetic, uplifting, creative</p>
                    <p><strong>Best for:</strong> Daytime use, social activities</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4 text-center">🫐</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-3 text-center">Blueberry Dream</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Type:</strong> Indica-leaning hybrid</p>
                    <p><strong>THC per piece:</strong> 5mg</p>
                    <p><strong>Package size:</strong> 20 pieces (100mg total)</p>
                    <p><strong>Effects:</strong> Relaxing, calming, peaceful</p>
                    <p><strong>Best for:</strong> Evening use, stress relief</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4 text-center">🥭</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-3 text-center">Mango Tango</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Type:</strong> Balanced hybrid</p>
                    <p><strong>THC per piece:</strong> 5mg</p>
                    <p><strong>Package size:</strong> 20 pieces (100mg total)</p>
                    <p><strong>Effects:</strong> Balanced, happy, focused</p>
                    <p><strong>Best for:</strong> Anytime use, mood enhancement</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4 text-center">🍉</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-3 text-center">Watermelon Wave</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Type:</strong> Sativa-dominant</p>
                    <p><strong>THC per piece:</strong> 10mg</p>
                    <p><strong>Package size:</strong> 10 pieces (100mg total)</p>
                    <p><strong>Effects:</strong> Euphoric, energetic, social</p>
                    <p><strong>Best for:</strong> Experienced users, parties</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4 text-center">🍇</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-3 text-center">Grape Escape</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Type:</strong> Indica-dominant</p>
                    <p><strong>THC per piece:</strong> 10mg</p>
                    <p><strong>Package size:</strong> 10 pieces (100mg total)</p>
                    <p><strong>Effects:</strong> Deeply relaxing, sedating</p>
                    <p><strong>Best for:</strong> Nighttime, sleep support</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4 text-center">🍑</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-3 text-center">Peach Paradise (CBD)</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Type:</strong> 1:1 THC:CBD ratio</p>
                    <p><strong>THC/CBD per piece:</strong> 5mg/5mg</p>
                    <p><strong>Package size:</strong> 20 pieces</p>
                    <p><strong>Effects:</strong> Mild, therapeutic, clear-headed</p>
                    <p><strong>Best for:</strong> Medical users, beginners</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dosing Guide */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Nano Bites Dosing Guide
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Recommended Dosing by Experience Level
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-library-cream p-6 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">🌱 Beginners (First-time or Occasional Users)</h4>
                      <p className="text-gray-700 mb-2"><strong>Start with:</strong> 2.5-5mg (½ to 1 piece)</p>
                      <p className="text-gray-700">Wait at least 45 minutes before taking more. Remember, you can always take more, but you can't take less!</p>
                    </div>
                    <div className="bg-library-tan p-6 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">🌿 Intermediate (Regular Users)</h4>
                      <p className="text-gray-700 mb-2"><strong>Typical dose:</strong> 10-20mg (2-4 pieces)</p>
                      <p className="text-gray-700">You know your tolerance. Nano Bites may feel stronger than traditional edibles due to better absorption.</p>
                    </div>
                    <div className="bg-library-cream p-6 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">🌳 Experienced (Daily Users)</h4>
                      <p className="text-gray-700 mb-2"><strong>Common dose:</strong> 20-50mg+ (4-10+ pieces)</p>
                      <p className="text-gray-700">High tolerance users appreciate the fast onset and ability to redose as needed.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Dosing Tips & Best Practices
                  </h3>
                  <div className="bg-white border-2 border-library-gold p-6 rounded-lg">
                    <h4 className="font-semibold text-library-brown mb-4">Golden Rules for Nano Bites:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>✓ <strong>Start Low:</strong> Even experienced users should start with less due to increased bioavailability</li>
                      <li>✓ <strong>Wait Time:</strong> Effects begin in 15-30 minutes, peak at 45-60 minutes</li>
                      <li>✓ <strong>Empty Stomach:</strong> Works faster on empty stomach but may be more intense</li>
                      <li>✓ <strong>With Food:</strong> Slightly slower onset but smoother, longer-lasting effects</li>
                      <li>✓ <strong>Stay Hydrated:</strong> Drink water to help absorption and prevent dry mouth</li>
                      <li>✓ <strong>Don't Drive:</strong> Never operate vehicles or machinery after consuming</li>
                      <li>✓ <strong>Safe Storage:</strong> Keep away from children and pets - they look like candy!</li>
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      <strong>Warning:</strong> Nano Bites work faster than regular edibles but can still be intense. If you consume too much, remember: stay calm, hydrate, rest, and the effects will pass.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Medical Benefits */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Medical Applications of Nano Bites
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                <p>
                  For medical cannabis patients, Nano Bites offer significant advantages over traditional edibles. The fast onset time means quicker relief from symptoms, while the improved bioavailability ensures patients get the most from their medicine. The precise dosing and predictable effects make it easier for patients to find and maintain their optimal therapeutic dose.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-library-gold mb-4">Conditions That May Benefit:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Chronic pain and inflammation</li>
                    <li>• Anxiety and PTSD</li>
                    <li>• Nausea and appetite loss</li>
                    <li>• Insomnia and sleep disorders</li>
                    <li>• Epilepsy and seizure disorders</li>
                    <li>• Inflammatory bowel diseases</li>
                    <li>• Migraine headaches</li>
                    <li>• Muscle spasms and spasticity</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-library-gold mb-4">Why Patients Choose Nano Bites:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Faster relief when symptoms strike</li>
                    <li>• More efficient use of medication</li>
                    <li>• Easier titration to find optimal dose</li>
                    <li>• Discreet and convenient dosing</li>
                    <li>• No smoking or vaping required</li>
                    <li>• Consistent, reliable effects</li>
                    <li>• Shorter duration for daytime use</li>
                    <li>• Less risk of overconsumption</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-6 bg-library-tan rounded-lg">
                <p className="text-gray-700 text-center">
                  <strong>Medical Disclaimer:</strong> While many patients report benefits from cannabis products like Nano Bites, always consult with your healthcare provider before using cannabis for medical purposes. Individual results may vary.
                </p>
              </div>
            </div>
          </section>

          {/* Customer Reviews */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                What Customers Say About Nano Bites
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Game changer! As someone with chronic pain, waiting 2 hours for relief was torture. Nano Bites work in 20 minutes for me. Life saver!"
                  </p>
                  <p className="text-sm text-gray-500">- Patricia H., Medical Patient</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Finally, edibles that don't take forever! Perfect for social events when you want to feel effects quickly. Mango Tango is my favorite."
                  </p>
                  <p className="text-sm text-gray-500">- Derek T., West Orange</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="ml-2 text-gray-600">4.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Love the fast onset but be careful - these hit harder than regular gummies! Start with half if you're new. Great product though!"
                  </p>
                  <p className="text-sm text-gray-500">- Jennifer M., Montclair</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "The 1:1 CBD Peach Paradise is perfect for my anxiety. Fast relief without getting too high. The Library always has them in stock!"
                  </p>
                  <p className="text-sm text-gray-500">- Robert L., Livingston</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Frequently Asked Questions About Nano Bites
              </h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    How fast do Nano Bites really work?
                  </h3>
                  <p className="text-gray-700">
                    Most users feel initial effects within 15-30 minutes, with peak effects occurring around 45-60 minutes. This is significantly faster than traditional edibles which can take 1-2 hours or more to begin working.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Are Nano Bites stronger than regular edibles?
                  </h3>
                  <p className="text-gray-700">
                    Nano Bites aren't necessarily stronger in terms of THC content, but they are more efficiently absorbed by your body. This means 10mg of nano-enhanced THC may feel stronger than 10mg in a traditional edible due to higher bioavailability.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    How long do the effects of Nano Bites last?
                  </h3>
                  <p className="text-gray-700">
                    Effects typically last 2-4 hours, which is shorter than traditional edibles (4-8 hours). This shorter duration gives users more control and makes Nano Bites suitable for daytime use when you don't want to be affected all day.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Can I cut Nano Bites in half for smaller doses?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Nano Bites can be cut or broken into smaller pieces for micro-dosing. This is especially useful for beginners who want to start with 2.5mg instead of a full 5mg piece.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Do Nano Bites taste like cannabis?
                  </h3>
                  <p className="text-gray-700">
                    Nano Bites are formulated with natural fruit flavors that mask most of the cannabis taste. While sensitive palates might detect a slight aftertaste, most users find them indistinguishable from regular gummies.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Are Nano Bites safe for daily use?
                  </h3>
                  <p className="text-gray-700">
                    Many medical patients use Nano Bites daily for symptom management. However, regular use can lead to tolerance. It's best to consult with a healthcare provider for long-term use, especially for medical purposes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What's the difference between nano and water-soluble?
                  </h3>
                  <p className="text-gray-700">
                    Nano-enhanced products use nanotechnology to create water-soluble THC. The terms are often used interchangeably, but "nano" specifically refers to the tiny particle size (nanometers) that makes the THC water-compatible.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Where can I buy Nano Bites in New Jersey?
                  </h3>
                  <p className="text-gray-700">
                    Nano Bites are available at The Library of New Jersey in West Orange, NJ. Check our online menu for current flavors and availability. We offer convenient online ordering with same-day pickup for adults 21+ and medical patients.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-library-gold to-library-teal">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Experience the Future of Edibles with Nano Bites
              </h2>
              <p className="text-xl text-white mb-8 opacity-90">
                Fast-acting, precisely-dosed, and delicious. Try Nano Bites today at The Library of New Jersey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="bg-white text-library-teal px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                  Shop Nano Bites Now
                </Link>
                <Link href="/education" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-library-teal transition-colors inline-block">
                  Learn About Edibles
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

export default NanoBitesProduct