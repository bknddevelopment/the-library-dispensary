import Header from "@/components/Header";
import FirstVisit from "@/components/FirstVisit";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";
import FloatingIntakeButton from "@/components/FloatingIntakeButton";

export default function FirstVisitPage() {
  return (
    <>
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
  );
}