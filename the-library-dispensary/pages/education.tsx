import { NextPage } from 'next'
import SEO from '../components/SEO'
import Header from "../components/Header"
import EducationFlipbookHTML from "../components/EducationFlipbookHTML"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"

const EducationPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Cannabis Education - The Library Dispensary"
        description="Learn about cannabis products, effects, and responsible use at The Library Dispensary."
      />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          <EducationFlipbookHTML />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default EducationPage