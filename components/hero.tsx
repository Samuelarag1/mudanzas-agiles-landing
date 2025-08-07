"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-moving-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Floating Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 w-20 h-20 bg-[#EE801A]/20 rounded-full blur-xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-[#EE801A]/10 rounded-full blur-2xl"
      />

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
          >
            Mudanzas sin{" "}
            <span className="text-[#EE801A] relative">
              estrés
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-2 left-0 w-full h-2 bg-[#EE801A] origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-xl md:text-3xl font-light mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            <span className="font-bold">
              Mudanzas nacionales exclusivas y compartidas.
            </span>{" "}
            También locales en toda la provincia de Tucumán.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#EE801A] hover:bg-[#d6721a] text-white font-bold px-8 py-6  text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 group "
            >
              Solicitá tu presupuesto gratis
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/80 text-black hover:bg-white hover:text-gray-900 font-bold px-12 py-6 text-xl rounded-full backdrop-blur-sm transition-all duration-500 transform hover:scale-110"
            >
              Ver cómo funciona
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center items-center space-x-8 mt-12 text-sm"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-[#EE801A]" />
              <span>Seguro incluido</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-[#EE801A]" />
              <span>Sin sorpresas en el precio</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-[#EE801A]" />
              <span>Puntualidad garantizada</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
