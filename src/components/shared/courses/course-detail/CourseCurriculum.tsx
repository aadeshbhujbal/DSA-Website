"use client"
import Image from "next/image"
import React, { useState } from "react"
import HeroForm from "@/components/forms/courseForm/HeroForm"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { BookIcon } from "@/constants/icons"
import { CourseModule } from "@/types"

interface CurriculumItemProps {
  hours?: number
  assignments?: number
  skills?: number
  curriculumData: CourseModule[]
}

const CourseCurriculum: React.FC<CurriculumItemProps> = ({ curriculumData, hours, assignments, skills }) => {
  const [isFullView, setIsFullView] = useState(false)

  const toggleFullView = () => {
    setIsFullView(!isFullView)
  }

  return (
    <Section className="courses_background !p-0">
      <Container className="text-black">
        <h2 className="h4 py-2 text-left !font-medium text-black">Curriculum designed by experts</h2>
        <div className="flex flex-col gap-4 self-center md:flex-row lg:gap-6 2xl:gap-12">
          <div className=" basis-8/12">
            <Card className="mb-2 flex  flex-col justify-between gap-4 rounded-md p-4 shadow-lg sm:flex-row sm:px-6 sm:py-4">
              <div className="flex items-center gap-2">
                <BookIcon /> <span>{hours}+ Hours of learning</span>
              </div>
              <div className="flex items-center gap-2">
                <BookIcon />
                <span> {assignments}+ Assignments & Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <BookIcon />
                <span> {skills}+ Skills & Tools</span>
              </div>
            </Card>
            <Card className={`overflow-scroll rounded-md p-2 shadow-lg sm:px-6 ${isFullView ? "h-min" : "h-[430px]"}`}>
              <Accordion type="single" collapsible defaultValue="0">
                {curriculumData.map((item, index) => {
                  return (
                    <div className="" key={item.module}>
                      {item.type === "test" ? (
                        <div>
                          <div className="flex flex-row gap-3 rounded-lg border px-2 py-4 md:p-4">
                            <Image src="/images/point.png" alt="" width={10} height={10} className="self-center" />{" "}
                            <p className="font-medium hover:underline">{item.module}</p>
                          </div>
                        </div>
                      ) : (
                        <AccordionItem value={index.toString()} className="my-2 w-full rounded-lg border px-2 sm:px-4">
                          <AccordionTrigger className="">
                            <div className="flex flex-row gap-3">
                              <Image src="/images/point.png" alt="" width={10} height={10} className="self-center" />{" "}
                              <p>{item.module}</p>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="point-icon-list ml-4 rounded-lg bg-slate-100 p-4 ">
                              {item.submodule?.map((sub) => (
                                <li key={sub.title}>
                                  {sub.title}
                                  {sub.subtitle && (
                                    <ul className="no-list rounded-lg bg-[#F7F9FB]">
                                      {sub.subtitle.map((subtitle) => (
                                        <li key={subtitle}>{subtitle}</li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                    </div>
                  )
                })}
              </Accordion>
            </Card>
            <Card className="rounded-md p-4">
              {!isFullView ? (
                <p className="cursor-pointer text-blue-500 hover:underline" onClick={toggleFullView}>
                  View Full Curriculum
                </p>
              ) : (
                <p className="cursor-pointer text-blue-500 hover:underline" onClick={toggleFullView}>
                  View Short Curriculum
                </p>
              )}
            </Card>
          </div>
          <div className="column1 sticky top-0 mx-auto basis-auto justify-center text-left ">
            <HeroForm title="Interesting?" subtitle="Request a call back for more Information" />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default CourseCurriculum
