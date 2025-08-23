import Image from "next/image";
import React from "react";

const BackgroundImage = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero1.jpg"
          alt="Trubači Kobre Velika Plana - atmosfera proslave"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Atmosfera koja se <span className="gold-accent">pamti</span>
        </h2>
        <p className="text-lg md:text-2xl font-light leading-relaxed">
          Svaki nastup trubača Kobre je jedinstveno iskustvo koje spaja tradiciju sa modernim pristupom,
          stvarajući nezaboravne trenutke za vas i vaše goste.
        </p>
      </div>
    </section>
  );
};

export default BackgroundImage;