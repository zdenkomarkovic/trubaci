"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TestimonialData, testimonialData } from "@/constants/index";
import Autoplay from "embla-carousel-autoplay";

const Testemonials = () => {
  return (
    <div className="py-10 container px-4 mx-auto relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-200 rounded-full opacity-10 float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-yellow-200 rounded-full opacity-10 float-animation" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-primary mb-4">
          💬 Šta kažu naši klijenti 💬
        </h2>
        <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-lg font-bold">
          ⭐ Zadovoljni klijenti iz cele Srbije ⭐
        </div>
      </div>

      <Carousel
        className="w-full overflow-hidden relative z-10"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-4">
          {testimonialData.map((service, i) => (
            <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-5 h-full flex flex-col">
                <TestemonialCard service={service}></TestemonialCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testemonials;

const TestemonialCard = ({ service }: { service: TestimonialData }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      className="h-full"
    >
      <Card className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-6 rounded-3xl text-white h-full relative overflow-hidden group">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
        
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center py-2 relative">
            ⭐ {service.title} ⭐
          </CardTitle>
        </CardHeader>

        <CardContent className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <p className="text-lg leading-relaxed italic">
              "{service.description}"
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center pt-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-300 text-xl">⭐</span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};