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
import { PhoneIcon } from "lucide-react";
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
            delay: 6000,
          }),
          Fade(),
        ]}
      >
        <div className="absolute top-0 left-0 w-full h-full hero-overlay z-[1]" />
        <CarouselContent>
          <CarouselItem>
            <Image
              src={Hero1}
              alt="Trubači Kobre Velika Plana - profesionalni nastup"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero2}
              alt="Trubači za svadbe Velika Plana"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero3}
              alt="Najbolji trubači za proslave u Velikoj Plani"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      
      <div className="relative flex flex-col gap-8 w-full items-center justify-center text-white z-[1] text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-white text-4xl md:text-7xl font-bold mb-4 leading-tight">
            TRUBAČI <span className="gold-accent">KOBRE</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-4xl font-light text-yellow-200 mb-2">
            VELIKA PLANA
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-light">
            Tradicija, kvalitet i strast za muziku od 2000. godine
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-black/30 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-3xl border border-yellow-400/30"
        >
          <p className="text-lg md:text-2xl font-light leading-relaxed">
            Profesionalni trubački orkestar za <strong>svadbe, slave i proslave</strong> u Velikoj Plani i celoj Srbiji
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col md:flex-row gap-4 mt-4"
        >
          <a href="tel:+381641234567">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <PhoneIcon className="w-5 h-5" />
              Pozovite nas odmah
            </motion.button>
          </a>
          <Link href="/kontakt">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Pošaljite upit
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;