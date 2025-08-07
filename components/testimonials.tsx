"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from 'lucide-react'
import Image from "next/image"

const testimonials = [
  {
    name: "María González",
    location: "Buenos Aires",
    text: "Excelente servicio. Se encargaron de todo y llegaron puntuales. Mi mudanza de Tucumán a Buenos Aires fue perfecta.",
    rating: 5,
    image: "/diverse-woman-smiling.png"
  },
  {
    name: "Carlos Rodríguez", 
    location: "Córdoba",
    text: "Muy profesionales y cuidadosos con mis muebles. El precio fue justo y cumplieron con los tiempos acordados.",
    rating: 5,
    image: "/smiling-man.png"
  },
  {
    name: "Ana Martínez",
    location: "Mendoza",
    text: "Recomiendo 100%. Hicieron mi mudanza nacional sin problemas y con mucha dedicación. Gracias!",
    rating: 5,
    image: "/happy-woman.png"
  }
]

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialsRef = useRef(null)
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonios" ref={testimonialsRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Testimonios <span className="font-light text-[#EE801A]">Reales</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Lo que dicen nuestros clientes satisfechos
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isTestimonialsInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#EE801A]/5 to-transparent"></div>
              
              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 text-center">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-6 shadow-xl border-4 border-[#EE801A]/20"
                  />
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-black text-gray-900 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
                
                <div className="md:col-span-2">
                  <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#EE801A] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
