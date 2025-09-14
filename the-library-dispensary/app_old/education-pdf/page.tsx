import Header from "@/components/Header";
import PDFFlipbook from "@/components/PDFFlipbook";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";
import FloatingIntakeButton from "@/components/FloatingIntakeButton";

export default function EducationPDFPage() {
  return (
    <>
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
  );
}