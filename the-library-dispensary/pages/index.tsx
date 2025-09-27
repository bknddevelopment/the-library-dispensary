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
        title="The Library of New Jersey | West Orange Cannabis Dispensary"
        description="West Orange's premier cannabis dispensary offering premium flower, edibles, vapes & concentrates. Expert budtenders, online ordering, convenient pickup. Located at 1-3 Washington St."
        keywords="cannabis dispensary west orange nj, marijuana dispensary near me, weed store essex county, recreational cannabis new jersey, The Library dispensary"
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