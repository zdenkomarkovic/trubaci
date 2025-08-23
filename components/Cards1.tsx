import { CardHeader, CardTitle, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";
import { Cards1Data } from "@/constants/index";

const Cards1 = ({ title, data }: { title: string; data: Cards1Data[] }) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-20 border-t-2 space-y-10 md:space-y-20 relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl text-primary font-black mb-4">
            🏆 Zašto izabrati trubače Kobre? 🏆
          </h2>
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-lg font-bold">
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
                <MotionComponent1>
                  <OneCard item={item} />
                </MotionComponent1>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards1;

const OneCard = ({ item }: { item: Cards1Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader className="relative">
        <motion.div 
          className="mx-auto text-4xl md:text-6xl text-primary md:pb-5"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconComponent />
        </motion.div>
        <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-lg md:text-xl relative">
        <p className="leading-relaxed">{item.text}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </CardContent>
    </Card>
  );
};
          Zašto izabrati trubače Kobre iz Velike Plane?
        </h2>
        <div className="grid md:grid-cols-4 text-center gap-6 md:gap-8 items-stretch">
          {data.map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />;
              </MotionComponent1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards1;

const OneCard = ({ item }: { item: Cards1Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mx-auto text-4xl md:text-6xl text-primary md:pb-5">
          <IconComponent />
        </div>
        <CardTitle className="text-2xl md:text-3xl">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-lg md:text-xl">
        <p>{item.text}</p>
      </CardContent>
    </Card>
  );
};
