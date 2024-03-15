"use client"
import { motion, Variants } from "framer-motion"
import React from "react"
import { Container } from "../ui/Container"

interface AnimatedTextH1Props {
  text: string
  className?: string
}

const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.2,
    },
  },
}

const singleWord: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const AnimatedTextH1: React.FC<AnimatedTextH1Props> = ({ text, className = "" }) => {
  return (
    <div className=" flex w-full items-center justify-center  overflow-hidden py-2 text-center sm:py-0">
      <Container className="!p-0">
        <motion.h1
          className={`text-dark dark:text-light h1 inline-block w-full font-medium capitalize ${className}`}
          variants={quote}
          initial="initial"
          animate="animate"
        >
          {text.split(" ").map((word, index) => (
            <motion.div key={word + "-" + index} className="inline-block !font-clashgrotesk" variants={singleWord}>
              {word}&nbsp;
            </motion.div>
          ))}
        </motion.h1>
      </Container>
    </div>
  )
}

export default AnimatedTextH1
