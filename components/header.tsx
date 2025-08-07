"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Truck, Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}

      {/* Main Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="bg-gray-900 text-white py-2 text-sm">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#EE801A]" />
                <span className="font-medium">+54 381 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#EE801A]" />
                <span className="font-medium">info@mudanzasagiles.com</span>
              </div>
            </div>
            <div className="hidden md:block text-gray-300">
              Atención: Lunes a Viernes 8:00 - 18:00hs
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#EE801A] to-[#d6721a] rounded-xl flex items-center justify-center shadow-lg">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  La Mudadora
                </h1>
                <p className="text-xs text-gray-600 font-medium">
                  Tucumán • Argentina
                </p>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#EE801A] transition-all duration-300 font-semibold"
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="text-gray-700 hover:text-[#EE801A] transition-all duration-300 font-semibold"
            >
              Nosotros
            </Link>
            <Link
              href="#servicios"
              className="text-gray-700 hover:text-[#EE801A] transition-all duration-300 font-semibold"
            >
              Servicios
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-[#EE801A] transition-all duration-300 font-semibold"
            >
              Blog
            </Link>
            <Link
              href="#contacto"
              className="text-gray-700 hover:text-[#EE801A] transition-all duration-300 font-semibold"
            >
              Contacto
            </Link>
            <Button className="bg-[#EE801A] hover:bg-[#d6721a] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Presupuesto Gratis
            </Button>
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 font-semibold py-2">
                Inicio
              </Link>
              <Link
                href="/nosotros"
                className="text-gray-700 font-semibold py-2"
              >
                Nosotros
              </Link>
              <Link
                href="#servicios"
                className="text-gray-700 font-semibold py-2"
              >
                Servicios
              </Link>
              <Link href="/blog" className="text-gray-700 font-semibold py-2">
                Blog
              </Link>
              <Link
                href="#contacto"
                className="text-gray-700 font-semibold py-2"
              >
                Contacto
              </Link>
              <Button className="bg-[#EE801A] hover:bg-[#d6721a] text-white font-bold py-3 rounded-full shadow-lg">
                Presupuesto Gratis
              </Button>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
}
