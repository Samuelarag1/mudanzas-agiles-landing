"use client"

import { motion } from "framer-motion"
import { MessageCircle } from 'lucide-react'
import Link from "next/link"

export function WhatsAppFloat() {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link 
        href="https://wa.me/5493811234567?text=Hola! Me interesa solicitar un presupuesto para mi mudanza."
        target="_blank"
        className="relative group"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative overflow-hidden"
        >
          {/* Pulse Animation */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-green-400 rounded-full"
          />
          
          <MessageCircle className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </motion.div>
        
        {/* Tooltip */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap font-semibold shadow-lg"
        >
          Consultá por WhatsApp
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
