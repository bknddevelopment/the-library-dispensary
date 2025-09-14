import Header from "@/components/Header";
import ArtCollection from "@/components/ArtCollection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";
import FloatingIntakeButton from "@/components/FloatingIntakeButton";

export default function ArtCollectionPage() {
  return (
    <>
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
  );
}