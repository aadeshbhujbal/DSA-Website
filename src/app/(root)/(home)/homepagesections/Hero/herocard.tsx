"use client"
import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/Section"

const herocardcontent = [
  {
    title: "14000+",
    subtitle: "Active Students",
    x: "4vw",
    y: "10vw",
    rotate: -25,
  },
  {
    title: "1672+",
    subtitle: "Ongoing Classes",
    x: "10vw",
    y: "180vw",
    rotate: 5,
  },
  {
    title: "84294++",
    subtitle: "Alumnus",
    x: "82vw",
    y: "10vw",
    rotate: 25,
  },
  {
    title: "14863+",
    subtitle: "Classes Completed",
    x: "80vw",
    y: "180vw",
    rotate: -10,
  },
]

interface HeroCardProps {
  x: string
  y: string
  className?: string
  title: string
  subtitle: string
  rotate?: number
  borderColor?: string // Added borderColor prop
}

export const HeroCards: React.FC = () => {
  return (
    <Section className="inset-y-5 !max-w-full !p-0">
      <div className="">
        <motion.div className="flex justify-between">
          {herocardcontent.map((item, index) => (
            <HeroCard
              key={index}
              x={item.x}
              y={item.y}
              rotate={item.rotate}
              title={item.title}
              subtitle={item.subtitle}
              borderColor={colors[index % colors.length]} // Assigning border color dynamically
            />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

const HeroCard: React.FC<HeroCardProps> = ({ className, x, y, rotate, title, subtitle, borderColor }) => {
  // Parse the y value to a float
  const parsedY = parseFloat(y)

  // Calculate the adjustedY based on the parsedY value
  const adjustedY = parsedY !== 0 ? parsedY : parseFloat(herocardcontent[0]?.y ?? "") >= 0 ? "50vw" : "-50vw"

  return (
    <motion.div
      className={cn(
        "inset-y absolute inset-x-0 z-[-1] hidden max-w-44 rounded-xl border-b-[6px] !bg-[#ffffff] px-4 py-6 text-center text-card-foreground opacity-100 shadow-hero-card md:px-6 lg:block ",
        className
      )}
      style={{ x, y: adjustedY, rotate: `${rotate}deg`, borderColor }}
      initial={{ opacity: 0, y: 250 }}
      animate={{ opacity: 1, y: adjustedY }}
      transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
    >
      <h4 className="font-bold">{title}</h4>
      <p className="small-regular">{subtitle}</p>
    </motion.div>
  )
}

const colors = ["#ff9933", "#f52b02", "#00d1b9", "#b200f2"]
