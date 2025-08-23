import Image from "next/image";
import React from "react";

interface BackgroundImageProps {
  children: React.ReactNode;
}

const BackgroundImage = ({ children }: BackgroundImageProps) => {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/hero1.jpg"
        alt="Trubači Kobre Velika Plana pozadina"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      {children}
    </div>
  );
};

export default BackgroundImage;