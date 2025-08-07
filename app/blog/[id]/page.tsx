"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock blog post data - in a real app, this would come from a CMS or API
const blogPost = {
  id: 1,
  title: "Guía completa para preparar tu mudanza nacional",
  content: `
    <p>Mudarse a otra provincia es una decisión importante que requiere una planificación cuidadosa. En esta guía completa, te contamos todo lo que necesitás saber para que tu mudanza nacional sea exitosa y sin estrés.</p>

    <h2>1. Planificación inicial</h2>
    <p>La clave de una mudanza exitosa está en la planificación. Comenzá a organizar tu mudanza al menos 2 meses antes de la fecha prevista. Esto te dará tiempo suficiente para:</p>
    <ul>
      <li>Investigar empresas de mudanzas confiables</li>
      <li>Solicitar múltiples presupuestos</li>
      <li>Organizar la documentación necesaria</li>
      <li>Planificar los trámites en tu nuevo destino</li>
    </ul>

    <h2>2. Documentación necesaria</h2>
    <p>Para una mudanza interprovincial, vas a necesitar tener en orden varios documentos:</p>
    <ul>
      <li>DNI actualizado</li>
      <li>Certificado de domicilio</li>
      <li>Constancia de CUIL/CUIT</li>
      <li>Certificados de estudios</li>
      <li>Historias clínicas y recetas médicas</li>
    </ul>

    <h2>3. Elegir la empresa de mudanzas</h2>
    <p>No todas las empresas de mudanzas son iguales. Buscá una empresa que:</p>
    <ul>
      <li>Tenga experiencia en mudanzas nacionales</li>
      <li>Ofrezca seguro para tus pertenencias</li>
      <li>Tenga buenas referencias y reseñas</li>
      <li>Proporcione un presupuesto detallado y transparente</li>
    </ul>

    <h2>4. Preparación de las pertenencias</h2>
    <p>Comenzá a embalar tus pertenencias con tiempo. Seguí estos consejos:</p>
    <ul>
      <li>Usá cajas de calidad y materiales de embalaje apropiados</li>
      <li>Etiquetá todas las cajas con su contenido y destino</li>
      <li>Hacé un inventario detallado de tus pertenencias</li>
      <li>Separá los objetos de valor para transportarlos personalmente</li>
    </ul>

    <h2>5. El día de la mudanza</h2>
    <p>El día de la mudanza puede ser estresante, pero con buena organización todo saldrá bien:</p>
    <ul>
      <li>Levantate temprano y desayuná bien</li>
      <li>Tené a mano todos los documentos importantes</li>
      <li>Supervisá la carga pero confiá en los profesionales</li>
      <li>Hacé una verificación final antes de que se vaya el camión</li>
    </ul>

    <p>Recordá que una mudanza nacional es una gran aventura. Con la planificación adecuada y la empresa correcta, tu mudanza será una experiencia positiva que marcará el inicio de una nueva etapa en tu vida.</p>
  `,
  image: "/blog-1.png",
  author: "Laura Fernández",
  date: "15 de Marzo, 2024",
  readTime: "8 min",
  category: "Consejos"
}

export default function BlogPostPage() {
  const params = useParams()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog" className="inline-flex items-center text-[#EE801A] hover:text-[#d6721a] font-semibold mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al blog
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="bg-[#EE801A] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {blogPost.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{blogPost.readTime} de lectura</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button className="bg-[#EE801A] hover:bg-[#d6721a] text-white font-semibold px-6 py-3 rounded-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir artículo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div 
              className="prose prose-lg prose-gray max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#EE801A]
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-gray-700 prose-li:mb-2
                prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#EE801A] to-[#d6721a] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              ¿Necesitás ayuda con tu mudanza?
            </h2>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Nuestro equipo de expertos está listo para hacer que tu mudanza sea perfecta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[#EE801A] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Presupuesto Gratis
              </Button>
              <Link href="/#contacto">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#EE801A] font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
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
