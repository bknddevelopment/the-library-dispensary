import { NextPage } from 'next'
import SEO from '../components/SEO'
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"

const HomePage: NextPage = () => {
  return (
    <>
      <SEO
        title="The Library Dispensary - West Orange's Premier Cannabis Destination"
        description="West Orange's premier cannabis dispensary. Discover curated selections, expert guidance, and a refined experience."
      />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          <Hero />

        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default HomePage