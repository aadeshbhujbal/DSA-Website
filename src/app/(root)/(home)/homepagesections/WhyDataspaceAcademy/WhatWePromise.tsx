"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

interface PromiseCardProps {
  heading: string
  imageUrl: string
  imageAlt: string
  paragraph: string
}

const AnimatedLine: React.FC<{ startX: number; endX: number; maxWidth: number }> = ({ startX, endX, maxWidth }) => {
  const width = Math.min(endX - startX, maxWidth) // Set maximum width based on maxWidth

  return (
    <motion.div
      className="absolute left-0 top-1/3 h-0.5 bg-white"
      style={{
        width: `${width}px`,
        left: `${startX}px`,
        transform: "translateY(2750%)",
        display: width > 0 ? "block" : "none",
      }}
      transition={{ duration: 1 }}
    />
  )
}

const PromiseCard: React.FC<PromiseCardProps> = ({ heading, imageUrl, imageAlt, paragraph }) => {
  return (
    <div className="relative !mx-auto flex !content-center justify-center">
      <div className="relative mt-8 rounded-md bg-gradient-to-r from-[#0077E5] to-[#9DFF74] p-px md:max-w-[260px]">
        <div className="relative flex items-center justify-center rounded-md bg-[#020C15]">
          <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-full">
            <div className="rounded bg-gradient-to-r from-[#0077E5] to-[#9DFF74] p-px">
              <div className="rounded-md bg-[#020C15] p-4 text-white">
                <Image src={imageUrl} width={30} height={30} alt={imageAlt} />
              </div>
            </div>
          </div>
          <div className="mt-8 h-72 px-4 py-4 md:px-6 2xl:h-80">
            <h5 className="text-sm font-medium text-white md:text-xl">{heading}</h5>
            <p className=" py-3 text-xs text-white/80 md:text-sm 2xl:text-base">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const WhatWePromise: React.FC = () => {
  const firstCardRef = useRef<HTMLDivElement>(null)
  const lastCardRef = useRef<HTMLDivElement>(null)
  const [lineStartX, setLineStartX] = useState<number>(0)
  const [lineEndX, setLineEndX] = useState<number>(0)
  const [maxWidth, setMaxWidth] = useState<number>(1000) // Initial maximum width
  const [viewportWidth, setViewportWidth] = useState<number>(0)

  useEffect(() => {
    // Check if window is defined before accessing it
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth) // Set initial viewport width on mount
      const handleResize = () => {
        setViewportWidth(window.innerWidth)
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (firstCardRef.current && lastCardRef.current) {
      const firstCardRect = firstCardRef.current.getBoundingClientRect()
      const lastCardRect = lastCardRef.current.getBoundingClientRect()
      setLineStartX(260) // Set startX to 0
      setLineEndX(lastCardRect.left)
      // Adjust maximum width based on viewport width
      if (viewportWidth <= 1660) {
        setMaxWidth(1000)
      } else if (viewportWidth <= 1440) {
        setMaxWidth(700)
      } else {
        setMaxWidth(1100)
      }
    }
  }, [firstCardRef.current, lastCardRef.current, viewportWidth])

  return (
    <>
      <h2 className="h4 my-2 mt-4 text-left font-medium text-white lg:my-0 lg:mt-8">Our USP</h2>
      <div className="relative grid grid-cols-2 !content-center items-center justify-center gap-6 py-6 sm:grid-cols-2  lg:flex lg:flex-nowrap lg:justify-between  lg:gap-0">
        <div ref={firstCardRef}>
          <PromiseCard
            heading="Industry-leading curriculum
            "
            imageUrl="/images/book-1.svg"
            imageAlt="Book"
            paragraph="All our courses follow industry-leading curriculum to ensure the most advanced training for our learners. We update our curriculum at regular intervals to ensure updated training programs. 
            "
          />
        </div>
        {viewportWidth > 1020 && lineEndX > 0 && lineStartX > 0 && (
          <AnimatedLine startX={lineStartX} endX={lineEndX} maxWidth={maxWidth} />
        )}
        <div>
          <PromiseCard
            heading="Live mentorship by industry experts

            "
            imageUrl="/images/online-youtube-course-1.svg"
            imageAlt="Youtube"
            paragraph="We offer live classes by industry experts in both offline and online modes to ensure personalised mentorship for each course. "
          />
        </div>
        <div>
          <PromiseCard
            heading="Capstone projects            "
            imageUrl="/images/projects-1.svg"
            imageAlt="Project"
            paragraph="Our courses are backed by industry-relevant capstone projects that help our learners develop real-world skills through practical training."
          />
        </div>
        <div ref={lastCardRef}>
          <PromiseCard
            heading="Placement Assistance"
            imageUrl="/images/job-1.svg"
            imageAlt="Book"
            paragraph="We are backed by a long roster of placement partners that enable us to support our learners with 100% placement assistance. We also conduct mock interview sessions and communication classes to help them crack job interviews like a pro."
          />
        </div>
      </div>
    </>
  )
}

export default WhatWePromise
