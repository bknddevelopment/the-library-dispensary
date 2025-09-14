import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";
import FloatingIntakeButton from "@/components/FloatingIntakeButton";

export default function ServicesPage() {
  return (
    <>
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
  );
}