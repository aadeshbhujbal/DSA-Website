// Accordion.tsx
"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Accordion1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div className="relative w-64">
      <button className="rounded-md bg-blue-500 p-2 text-white" onClick={toggleAccordion}>
        Toggle Accordion
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Change y value to 20
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }} // Change y value to 20
            transition={{ duration: 0.3 }}
            className="absolute bottom-12 left-0 right-0 mt-10 bg-white p-4"
          >
            {/* Accordion content */}
            <p>This is the accordion content.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion1
