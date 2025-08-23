"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistika = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="bg-white py-12 text-center">
      <h2 className="text-3xl md:text-5xl text-primary font-bold mb-16">Naši rezultati u brojkama</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={24} duration={2} suffix="+" />}
          </p>
          <p className="mt-2 text-lg">Godina iskustva</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={1500} duration={2} suffix="+" />}
          </p>
          <p className="mt-2 text-lg">Uspešnih nastupa</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={300} duration={2} suffix="+" />}
          </p>
          <p className="mt-2 text-lg">Svadbi ozvučeno</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={50} duration={2} suffix="+" />}
          </p>
          <p className="mt-2 text-lg">Gradova u Srbiji</p>
        </div>
      </div>
    </section>
  );
};

export default Statistika;
