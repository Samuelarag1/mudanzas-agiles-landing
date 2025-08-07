"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface BannerProps {
  backgroundImage: string
  title: string
  subtitle: string
  buttonText: string
  gradient: string
  titleColor?: string
}

export function Banner({ 
  backgroundImage, 
  title, 
  subtitle, 
  buttonText, 
  gradient,
  titleColor = "text-white"
}: BannerProps) {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`}></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl md:text-6xl font-black mb-6 ${titleColor}`}>
            {title}
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <Button 
            size="lg"
            className={`${titleColor.includes('EE801A') 
              ? 'bg-white text-[#EE801A] hover:bg-gray-100' 
              : 'bg-[#EE801A] hover:bg-[#d6721a] text-white'
            } font-bold px-12 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
