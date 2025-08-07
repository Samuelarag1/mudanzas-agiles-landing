"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Calendar, Package, MapPin } from 'lucide-react'

const processSteps = [
  {
    number: "01",
    title: "Nos contactás",
    description: "Llamanos o escribinos por WhatsApp. Te respondemos al instante y coordinamos una visita sin costo.",
    icon: Phone,
    color: "from-blue-500 to-blue-600"
  },
  {
    number: "02", 
    title: "Evaluamos tu mudanza",
    description: "Visitamos tu hogar, evaluamos el volumen y te damos un presupuesto detallado y transparente.",
    icon: Calendar,
    color: "from-green-500 to-green-600"
  },
  {
    number: "03",
    title: "Embalamos todo",
    description: "Nuestro equipo especializado embala cada objeto con materiales de primera calidad y técnicas profesionales.",
    icon: Package,
    color: "from-purple-500 to-purple-600"
  },
  {
    number: "04",
    title: "Entregamos en destino",
    description: "Transportamos y entregamos todo en tu nuevo hogar, desembalamos y ubicamos según tus indicaciones.",
    icon: MapPin,
    color: "from-orange-500 to-orange-600"
  }
]

export function Process() {
  const processRef = useRef(null)
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" })

  return (
    <section id="como-funciona" ref={processRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EE801A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EE801A] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Nuestro <span className="font-light text-[#EE801A]">Proceso</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            4 pasos simples hacia tu nueva vida
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg mr-6`}>
                      {step.number}
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg opacity-20`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
