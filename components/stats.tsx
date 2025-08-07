"use client"

import { motion } from "framer-motion"
import { Truck, Users, Award, Zap } from 'lucide-react'

const stats = [
  { number: "500+", label: "Mudanzas realizadas", icon: Truck },
  { number: "98%", label: "Clientes satisfechos", icon: Users },
  { number: "15+", label: "Años de experiencia", icon: Award },
  { number: "24/7", label: "Atención al cliente", icon: Zap }
]

export function Stats() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#EE801A] to-[#d6721a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
