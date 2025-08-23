import About from "@/components/About";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import Hero from "@/components/Hero";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import Statistika from "@/components/Statistika";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Statistika />
      <Cardlist />
      <BackgroundImage />
      <Testimonials />

    </div>
  );
}