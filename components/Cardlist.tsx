"use client";

import React from "react";
import { workList } from "@/constants/index";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const Cardlist = () => {
  return (
    <div className="py-20">
      <div className="container px-2 md:px-4 mx-auto space-y-10">
        <h2 className="text-4xl md:text-6xl text-primary text-center">
          Naše usluge u Velikoj Plani i okolini
        </h2>
        <p className="text-center text-lg md:text-xl max-w-4xl mx-auto">
          Trubači Kobre pružaju kompletne muzičke usluge za sve vrste proslava. Naš bogat repertoar i profesionalni pristup garantuju nezaboravno iskustvo.
        </p>
        <div className=" flex flex-col gap-4 md:gap-6 overflow-hidden">
          {workList.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }} // Naizmenično levo/desno
                whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } w-full`}
              >
                <Card className="  md:w-3/4 shadow-lg md:p-5">
                  <CardHeader>
                    <CardTitle className="flex gap-5 text-2xl md:text-4xl items-center mx-auto text-primary">
                      <span className="text-4xl md:text-8xl">
                        {<item.icon />}
                      </span>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className=" first-letter:pl-6 text-lg md:text-2xl">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cardlist;
