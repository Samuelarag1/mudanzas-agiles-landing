"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Hacen mudanzas a todo el país?",
    answer: "Sí, realizamos mudanzas nacionales a todas las provincias de Argentina. Tenemos experiencia en rutas largas y coordinamos todo para que tu mudanza sea exitosa."
  },
  {
    question: "¿Qué incluye el servicio de mudanza?",
    answer: "Incluye embalaje profesional, carga, transporte, descarga y desembalaje en destino. También ofrecemos desmontaje y montaje de muebles."
  },
  {
    question: "¿Cuánto tiempo toma una mudanza nacional?",
    answer: "Depende del destino. Mudanzas a provincias limítrofes toman 1-2 días, mientras que destinos más lejanos pueden tomar 3-5 días. Te informamos los tiempos exactos en el presupuesto."
  },
  {
    question: "¿Tienen seguro para mis pertenencias?",
    answer: "Sí, todas nuestras mudanzas están cubiertas por seguro. Trabajamos con el máximo cuidado y responsabilidad para proteger tus bienes."
  },
  {
    question: "¿Puedo contratar solo el transporte?",
    answer: "Sí, ofrecemos diferentes modalidades: servicio completo, solo transporte, o mudanzas compartidas para optimizar costos en mudanzas nacionales."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Preguntas <span className="font-light text-[#EE801A]">Frecuentes</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Resolvemos tus dudas más comunes
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <AccordionTrigger className="px-8 py-6 text-left font-bold text-lg text-gray-900 hover:text-[#EE801A] transition-colors duration-300 no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600 text-lg font-light leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
