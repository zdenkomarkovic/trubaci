"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 float-animation"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-200 rounded-full opacity-20 float-animation" style={{animationDelay: '1s'}}></div>
        
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-black md:text-6xl text-primary mb-4">
              🎺 Trubači Kobre 🎺
            </h2>
            <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-xl md:text-2xl font-bold shadow-lg">
              📍 Velika Plana
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 font-medium">
              Vaš izbor za nezaboravne proslave
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
            <p className="text-lg md:text-2xl leading-relaxed">
              🎵 Tražite{" "}
              <span className="font-bold text-orange-600">najbolje trubače u Velikoj Plani</span> i
              okolini? Naš profesionalni orkestar je spreman da učini vašu proslavu nezaboravnom – bilo da je u pitanju{" "}
              <span className="font-bold text-red-600">
                svadba, krsna slava, rođendan ili bilo koja druga proslava
              </span>{" "}
              koja zaslužuje posebnu muzičku atmosferu.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-2xl leading-relaxed">
              🌍 Naš trubački orkestar pruža vrhunske muzičke usluge na teritoriji
              <span className="font-bold text-blue-600">
                Velike Plane, Smedereva, Požarevca, Beograda i cele Srbije
              </span>
              . Bez obzira na to da li vam je potrebna muzika za{" "}
              <span className="font-bold text-purple-600">
                intimnu porodičnu proslavu ili veliko veselje sa stotinama gostiju
              </span>
              , imamo iskustvo i repertoar za svaku priliku.
            </p>
          </div>
          
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full shadow-xl"
            >
              <p className="text-xl md:text-2xl font-bold">
                📞 Kontaktirajte nas i rezervišite nezaboravan muzički doživljaj!
              </p>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ scale: 0.2, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="md:w-1/3 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src={"/puric.jpg"}
              width={500}
              height={800}
              alt="trubači kobre velika plana"
              className="object-cover h-[300px] md:h-full music-wave"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-bold text-center">🎺 Trubači Kobre 🎺</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <div>
          <p>
            Tražite{" "}
            <span className="font-bold">najbolje trubače u Velikoj Plani</span> i
            okolini? Naš profesionalni orkestar je spreman da učini vašu proslavu nezaboravnom – bilo da je u pitanju{" "}
            <span className="font-bold">
              svadba, krsna slava, rođendan ili bilo koja druga proslava
            </span>{" "}
            koja zaslužuje posebnu muzičku atmosferu.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-2xl">
            Naš trubački orkestar pruža vrhunske muzičke usluge na teritoriji
            <span className="font-bold">
              Velike Plane, Smedereva, Požarevca, Beograda i cele Srbije
            </span>
            . Bez obzira na to da li vam je potrebna muzika za{" "}
            <span className="font-bold">
              intimnu porodičnu proslavu ili veliko veselje sa stotinama gostiju
            </span>
            , imamo iskustvo i repertoar za svaku priliku.
          </p>
          <p className="first-letter:pl-6 text-lg md:text-2xl">
            Kontaktirajte nas i rezervišite nezaboravan muzički doživljaj za vašu proslavu.
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/puric.jpg"}
            width={500}
            height={800}
            alt="trubači kobre velika plana"
            className="object-cover h-[300px] md:h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
