import { NextPage } from 'next'
import GoogleOptimizedSEO from '../components/GoogleOptimizedSEO'
import GoogleOptimizedStructuredData from '../components/GoogleOptimizedStructuredData'
import Header from "../components/Header"
import GoogleOptimizedHero from "../components/GoogleOptimizedHero"
import HomepageFAQ from "../components/HomepageFAQ"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"

const HomePage: NextPage = () => {
  return (
    <>
      <GoogleOptimizedSEO
        title="West Orange Cannabis Information | The Library NJ"
        description="The Library: West Orange's cannabis information and education center. Find product details, store hours, and resources. Located at 1-3 Washington St."
        keywords="cannabis information west orange nj, cannabis education center, marijuana resources essex county, cannabis platform new jersey, The Library information center"
        canonicalUrl="https://thelibrarynj.com/"
        pageType="home"
      />
      <GoogleOptimizedStructuredData pageType="home" />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          <GoogleOptimizedHero />
          <HomepageFAQ />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default HomePage