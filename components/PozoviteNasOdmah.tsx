"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";

const PozoviteNasOdmah = () => {
  return (
    <div className="bg-foreground text-primary mt-10 md:mt-20 py-10 md:py-20">
      <div className="container px-2 md:px-4 mx-auto font-bold flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <h2 className="text-xl md:text-3xl text-center ">
          Trubači Kobre iz Velike Plane su tu za vas! Rezervišite nastup za vašu proslavu i učinite je nezaboravnom uz najbolju muziku.
        </h2>
        <a href="tel:+381641234567">
          <motion.button
            whileHover={{ translateY: "-5px" }}
            whileTap={{ scale: 0.95 }}
            className=" text-nowrap flex gap-3 text-2xl md:text-3xl items-center text-muted-foreground bg-muted rounded-lg px-4 md:px-8 md:py-3 py-2"
          >
            <PhoneIcon /> Rezervišite nastup
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
