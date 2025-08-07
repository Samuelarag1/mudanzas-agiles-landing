"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Truck, Shield, Calculator, CheckCircle } from 'lucide-react'
import Image from "next/image"

const services = [
  {
    icon: Truck,
    title: "Mudanzas Nacionales",
    description: "Servicio puerta a puerta en todo el país",
    features: ["Camiones propios", "Seguro incluido", "Tracking en vivo"],
    image: "/service-1.png"
  },
  {
    icon: Shield,
    title: "Guardamuebles",
    description: "Espacios seguros y climatizados",
    features: ["Vigilancia 24/7", "Control de humedad", "Acceso flexible"],
    image: "/service-2.png"
  },
  {
    icon: Calculator,
    title: "Presupuestos Gratis",
    description: "Cotización sin compromiso",
    features: ["Visita gratuita", "Precio fijo", "Sin sorpresas"],
    image: "/service-3.png"
  }
]

export function Services() {
  const servicesRef = useRef(null)
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })

  return (
    <section id="servicios" ref={servicesRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Servicios <span className="font-light text-[#EE801A]">Premium</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Soluciones integrales para cada tipo de mudanza
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#EE801A] to-[#d6721a] rounded-3xl flex items-center justify-center mb-8 shadow-2xl">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#EE801A] flex-shrink-0" />
                        <span className="text-lg text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <div className="relative group">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
