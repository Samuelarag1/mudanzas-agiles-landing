"use client";

import { Truck, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#EE801A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EE801A] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#EE801A] to-[#d6721a] rounded-xl flex items-center justify-center shadow-lg">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">La Mudadora</h3>
                <p className="text-sm text-gray-400">Tucumán • Argentina</p>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed text-lg">
              Tu mudanza en las mejores manos. Profesionalismo y confianza desde
              Tucumán hacia todo el país.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-[#EE801A]">
              Navegación
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-[#EE801A]">Contacto</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-[#EE801A]" />
                <span>+54 381 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-[#EE801A]" />
                <span>info@mudanzasagiles.com</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-[#EE801A]" />
                <span>San Miguel de Tucumán</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-[#EE801A]">Seguinos</h4>
            <div className="flex space-x-4 mb-6">
              <Link
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#EE801A] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#EE801A] transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
            <Button className="bg-[#EE801A] hover:bg-[#d6721a] font-bold rounded-xl w-full">
              Llamar ahora
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            &copy; 2024 La Mudadora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
