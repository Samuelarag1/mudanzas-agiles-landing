"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Guía completa para preparar tu mudanza nacional",
    excerpt: "Todo lo que necesitás saber para organizar una mudanza exitosa a otra provincia. Tips, tiempos y documentación necesaria.",
    image: "/blog-1.png",
    author: "Laura Fernández",
    date: "15 de Marzo, 2024",
    readTime: "8 min",
    category: "Consejos",
    featured: true
  },
  {
    id: 2,
    title: "Cómo embalar objetos frágiles correctamente",
    excerpt: "Técnicas profesionales para proteger tus objetos más delicados durante el transporte. Materiales y métodos recomendados.",
    image: "/blog-2.png",
    author: "Miguel Torres",
    date: "10 de Marzo, 2024",
    readTime: "6 min",
    category: "Embalaje"
  },
  {
    id: 3,
    title: "Mudanzas en temporada alta: qué tener en cuenta",
    excerpt: "Los meses de mayor demanda y cómo planificar tu mudanza para evitar inconvenientes y obtener mejores precios.",
    image: "/blog-3.png",
    author: "Roberto Martínez",
    date: "5 de Marzo, 2024",
    readTime: "5 min",
    category: "Planificación"
  },
  {
    id: 4,
    title: "Documentación necesaria para mudanzas interprovinciales",
    excerpt: "Lista completa de documentos y trámites que debés realizar cuando te mudás a otra provincia.",
    image: "/blog-4.png",
    author: "Laura Fernández",
    date: "28 de Febrero, 2024",
    readTime: "7 min",
    category: "Documentación"
  },
  {
    id: 5,
    title: "Consejos para mudarse con mascotas",
    excerpt: "Cómo hacer que la mudanza sea menos estresante para tus mascotas. Preparación, transporte y adaptación.",
    image: "/blog-5.png",
    author: "Ana García",
    date: "22 de Febrero, 2024",
    readTime: "6 min",
    category: "Mascotas"
  },
  {
    id: 6,
    title: "Ventajas de contratar un servicio profesional de mudanzas",
    excerpt: "Por qué elegir profesionales para tu mudanza puede ahorrarte tiempo, dinero y dolores de cabeza.",
    image: "/blog-6.png",
    author: "Miguel Torres",
    date: "18 de Febrero, 2024",
    readTime: "4 min",
    category: "Servicios"
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

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
              Blog de <span className="text-[#EE801A]">Mudanzas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Consejos, guías y novedades del mundo de las mudanzas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Artículo Destacado</h2>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#EE801A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button className="bg-[#EE801A] hover:bg-[#d6721a] text-white font-semibold px-6 py-3 rounded-full inline-flex items-center group">
                        Leer artículo completo
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center">Últimos Artículos</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#EE801A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#EE801A] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.id}`}>
                    <Button 
                      variant="outline" 
                      className="border-[#EE801A] text-[#EE801A] hover:bg-[#EE801A] hover:text-white font-semibold px-4 py-2 rounded-full text-sm inline-flex items-center group"
                    >
                      Leer más
                      <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
