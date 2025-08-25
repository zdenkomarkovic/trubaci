"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Image from "@/node_modules/next/image";

const images = [
  "/trubaci (6).jpg",
  "/trubaci (7).jpg",
  "/trubaci (12).jpg",
  "/trubaci (8).jpg",
  "/trubaci (9).jpg",
  "/trubaci (10).jpg",
  "/trubaci (11).jpg",
  "/trubaci (13).jpg",
  "/trubaci (14).jpg",
  "/trubaci (16).jpg",
  "/trubaci (17).jpg",
  "/trubaci (18).jpg",
  "/trubaci (1).jpg",
  "/trubaci (2).jpg",
  "/trubaci (3).jpg",
  "/trubaci (4).jpg",
  "/trubaci (5).jpg",
];

const Slider = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <Carousel
          className="w-full"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              stopOnInteraction: false,
              stopOnFocusIn: false,
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="flex gap-4">
            {images.map((image, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className=" h-full">
                  <Image
                    src={image}
                    width={1000}
                    height={1000}
                    alt="trubaci"
                    className="object-cover aspect-square rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
