"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

import Hero1 from "../public/hero1.jpg";
import Hero2 from "../public/hero2.jpg";
import Hero3 from "../public/hero3.jpg";

import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import Link from "next/link";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <Carousel
        className="absolute top-0 left-0 w-full h-[100dvh] z-[0]"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 5000,
          }),
          Fade(),
        ]}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" />
        <CarouselContent>
          <CarouselItem>
            <Image
              src={Hero1}
              alt="Moderna dnevna soba"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero2}
              alt="Elegantna dnevna soba"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero3}
              alt="Luksuzni plakar"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="relative flex flex-col gap-6 w-full items-center justify-center text-white z-[1] text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 blur-lg opacity-30 animate-pulse"></div>
          <h1 className="relative text-white md:text-[4.5rem] text-3xl font-black max-w-[900px] leading-[1.1] px-4 drop-shadow-2xl">
            <span className="gradient-text">TRUBAČI KOBRE</span>
            <br />
            <span className="text-orange-400 text-2xl md:text-3xl font-medium">VELIKA PLANA</span>
          </h1>
        </div>
        <div className="glass-effect rounded-2xl p-6 max-w-[800px] mx-4">
          <h2 className="text-white font-medium md:text-[1.8rem] text-xl leading-relaxed">
            🎺 Najbolji trubači za svadbe, slave i proslave 🎺
            <br />
            <span className="text-orange-300">✨ Više od 20 godina tradicije ✨</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 md:flex-row mt-4">
          <Link href="/kontakt">
            <motion.button
              whileHover={{ 
                translateY: "-8px",
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 102, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-lg shadow-2xl pulse-glow"
            >
              🎵 Rezervišite nastup
              <ArrowRightIcon className="w-[20px]" />
            </motion.button>
          </Link>
          <a href="tel:+381641234567">
            <motion.button
              whileHover={{ 
                translateY: "-8px",
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect border-white border-2 rounded-full px-6 md:px-10 md:py-4 py-3 font-bold text-lg shadow-xl"
            >
              📞 Pozovite nas odmah
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
