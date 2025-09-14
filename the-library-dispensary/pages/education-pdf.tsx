import { NextPage } from 'next'
import SEO from '../components/SEO'
import Header from "../components/Header"
import PDFFlipbook from "../components/PDFFlipbook"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import FloatingParticles from "../components/FloatingParticles"
import FloatingIntakeButton from "../components/FloatingIntakeButton"

const EducationPDFPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Education Resources - The Library Dispensary"
        description="Download cannabis education resources and guides from The Library Dispensary."
      />
      <FloatingParticles />
      <FloatingIntakeButton />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          <PDFFlipbook
            pdfUrl="/pdfs/education-guide.pdf"
            title="Cannabis Education Guide"
            description="Your comprehensive guide to understanding cannabis, from cannabinoids to consumption methods"
            width={500}
            height={700}
            showDownload={true}
          />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}

export default EducationPDFPage