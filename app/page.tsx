"use client"

import { useState, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Banner } from "@/components/banner"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Banner 
        backgroundImage="/national-moving-banner.png"
        title="¿Te mudás a otra provincia?"
        subtitle="Coordinamos tu mudanza nacional con la máxima seguridad y profesionalismo. Desde Tucumán hacia todo el país."
        buttonText="Cotizar mudanza nacional"
        gradient="from-[#EE801A]/90 to-[#d6721a]/80"
      />
      <Services />
      <Banner 
        backgroundImage="/storage-warehouse-banner.png"
        title="Guardamuebles disponibles todo el año"
        subtitle="Espacios seguros, climatizados y con acceso flexible para tus pertenencias. Vigilancia 24/7 incluida."
        buttonText="Consultar disponibilidad"
        gradient="from-gray-900/80 to-gray-800/70"
        titleColor="text-[#EE801A]"
      />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
