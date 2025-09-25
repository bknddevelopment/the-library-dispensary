import { NextPage } from 'next'
import SEO from '../components/SEO'
import Header from "../components/Header"
import Services from "../components/Services"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"

const ServicesPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Services - The Library of New Jersey"
        description="Discover our premium cannabis services, curated selections, and expert guidance at The Library of New Jersey."
      />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          <Services />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default ServicesPage