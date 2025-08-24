import Image from "next/image";
import React from "react";

const BackgroundImage = () => {
  return (
    <div className="relative">
      <Image
        src="/truba.jpg"
        alt="Trubači Kobre Velika Plana pozadina"
        width={1000}
        height={1000}
        className="object-cover w-full md:max-h-[63dvh]"
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
};

export default BackgroundImage;
