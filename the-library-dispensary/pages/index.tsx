import { NextPage } from 'next'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import Header from "../components/Header"
import Hero from "../components/Hero"
import HomepageFAQ from "../components/HomepageFAQ"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"

const HomePage: NextPage = () => {
  return (
    <>
      <SEO
        title="West Orange Dispensary | Cannabis Near Me | The Library NJ"
        description="The Library: West Orange's #1 cannabis dispensary. Premium flower, edibles, vapes in Essex County NJ. Order online, same-day pickup. Open daily 1-3 Washington St."
        keywords="dispensary west orange nj, cannabis near me, marijuana west orange, weed dispensary essex county, cannabis store west orange new jersey, recreational marijuana nj, The Library Dispensary"
        canonicalUrl="https://thelibrarynj.com/"
      />
      <StructuredData pageType="home" />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          <Hero />
          <HomepageFAQ />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default HomePage