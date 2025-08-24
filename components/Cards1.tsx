"use client";
import { motion } from "framer-motion";
import { CardHeader, CardTitle, CardContent, Card } from "./ui/card";
import { GiWeight } from "react-icons/gi";
import { IconType } from "react-icons";

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const data: Cards1Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "20+ godina iskustva",
    text: "Više od dve decenije sviramo po Velikoj Plani i celoj Srbiji, donoseći radost na hiljade proslava.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Profesionalni pristup",
    text: "Uvek dolazimo pripremljeni, na vreme i sa kompletnom opremom za nezaboravan muzički doživljaj.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Bogat repertoar",
    text: "Od tradicionalnih srpskih pesama do modernih hitova - imamo muziku za svaki ukus i priliku.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Cela Srbija i region",
    text: "Nastupamo u Velikoj Plani, Smederevu, Požarevcu, Beogradu i širom Srbije i regiona.",
  },
];

const Cards1 = () => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-20 border-t-2 space-y-10 md:space-y-20 relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="text-center">
          <h2 className="text-4xl md:text-6xl gold-accent font-black mb-4">
            🏆 Zašto Kobre Trubači Velika Plana ? 🏆
          </h2>
          <div className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-6 py-2 rounded-full text-lg font-bold">
            ⭐ Iz Velike Plane za celu Srbiju ⭐
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 text-center gap-6 md:gap-8 items-stretch">
          {data.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <OneCard item={item} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const OneCard = ({ item }: { item: Cards1Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader className="relative">
        <motion.div
          className="mx-auto text-4xl md:text-6xl text-yellow-500 md:pb-5"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent />
        </motion.div>
        <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-lg md:text-xl relative">
        <p className="leading-relaxed">{item.text}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </CardContent>
    </Card>
  );
};

export default Cards1;
