"use client"
import Link from "next/link"
import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { skillupCourses } from "@/constants"
import { DurationIcon } from "@/constants/icons"

function SkillupCourses() {
  const colors = ["#ff9933", "#f52b02", "#00d1b9", "#b200f2", "#3977D4"]

  // State to store the currently hovered card index
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <Section className="!p-0">
      <h2 className="h4 my-4 px-8 pb-2 text-center !font-medium text-black sm:px-0">
        Upskill yourself with our free courses
      </h2>
      <Container className="bg-grid-black/[0.05] sm:!p-0">
        <div className="sm:p-1  md:p-6">
          <div className="mx-auto flex w-full max-w-7xl flex-row flex-wrap items-center justify-center gap-4 overflow-hidden rounded-md py-8 sm:gap-8 sm:p-4 ">
            {skillupCourses.map((item, index) => {
              const colorIndex = index % colors.length
              const bgColor = colors[colorIndex]
              const id = uuidv4()
              return (
                <Link href={item.course_Link} className="w-full sm:w-[320px]" key={`${id}-${item.course_Name}`}>
                  <Card
                    className="border-2 p-6 pr-0 transition-colors duration-300 "
                    style={{
                      borderColor: hoveredIndex === index ? bgColor : "transparent",
                      transition: "border-color 0.3s ease-in",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative pr-6">
                      <h6 className="body-medium relative mb-6 h-12 max-w-[250px] justify-center self-center !font-medium ">
                        {item.course_Name}
                      </h6>
                      <div
                        className="absolute left-[-1.53rem] top-0 h-full w-2"
                        style={{ backgroundColor: bgColor }}
                      ></div>
                    </div>{" "}
                    <hr />
                    <div className="mt-6 flex flex-row gap-2 !pl-0">
                      <DurationIcon />
                      <p className="small-regular self-center">{item.course_Duration}</p>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default SkillupCourses
