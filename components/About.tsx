"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [showText, setShowText] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Trubači <span className="gold-accent">Kobre</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Tradicija koja traje od 2000. godine
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Trubači Kobre iz <strong>Velike Plane</strong> osnovani su 2000. godine sa ciljem da čuvaju i neguju bogatu tradiciju srpske muzike. Tokom više od dve decenije rada, postali smo jedan od najtraženijih trubačkih orkestara u <strong>Velikoj Plani i široj okolini</strong>.
            </p>

            <div className={`space-y-6 transition-all duration-500 ${showText ? "block" : "hidden"}`}>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Naš repertoar obuhvata širok spektar muzike - od tradicionalnih srpskih pesama, kola i čočeka, do modernih hitova i međunarodne muzike. Prilagođavamo se ukusu i željama naših klijenata, jer verujemo da svaka proslava zaslužuje jedinstvenu muzičku atmosferu.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Nastupamo u <strong>Velikoj Plani, Smederevu, Požarevcu, Beogradu i celoj Srbiji</strong>, donoseći radost i veselje gde god da idemo. Naša misija je da učinimo vašu proslavu nezaboravnom kroz muziku koja spaja srca i stvara najlepše uspomene.
              </p>
            </div>

            <button
              onClick={() => setShowText(!showText)}
              className="text-yellow-600 hover:text-yellow-700 font-semibold text-lg transition-colors duration-300"
            >
              {showText ? "Sakrij tekst" : "Pročitaj više..."}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="traditional-border rounded-lg overflow-hidden elegant-shadow">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 text-center">
                <div className="text-6xl mb-4">🎺</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Zašto izabrati nas?
                </h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>Preko 20 godina iskustva</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>Profesionalni pristup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>Bogat repertoar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>Dostupni 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;