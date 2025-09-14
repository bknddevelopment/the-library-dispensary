import Header from "@/components/Header";
import EducationFlipbookHTML from "@/components/EducationFlipbookHTML";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";
import FloatingIntakeButton from "@/components/FloatingIntakeButton";

export default function EducationPage() {
  return (
    <>
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
  );
}