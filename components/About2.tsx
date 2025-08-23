"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <h2 className="text-3xl font-bold md:text-5xl text-primary flex flex-col  text-center">
            Trubači Kobre - Velika Plana{" "}
            <span className="text-xl font-normal md:text-2xl  text-muted-foreground">
              Vaš izbor za nezaboravne proslave
            </span>
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-2xl">
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
