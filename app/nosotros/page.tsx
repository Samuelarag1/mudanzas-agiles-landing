"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Truck, Users, Award, Shield, Heart, Target } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function NosotrosPage() {
  const values = [
    {
      icon: Shield,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la transparencia y el cumplimiento de nuestras promesas."
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Cada mudanza es única y especial. Nos comprometemos a cuidar tus pertenencias como si fueran nuestras."
    },
    {
      icon: Target,
      title: "Excelencia",
      description: "Buscamos la perfección en cada detalle, desde el primer contacto hasta la entrega final."
    }
  ]

  const team = [
    {
      name: "Roberto Martínez",
      position: "Director General",
      experience: "20 años de experiencia",
      image: "/team-1.png"
    },
    {
      name: "Laura Fernández",
      position: "Coordinadora de Operaciones",
      experience: "15 años de experiencia",
      image: "/team-2.png"
    },
    {
      name: "Miguel Torres",
      position: "Jefe de Logística",
      experience: "12 años de experiencia",
      image: "/team-3.png"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
              Conocé <span className="text-[#EE801A]">Nuestra Historia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Más de 15 años conectando familias con sus nuevos hogares en todo el país
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <Image
                src="/about-hero.png"
                alt="Equipo de Mudanzas Ágiles"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Una empresa familiar con visión nacional
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mudanzas Ágiles nació en 2009 en San Miguel de Tucumán con un sueño simple pero ambicioso: 
                hacer que las mudanzas sean una experiencia positiva y sin estrés para las familias argentinas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lo que comenzó como una pequeña empresa familiar se ha convertido en una de las compañías 
                de mudanzas más confiables del norte argentino, con servicios que se extienden por todo el país.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#EE801A]/5 to-[#EE801A]/10 rounded-3xl p-8 md:p-12"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#EE801A] to-[#d6721a] rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">Nuestra Misión</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Brindar servicios de mudanza excepcionales que superen las expectativas de nuestros clientes, 
                cuidando cada detalle y tratando sus pertenencias con el máximo respeto y profesionalismo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-8">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">Nuestra Visión</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser la empresa de mudanzas líder en Argentina, reconocida por nuestra innovación, 
                confiabilidad y compromiso con la satisfacción del cliente en cada traslado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Nuestros <span className="text-[#EE801A]">Valores</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Los principios que guían cada una de nuestras acciones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#EE801A] to-[#d6721a] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Nuestro <span className="text-[#EE801A]">Equipo</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Profesionales comprometidos con tu mudanza perfecta
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#EE801A]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#EE801A] font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#EE801A] to-[#d6721a] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              ¿Listo para tu próxima mudanza?
            </h2>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Contactanos hoy y descubrí por qué somos la opción preferida de las familias argentinas
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[#EE801A] hover:bg-gray-100 font-bold px-12 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Presupuesto
              </Button>
              <Link href="/#contacto">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#EE801A] font-bold px-12 py-6 text-xl rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Contactanos
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
