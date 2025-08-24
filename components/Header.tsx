"use client";

import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import { MenuIcon, PhoneIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navList } from "@/constants/index";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-yellow-500 cursor-pointer w-6 h-6" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <motion.li
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className={mobTitleStyles}
                  >
                    <SheetTrigger>{item.title}</SheetTrigger>
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <ul className="hidden gap-8 lg:flex  font-medium">
    {navList.map((item, index) => {
      return (
        <Link key={index} href={item.link}>
          <motion.li className="transition-colors hover:text-yellow-500 cursor-pointer ">
            {item.title}
          </motion.li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex  justify-center ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg text-black"
          : "bg-transparent text-white"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl w-full">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="Trubači Kobre Velika Plana logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="">
            <div
              className={`font-bold text-lg  ${
                scrolled ? "text-gray-900" : " text-white"
              }`}
            >
              Trubači
            </div>
            <div
              className={`text-base ${
                scrolled ? "text-gray-600" : " text-white"
              }`}
            >
              Velika Plana
            </div>
          </div>
        </Link>

        <DesktopNav />

        <Link href="tel:+381612579600">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <PhoneIcon className="w-4 h-4" />
            <span className="hidden lg:inline">+381 61 257 9600</span>
            <span className="lg:hidden">Pozovi</span>
          </motion.button>
        </Link>

        <MobileMenu />
      </nav>
    </header>
  );
}
