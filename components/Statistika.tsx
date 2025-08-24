"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Statistika = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { number: 24, suffix: "+", label: "Godina iskustva", icon: "🎂" },
    { number: 1500, suffix: "+", label: "Uspešnih nastupa", icon: "🎭" },
    { number: 50, suffix: "+", label: "Gradova u Srbiji", icon: "🏙️" },
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-r from-yellow-600 to-yellow-500"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Naši rezultati u brojkama
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-yellow-100">
            Dokaz kvaliteta kroz godine rada
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
                <div className="text-4xl md:text-5xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <p className="text-lg md:text-xl text-yellow-100 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistika;
