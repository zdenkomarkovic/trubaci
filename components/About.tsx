"use client";

import React, { useState } from "react";

const About = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="container px-2 md:px-4 mx-auto py-7 md:py-12 space-y-5">
      {" "}
      <h2 className=" text-4xl md:text-6xl text-primary text-center py-10">
        Trubači Kobre - Tradicija koja traje od 2000. godine
      </h2>
      <p className=" first-letter:pl-6 text-lg md:text-2xl">
        Trubači Kobre iz Velike Plane osnovani su 2000. godine sa ciljem da čuvaju i neguju bogatu tradiciju srpske muzike. Tokom više od dve decenije rada, postali smo jedan od najtraženijih trubačkih orkestara u Velikoj Plani i široj okolini. Naša strast prema muzici i posvećenost svakom nastupu učinili su nas omiljenim izborom za svadbe, slave, rođendane i sve vrste proslava.
      </p>{" "}
      <div className={`space-y-5 ${showText ? "block" : "hidden"}`}>
        <p className=" first-letter:pl-6 text-lg md:text-2xl">
          {" "}
          Naš repertoar obuhvata širok spektar muzike - od tradicionalnih srpskih pesama, kola i čočeka, do modernih hitova i međunarodne muzike. Prilagođavamo se ukusu i željama naših klijenata, jer verujemo da svaka proslava zaslužuje jedinstvenu muzičku atmosferu. Nastupamo u Velikoj Plani, Smederevu, Požarevcu, Beogradu i celoj Srbiji, donoseći radost i veselje gde god da idemo.
        </p>
        <p className=" first-letter:pl-6 text-lg md:text-2xl">
          Ono što nas izdvaja od drugih trubačkih orkestara je naša <span className="font-bold">posvećenost kvalitetu</span> i <span className="font-bold">profesionalnom pristupu</span>. Svaki član našeg orkestra je iskusan muzičar sa dugogodišnjim iskustvom nastupanja. Koristimo kvalitetne instrumente i zvučnu opremu kako bismo obezbedili <span className="font-bold">savršen zvuk na svakom nastupu</span>. Naša misija je da učinimo vašu proslavu nezaboravnom kroz muziku koja spaja srca i stvara najlepše uspomene.
        </p>
      </div>
      <p
        onClick={() => setShowText(true)}
        className={`text-lg md:text-2xl text-right text-primary cursor-pointer pr-10 ${
          showText ? "hidden" : "block"
        }`}
      >
        Saznaj vise...
      </p>
      <p
        onClick={() => setShowText(false)}
        className={`text-lg md:text-2xl text-right text-primary cursor-pointer pr-10 ${
          showText ? "block" : "hidden"
        }`}
      >
        Zatvori
      </p>
    </div>
  );
};

export default About;
