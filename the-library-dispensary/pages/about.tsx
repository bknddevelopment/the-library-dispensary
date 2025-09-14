import { NextPage } from 'next'
import SEO from '../components/SEO'
import Header from "../components/Header"
import About from "../components/About"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"

const AboutPage: NextPage = () => {
  return (
    <>
      <SEO
        title="About Us - The Library Dispensary"
        description="Learn about The Library Dispensary's story, mission, and commitment to Cape Coral's cannabis community."
      />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          <About />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default AboutPage