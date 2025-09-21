import { NextPage } from 'next'
import SEO from '../components/SEO'
import Header from "../components/Header"
import Location from "../components/Location"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"

const LocationPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Location - The Library Dispensary"
        description="Find The Library Dispensary in West Orange - directions, hours, and contact information."
      />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          <Location />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default LocationPage