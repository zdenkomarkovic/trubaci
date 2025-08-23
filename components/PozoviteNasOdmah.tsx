"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";

const PozoviteNasOdmah = () => {
  return (
    <div className="relative mt-10 md:mt-20 py-10 md:py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating musical notes */}
      <div className="absolute top-10 left-10 text-4xl text-white/30 float-animation">🎵</div>
      <div className="absolute top-20 right-20 text-3xl text-white/30 float-animation" style={{animationDelay: '1s'}}>🎶</div>
      <div className="absolute bottom-20 left-1/4 text-5xl text-white/30 float-animation" style={{animationDelay: '2s'}}>🎺</div>
      <div className="absolute bottom-10 right-1/3 text-4xl text-white/30 float-animation" style={{animationDelay: '0.5s'}}>🎼</div>
      
      <div className="container px-2 md:px-4 mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 md:p-12 mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight">
              🎺 Trubači Kobre iz Velike Plane su tu za vas! 🎺
              <br />
              <span className="text-yellow-300">✨ Rezervišite nastup za vašu proslavu ✨</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-medium">
              Učinite je nezaboravnom uz najbolju muziku tradicije i moderne!
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="tel:+381641234567">
              <button className="bg-white text-orange-600 px-8 md:px-12 py-4 md:py-6 rounded-full text-xl md:text-2xl font-black shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-4 mx-auto pulse-glow">
                <PhoneIcon className="w-8 h-8" />
                📞 REZERVIŠITE NASTUP ODMAH
                <span className="animate-bounce">🎵</span>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
        </h2>
        <a href="tel:+381641234567">
          <motion.button
            whileHover={{ translateY: "-5px" }}
            whileTap={{ scale: 0.95 }}
            className=" text-nowrap flex gap-3 text-2xl md:text-3xl items-center text-muted-foreground bg-muted rounded-lg px-4 md:px-8 md:py-3 py-2"
          >
            <PhoneIcon /> Rezervišite nastup
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
