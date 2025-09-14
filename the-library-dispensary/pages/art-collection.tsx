import { NextPage } from 'next'
import SEO from '../components/SEO'
import Header from "../components/Header"
import ArtCollection from "../components/ArtCollection"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"

const ArtCollectionPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Art Collection - The Library Dispensary"
        description="Explore the unique art collection at The Library Dispensary."
      />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          <ArtCollection />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default ArtCollectionPage