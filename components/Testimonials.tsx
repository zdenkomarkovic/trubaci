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
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TestimonialData, testimonialData } from "@/constants/index";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Šta kažu naši <span className="gold-accent">klijenti</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600">
            Zadovoljni klijenti iz cele Srbije
          </p>
        </motion.div>

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
            {testimonialData.map((testimonial, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <TestimonialCard testimonial={testimonial} />
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

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialData }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full elegant-shadow hover:shadow-2xl transition-shadow duration-300 bg-white">
        <CardHeader className="bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardTitle className="text-lg md:text-xl font-semibold text-gray-900 text-center">
            {testimonial.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
            "{testimonial.description}"
          </blockquote>
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-xl">★</span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Testimonials;