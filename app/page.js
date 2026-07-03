import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import RacketShowcase from "@/components/RacketShowcase";
import HorizontalGallery from "@/components/HorizontalGallery";
import EliteMask from "@/components/EliteMask";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import Facility from "@/components/Facility";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <Manifesto />
      <RacketShowcase />
      <HorizontalGallery />
      <EliteMask />
      <Stats />
      <Programs />
      <Facility />
      <Footer />
    </main>
  );
}
