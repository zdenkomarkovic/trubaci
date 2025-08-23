"use client";

import Image from "next/image";
import Logo from "../public/manikam.png";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, PhoneIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { navList } from "@/constants/index";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-primary cursor-pointer w-6 h-6" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              if (item.list)
                return (
                  <Fragment key={index}>
                    <Accordion type="single" collapsible>
                      <AccordionItem className="border-none" value="item-1">
                        <motion.div
                          whileHover={{ color: "hsl(var(--primary))" }}
                        >
                          <AccordionTrigger
                            className={`${mobTitleStyles} hover:no-underline`}
                          >
                            {item.title}
                          </AccordionTrigger>
                        </motion.div>
                        <AccordionContent>
                          {item.list.map((link, index2) => (
                            <Link
                              className="pl-6 block font-light py-2"
                              key={`${index}.${index2}`}
                              href={link.link}
                            >
                              <motion.li
                                whileHover={{ color: "hsl(var(--primary))" }}
                              >
                                {link.title}
                              </motion.li>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Fragment>
                );
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
  <ul className="hidden gap-8 lg:flex text-lg font-medium">
    {navList.map((item, index) => {
      if (item.list)
        return (
          <HoverCard key={index} openDelay={0} closeDelay={50}>
            <HoverCardTrigger>
              <motion.div
                whileHover={{ color: "hsl(var(--primary))" }}
                className="flex gap-1 transition-colors cursor-pointer"
              >
                {item.title}
                <ChevronDownIcon className="w-4 h-4" />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              {item.list.map((link, index2) => (
                <motion.li
                  key={`${index}.${index2}`}
                  whileHover={{
                    backgroundColor: "hsl(var(--primary))",
                    color: "white",
                  }}
                >
                  <Link className="px-4 py-3 block" href={link.link}>
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </HoverCardContent>
          </HoverCard>
        );
      return (
        <Link key={index} href={item.link}>
          <motion.li
            className="transition-colors hover:text-primary cursor-pointer"
            whileHover={{ color: "hsl(var(--primary))" }}
          >
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
      className={`flex justify-center ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
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
          <div className="hidden md:block">
            <div className="font-bold text-lg text-gray-900">Trubači Kobre</div>
            <div className="text-sm text-gray-600">Velika Plana</div>
          </div>
        </Link>
        
        <DesktopNav />
        
        <Link href="tel:+381641234567">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <PhoneIcon className="w-4 h-4" />
            <span className="hidden lg:inline">+381 64 123 4567</span>
            <span className="lg:hidden">Pozovi</span>
          </motion.button>
        </Link>
        
        <MobileMenu />
      </nav>
    </header>
  );
}