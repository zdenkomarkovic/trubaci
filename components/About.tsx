"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "@/node_modules/next/image";

const About = () => {
  return (
    <section
      id="o-nama"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container px-4 md:px-8 mx-auto max-w-6xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Trubači <span className="gold-accent">Velika Plana</span>
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
              Trubači iz <strong>Velike Plane</strong> osnovani su 2000. godine
              sa ciljem da čuvaju i neguju bogatu tradiciju srpske muzike. Tokom
              više od dve decenije rada, postali smo jedan od najtraženijih
              trubačkih orkestara u{" "}
              <strong>Velikoj Plani Požarevcu Smederevu i široj okolini</strong>
              .
            </p>

            <div className={`space-y-6 transition-all duration-500 `}>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Naš repertoar obuhvata širok spektar muzike - od tradicionalnih
                srpskih pesama, kola i čočeka, do modernih hitova i međunarodne
                muzike. Prilagođavamo se ukusu i željama naših klijenata, jer
                verujemo da svaka proslava zaslužuje jedinstvenu muzičku
                atmosferu.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Nastupamo u{" "}
                <strong>
                  Velikoj Plani, Smederevu, Požarevcu, Beogradu i celoj Srbiji
                </strong>
                , donoseći radost i veselje gde god da idemo. Naša misija je da
                učinimo vašu proslavu nezaboravnom kroz muziku koja spaja srca i
                stvara najlepše uspomene.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src={"/1.jpg"}
              width={1000}
              height={1000}
              alt="trubaci velika plana"
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
