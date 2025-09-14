import Header from "@/components/Header";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";
import FloatingIntakeButton from "@/components/FloatingIntakeButton";

export default function LocationPage() {
  return (
    <>
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
  );
}