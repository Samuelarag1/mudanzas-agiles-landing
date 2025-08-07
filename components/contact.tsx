"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Hablemos de tu <span className="font-light text-[#EE801A]">Mudanza</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Completá el formulario y te contactamos en menos de 24 horas
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#EE801A]/5 to-transparent"></div>
            
            <div className="relative z-10">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      Nombre completo
                    </label>
                    <Input 
                      placeholder="Tu nombre"
                      className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-[#EE801A] focus:ring-[#EE801A] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      Teléfono
                    </label>
                    <Input 
                      placeholder="Tu teléfono"
                      className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-[#EE801A] focus:ring-[#EE801A] transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      Desde
                    </label>
                    <Input 
                      placeholder="Ciudad/Provincia origen"
                      className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-[#EE801A] focus:ring-[#EE801A] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">
                      Hacia
                    </label>
                    <Input 
                      placeholder="Ciudad/Provincia destino"
                      className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-[#EE801A] focus:ring-[#EE801A] transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    Fecha estimada
                  </label>
                  <Input 
                    type="date"
                    className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-[#EE801A] focus:ring-[#EE801A] transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    Contanos sobre tu mudanza
                  </label>
                  <Textarea 
                    placeholder="Tipo de vivienda, cantidad de ambientes, muebles especiales, etc."
                    rows={5}
                    className="text-lg border-2 border-gray-200 rounded-xl focus:border-[#EE801A] focus:ring-[#EE801A] transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#EE801A] hover:bg-[#d6721a] text-white font-bold py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Enviar solicitud de presupuesto
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
