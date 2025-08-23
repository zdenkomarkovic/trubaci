import Image from "@/node_modules/next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const CardWithImage = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto text-right md:py-20 ">
      <h2 className="text-2xl md:text-4xl text-primary font-bold py-6 text-center">
        VRHUNSKA MUZIKA ZA SVE VRSTE PROSLAVA U VELIKOJ PLANI I OKOLINI
      </h2>
      <div className="flex flex-col md:flex-row md:gap-20  items-stretch ">
        <div>
          <Image
            src={"/puric slep.jpg"}
            width={700}
            height={700}
            alt="trubači kobre velika plana nastup"
            className="rounded-xl md:rounded-l-full"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4 py-8 md:py-20 md:justify-between text-left text-lg md:text-2xl">
          <p className="flex gap-5 items-center">
            {" "}
            <span className="text-primary text-3xl md:text-4xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>{" "}
            Potrebni su vam trubači?
          </p>
          <p className="flex gap-5 items-center">
            {" "}
            <span className="text-primary text-3xl md:text-4xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Dostupni smo za sve termine
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-3xl md:text-4xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Povoljne cene
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-3xl md:text-4xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Profesionalni nastup
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-3xl md:text-4xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Više od 20 godina iskustva
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-3xl md:text-4xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Bogat repertoar muzike
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
