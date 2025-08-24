"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";

const PozoviteNasOdmah = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"></div>

      <div className="container px-4 md:px-8 mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Rezervišite nastup{" "}
            <span className="gold-accent">trubača Velika Plana</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Učinite vašu proslavu nezaboravnom uz najbolju muziku tradicije i
            moderne!
            <br />
            <span className="text-yellow-400">
              Dostupni smo 24/7 za sve termine u Velikoj Plani, Smederevu,
              Požarevcu i celoj Srbiji
            </span>
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="tel:+381641234567">
              <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 md:px-12 py-4 md:py-6 rounded-lg text-xl md:text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-4 mx-auto">
                <PhoneIcon className="w-6 h-6 md:w-8 md:h-8" />
                Pozovite nas odmah
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PozoviteNasOdmah;
