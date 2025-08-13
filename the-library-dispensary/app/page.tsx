import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FirstVisit from "@/components/FirstVisit";
import Location from "@/components/Location";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FirstVisit />
        <Location />
        <Education />
      </main>
      <Footer />
    </>
  );
}