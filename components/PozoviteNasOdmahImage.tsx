"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import Image from "@/node_modules/next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

const PozoviteNasOdmah = () => {
  return (
    <div className="bg-foreground text-muted pt-10">
      <div className="container px-2 md:px-4 mx-auto font-bold flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20">
        <Image
          src={"/slep puric.jpg"}
          width={250}
          height={200}
          alt="puric slep"
          className="rounded-t-xl"
        />
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl text-primary py-3">
              <FaRegCircleCheck className="mb-4 text-6xl bg-muted-foreground rounded-full mx-auto md:mx-0" />
              Potrebni su vam trubači za vašu proslavu?
            </h2>
            <p className="text-2xl md:text-3xl">Trubači Kobre Velika Plana</p>
          </div>
          <a href="tel:+381641234567">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className=" mx-auto md:mx-0 text-nowrap flex gap-3 text-2xl md:text-3xl items-center text-primary bg-muted rounded-lg px-4 md:px-8 md:py-3 py-2"
            >
              <PhoneIcon /> Pozovite nas
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
