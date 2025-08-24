"use client";

import React from "react";
import { workList } from "@/constants/index";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const Cardlist = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="gold-accent">U čemu smo mi najbolji</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Pružamo kompletne muzičke usluge za sve vrste proslava u Velikoj
            Plani, Smederevu, Požarevcu i okolini
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {workList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } w-full`}
            >
              <Card className="w-full md:w-4/5 lg:w-3/4 elegant-shadow hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-yellow-100">
                  <CardTitle className="flex items-center gap-4 text-2xl md:text-3xl text-gray-900">
                    <span className="text-4xl md:text-5xl text-yellow-600">
                      <item.icon />
                    </span>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cardlist;
