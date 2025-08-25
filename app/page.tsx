import About from "@/components/About";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import Cards1 from "@/components/Cards1";
import Hero from "@/components/Hero";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import Statistika from "@/components/Statistika";
import Testimonials from "@/components/Testimonials";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Cards1 />
      <PozoviteNasOdmah />
      <VideoCard video={"/trubaci2.mp4"} />
      <Statistika />
      <BackgroundImage />
      <Cardlist />

      <Testimonials />
      <VideoCard video={"/trubaci.mp4"} />
    </div>
  );
}
