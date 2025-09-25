import { NextPage } from 'next'
import SEO from '../components/SEO'
import Header from "../components/Header"
import FirstVisit from "../components/FirstVisit"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"

const FirstVisitPage: NextPage = () => {
  return (
    <>
      <SEO
        title="First Visit - The Library of New Jersey"
        description="Everything you need to know for your first visit to The Library of New Jersey."
      />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          <FirstVisit />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default FirstVisitPage