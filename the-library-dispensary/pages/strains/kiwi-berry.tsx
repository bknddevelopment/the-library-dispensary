import { NextPage } from 'next'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageTransition from "../../components/PageTransition"
import FloatingParticles from "../../components/FloatingParticles"
import FloatingIntakeButton from "../../components/FloatingIntakeButton"
import Link from 'next/link'

const KiwiBerryStrain: NextPage = () => {
  return (
    <>
      <SEO
        title="Kiwi Berry Strain Review | Effects, THC Content & More | The Library"
        description="Discover Kiwi Berry strain - a tropical hybrid with fruity flavors. Learn about effects, THC levels, growing info & user reviews. Available at The Library of New Jersey West Orange NJ."
        keywords="kiwi berry strain, kiwi berry weed, kiwi berry cannabis strain, kiwi berry strain effects, kiwi berry strain thc, kiwi berry strain review, kiwi berry hybrid strain, kiwi berry marijuana"
        canonicalUrl="https://thelibrarynj.com/strains/kiwi-berry/"
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
                  Kiwi Berry Strain
                </h1>
                <p className="text-xl md:text-2xl text-library-teal max-w-3xl mx-auto mb-8">
                  A tropical paradise in cannabis form - sweet, fruity, and refreshingly uplifting hybrid strain
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/products" className="bg-library-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Shop Kiwi Berry
                  </Link>
                  <Link href="#strain-info" className="bg-library-teal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block">
                    Strain Details
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
                  <p className="text-sm text-gray-600 mt-1">60% Sativa / 40% Indica</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-library-teal font-semibold mb-2">THC LEVEL</h3>
                  <p className="text-2xl font-bold text-library-brown">18-23%</p>
                  <p className="text-sm text-gray-600 mt-1">Moderate-High</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-library-teal font-semibold mb-2">PRIMARY EFFECT</h3>
                  <p className="text-2xl font-bold text-library-brown">Energetic</p>
                  <p className="text-sm text-gray-600 mt-1">Uplifting & Creative</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <h3 className="text-library-teal font-semibold mb-2">FLAVOR</h3>
                  <p className="text-2xl font-bold text-library-brown">Tropical</p>
                  <p className="text-sm text-gray-600 mt-1">Kiwi, Berry, Citrus</p>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Description */}
          <section id="strain-info" className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-8 text-center">
                Everything About Kiwi Berry Cannabis Strain
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Kiwi Berry is an exotic hybrid cannabis strain that transports users to a tropical paradise with every puff. This delightful cultivar combines the best of both sativa and indica genetics, offering a unique experience that's both energizing and relaxing. With its distinctive fruity flavor profile and balanced effects, Kiwi Berry has quickly become a favorite among cannabis connoisseurs seeking something special.
                </p>
                <p>
                  The genetic lineage of Kiwi Berry strain traces back to carefully selected parent strains that contribute to its exceptional characteristics. While the exact parentage is sometimes debated among growers, most agree that this strain inherits its tropical fruit flavors from phenotypes selected for their terpene-rich profiles. The result is a 60/40 sativa-dominant hybrid that delivers consistent, enjoyable effects.
                </p>
                <p>
                  Kiwi Berry typically features THC levels ranging from 18% to 23%, making it suitable for both intermediate and experienced cannabis users. This moderate to high potency provides substantial effects without being overwhelming, allowing users to maintain functionality while enjoying the strain's benefits. The CBD content is typically low, usually under 1%, making this strain primarily sought after for its psychoactive properties.
                </p>
                <p>
                  Visually, Kiwi Berry buds are a feast for the eyes. The flowers display vibrant green hues with occasional purple undertones that develop during cooler growing conditions. Bright orange pistils weave throughout the dense, compact nugs, while a generous coating of milky white trichomes gives the buds a frosted appearance that hints at their potency and rich terpene content.
                </p>
              </div>
            </div>
          </section>

          {/* Effects and Benefits */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Kiwi Berry Strain Effects & Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Recreational Effects
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">⚡</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Energy Boost</h4>
                        <p className="text-gray-700">Kiwi Berry provides an energetic lift perfect for daytime activities and social events.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">😄</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Mood Enhancement</h4>
                        <p className="text-gray-700">Users experience improved mood and a positive outlook, making everything more enjoyable.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">🎯</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Focus</h4>
                        <p className="text-gray-700">Many users report enhanced focus and concentration, great for creative projects or tasks.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">🌈</span>
                      <div>
                        <h4 className="font-semibold text-library-brown">Sensory Enhancement</h4>
                        <p className="text-gray-700">Colors may seem brighter and music more enjoyable with Kiwi Berry's uplifting effects.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Therapeutic Applications
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-library-cream p-4 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">Fatigue Relief</h4>
                      <p className="text-gray-700">The energizing properties of Kiwi Berry make it excellent for combating fatigue and lethargy.</p>
                    </div>
                    <div className="bg-library-cream p-4 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">Stress Management</h4>
                      <p className="text-gray-700">The uplifting effects help users manage daily stress without feeling sedated or sluggish.</p>
                    </div>
                    <div className="bg-library-cream p-4 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">Depression Support</h4>
                      <p className="text-gray-700">Many medical patients find Kiwi Berry helpful for temporary relief from depressive symptoms.</p>
                    </div>
                    <div className="bg-library-cream p-4 rounded-lg">
                      <h4 className="font-semibold text-library-brown mb-2">ADHD/ADD</h4>
                      <p className="text-gray-700">Some users report that the focusing effects help with attention-related challenges.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 bg-library-tan rounded-lg">
                <p className="text-center text-gray-700">
                  <strong>Important:</strong> While many users report these benefits, cannabis affects everyone differently. Always start with a low dose and consult with healthcare providers for medical use.
                </p>
              </div>
            </div>
          </section>

          {/* Flavor and Aroma Profile */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Kiwi Berry Flavor & Terpene Profile
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
                <h3 className="text-2xl font-semibold text-library-teal mb-6">Taste Experience</h3>
                <p className="text-gray-700 mb-4">
                  Kiwi Berry strain delivers an explosion of tropical flavors that dance on your palate. The initial inhale brings forward the namesake kiwi flavor - tangy, sweet, and refreshingly tropical. This is quickly followed by notes of mixed berries, including strawberry and blueberry undertones that add depth to the flavor profile.
                </p>
                <p className="text-gray-700 mb-4">
                  On the exhale, users often detect subtle citrus notes reminiscent of lime or lemon zest, which complement the fruit-forward profile perfectly. The smoke is surprisingly smooth for such a flavorful strain, with a sweet aftertaste that lingers pleasantly. When vaporized at lower temperatures, the tropical fruit flavors become even more pronounced.
                </p>
                <p className="text-gray-700">
                  The aroma of Kiwi Berry is equally captivating. Breaking open the buds releases a burst of tropical fruit scents mixed with subtle earthy undertones. The smell fills the room with a pleasant, fruity fragrance that's neither overwhelming nor skunky, making it a great choice for those who prefer more discreet strains.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">🥝</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-2">Terpinolene</h3>
                  <p className="text-gray-700 mb-2">Dominant Terpene</p>
                  <p className="text-sm text-gray-600">Provides fruity, tropical notes and contributes to uplifting effects. Also found in nutmeg and cumin.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">🍓</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-2">Caryophyllene</h3>
                  <p className="text-gray-700 mb-2">Secondary Terpene</p>
                  <p className="text-sm text-gray-600">Adds spicy, peppery notes and potential anti-inflammatory benefits. The only terpene that acts as a cannabinoid.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">🍊</div>
                  <h3 className="text-xl font-semibold text-library-gold mb-2">Limonene</h3>
                  <p className="text-gray-700 mb-2">Supporting Terpene</p>
                  <p className="text-sm text-gray-600">Contributes citrus notes and mood-lifting properties. Known for stress relief and antibacterial effects.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Growing Information */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Growing Kiwi Berry Cannabis Strain
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Cultivation Characteristics
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown">Growing Difficulty</h4>
                      <p className="text-gray-700">Easy to Moderate - Great for beginners with basic knowledge</p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown">Flowering Period</h4>
                      <p className="text-gray-700">8-9 weeks indoors, late September to early October outdoors</p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown">Expected Yield</h4>
                      <p className="text-gray-700">Indoor: 12-16 oz/m² | Outdoor: 16-20 oz/plant</p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown">Plant Height</h4>
                      <p className="text-gray-700">Medium to tall, 5-7 feet indoors, up to 10 feet outdoors</p>
                    </div>
                    <div className="border-l-4 border-library-gold pl-4">
                      <h4 className="font-semibold text-library-brown">Preferred Climate</h4>
                      <p className="text-gray-700">Warm, sunny Mediterranean-like climate with low humidity</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-library-teal mb-6">
                    Grower's Tips for Kiwi Berry
                  </h3>
                  <div className="bg-library-cream p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li>• <strong>Light Requirements:</strong> Thrives under intense lighting, 600W HPS or equivalent LED</li>
                      <li>• <strong>Nutrition:</strong> Heavy feeder during flowering, benefits from phosphorus boost</li>
                      <li>• <strong>Training Methods:</strong> Responds well to topping, FIMing, and SCROG techniques</li>
                      <li>• <strong>Humidity Control:</strong> Keep below 50% during flowering to prevent mold</li>
                      <li>• <strong>Temperature Range:</strong> Optimal 70-85°F (21-29°C) during day</li>
                      <li>• <strong>pH Levels:</strong> Maintain 6.0-6.5 in soil, 5.5-6.0 in hydro</li>
                      <li>• <strong>Harvest Window:</strong> Watch for 60-70% cloudy trichomes for peak effects</li>
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-library-tan rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Legal Note:</strong> Home cultivation of cannabis is not currently permitted for recreational users in New Jersey. Medical patients should check current regulations. This information is provided for educational purposes only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                How Kiwi Berry Compares to Similar Strains
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg">
                  <thead className="bg-library-teal text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Strain</th>
                      <th className="px-6 py-4 text-center">Type</th>
                      <th className="px-6 py-4 text-center">THC %</th>
                      <th className="px-6 py-4 text-center">Effects</th>
                      <th className="px-6 py-4 text-center">Flavor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-library-cream">
                      <td className="px-6 py-4 font-semibold">Kiwi Berry</td>
                      <td className="px-6 py-4 text-center">60/40 Sativa</td>
                      <td className="px-6 py-4 text-center">18-23%</td>
                      <td className="px-6 py-4 text-center">Energetic, Creative</td>
                      <td className="px-6 py-4 text-center">Tropical, Berry</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4">Strawberry Cough</td>
                      <td className="px-6 py-4 text-center">80/20 Sativa</td>
                      <td className="px-6 py-4 text-center">15-20%</td>
                      <td className="px-6 py-4 text-center">Uplifting, Social</td>
                      <td className="px-6 py-4 text-center">Strawberry, Sweet</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4">Pineapple Express</td>
                      <td className="px-6 py-4 text-center">60/40 Sativa</td>
                      <td className="px-6 py-4 text-center">17-25%</td>
                      <td className="px-6 py-4 text-center">Energetic, Happy</td>
                      <td className="px-6 py-4 text-center">Pineapple, Tropical</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4">Tangie</td>
                      <td className="px-6 py-4 text-center">70/30 Sativa</td>
                      <td className="px-6 py-4 text-center">19-22%</td>
                      <td className="px-6 py-4 text-center">Euphoric, Focused</td>
                      <td className="px-6 py-4 text-center">Citrus, Orange</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 p-6 bg-white rounded-lg">
                <p className="text-gray-700">
                  <strong>Why Choose Kiwi Berry:</strong> While similar strains offer fruity flavors and energetic effects, Kiwi Berry stands out for its unique tropical kiwi taste combined with berry notes. Its balanced 60/40 ratio provides energy without anxiety, making it more versatile than higher sativa strains.
                </p>
              </div>
            </div>
          </section>

          {/* User Reviews */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Kiwi Berry Strain Reviews from Our Customers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Best daytime strain I've found! Kiwi Berry gives me energy and focus without any anxiety. The tropical flavor is incredible - actually tastes like kiwi fruit!"
                  </p>
                  <p className="text-sm text-gray-500">- Amanda K., South Orange</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Perfect for my morning routine. Helps with my chronic fatigue and keeps me productive all day. Love shopping at The Library - they always have it fresh!"
                  </p>
                  <p className="text-sm text-gray-500">- Marcus T., Newark</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="ml-2 text-gray-600">4.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "Great strain for social events. Makes me talkative and happy. Only downside is it makes me a bit too energetic for evening use."
                  </p>
                  <p className="text-sm text-gray-500">- Rachel D., Millburn</p>
                </div>
                <div className="bg-library-cream p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    "As an artist, Kiwi Berry is my creative fuel. Colors seem brighter, ideas flow freely, and I can work for hours. Highly recommend!"
                  </p>
                  <p className="text-sm text-gray-500">- Tony M., Montclair</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-library-cream">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-library-brown mb-12 text-center">
                Frequently Asked Questions About Kiwi Berry Strain
              </h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Is Kiwi Berry strain good for beginners?
                  </h3>
                  <p className="text-gray-700">
                    Yes! With moderate THC levels (18-23%) and balanced effects, Kiwi Berry is suitable for beginners who start with small doses. Its energetic yet manageable high makes it less likely to cause anxiety compared to stronger sativa strains.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What's the best time of day to use Kiwi Berry?
                  </h3>
                  <p className="text-gray-700">
                    Kiwi Berry is ideal for daytime use, particularly morning and afternoon. Its energizing effects make it perfect for wake-and-bake sessions, productive work days, or social activities. Most users avoid it in the evening as it may interfere with sleep.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Does Kiwi Berry actually taste like kiwi fruit?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Many users are surprised by how accurately Kiwi Berry captures the taste of actual kiwi fruit. The strain offers tangy, tropical notes with sweet berry undertones that create an authentic fruit flavor experience.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    What are the main terpenes in Kiwi Berry?
                  </h3>
                  <p className="text-gray-700">
                    Kiwi Berry's primary terpene is terpinolene, which provides its tropical, fruity flavor. It also contains caryophyllene for spicy notes and potential anti-inflammatory benefits, plus limonene for citrus flavors and mood enhancement.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    How long do Kiwi Berry's effects last?
                  </h3>
                  <p className="text-gray-700">
                    Most users report Kiwi Berry's effects lasting 2-4 hours, depending on tolerance and dosage. The energetic peak typically occurs within 30 minutes and gradually transitions to a mellow, focused state that tapers off gently.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Is Kiwi Berry strain indica or sativa dominant?
                  </h3>
                  <p className="text-gray-700">
                    Kiwi Berry is sativa-dominant with a 60% sativa and 40% indica ratio. This makes it energizing and uplifting while still providing some body relaxation from its indica genetics, creating a well-balanced experience.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Can Kiwi Berry help with focus and productivity?
                  </h3>
                  <p className="text-gray-700">
                    Many users report that Kiwi Berry enhances focus and productivity, making it popular for creative work, studying, or completing tasks. The strain provides mental clarity without the raciness sometimes associated with pure sativas.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-library-brown mb-3">
                    Where can I find Kiwi Berry strain in New Jersey?
                  </h3>
                  <p className="text-gray-700">
                    Kiwi Berry strain is available at The Library of New Jersey in West Orange, NJ. Check our online menu for current availability and pricing. We offer convenient online ordering with same-day pickup for customers 21+ and medical patients.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-library-gold to-library-teal">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Try Kiwi Berry Strain Today at The Library
              </h2>
              <p className="text-xl text-white mb-8 opacity-90">
                Experience the tropical paradise of Kiwi Berry. Fresh batches available now at West Orange's premier dispensary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="bg-white text-library-teal px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                  Order Kiwi Berry Online
                </Link>
                <Link href="/strains/shady-lady" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-library-teal transition-colors inline-block">
                  Explore More Strains
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

export default KiwiBerryStrain