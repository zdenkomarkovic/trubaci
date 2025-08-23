"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistika = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="relative py-16 md:py-24 text-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-200 rounded-full opacity-20 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-4">
            📊 Naši rezultati u brojkama 📊
          </h2>
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-lg font-bold">
            🏆 Dokaz kvaliteta kroz godine 🏆
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            { number: 24, suffix: "+", label: "Godina iskustva", icon: "🎂", color: "from-blue-500 to-purple-500" },
            { number: 1500, suffix: "+", label: "Uspešnih nastupa", icon: "🎭", color: "from-green-500 to-teal-500" },
            { number: 300, suffix: "+", label: "Svadbi ozvučeno", icon: "💒", color: "from-pink-500 to-rose-500" },
            { number: 50, suffix: "+", label: "Gradova u Srbiji", icon: "🏙️", color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${stat.color} p-6 md:p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {stat.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <p className="text-4xl md:text-5xl font-black mb-2">
                    {inView && <CountUp end={stat.number} duration={2} suffix={stat.suffix} />}
                  </p>
                  <p className="text-lg md:text-xl font-bold">{stat.label}</p>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistika;
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={24} duration={2} suffix="+" />}
          </p>
          <p className="mt-2 text-lg">Godina iskustva</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={1500} duration={2} suffix="+" />}
          </p>
          <p className="mt-2 text-lg">Uspešnih nastupa</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={300} duration={2} suffix="+" />}
          </p>
          <p className="mt-2 text-lg">Svadbi ozvučeno</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={50} duration={2} suffix="+" />}
          </p>
          <p className="mt-2 text-lg">Gradova u Srbiji</p>
        </div>
      </div>
    </section>
  );
};

export default Statistika;
