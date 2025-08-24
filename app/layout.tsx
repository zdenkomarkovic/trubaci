import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trubači Velika Plana - Najbolji trubači za svadbe i proslave",
  description:
    "Trubači iz Velike Plane - profesionalni trubači za svadbe, slave, proslave i sva veselja. Dugogodišnje iskustvo, tradicionalna i moderna muzika. Pozovite nas!",
  icons: {
    icon: "/android-chrome-192x192.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "trubači Velika Plana",
    "trubači za svadbu",
    "trubači za slavu",
    "trubači za proslave",
    "najbolji trubači",
    "tradicionalna muzika",
    "srpska muzika",
    "trubači Smederevo",
    "trubači Požarevac",
    "trubači Beograd",
    "veselje",
    "muzika za svadbu",
  ],
  alternates: {
    canonical: "https://www.trubacikobre.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-lg md:text-2xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
