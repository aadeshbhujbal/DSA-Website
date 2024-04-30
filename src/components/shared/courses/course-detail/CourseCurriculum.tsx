import React from "react"
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
  return (
    <Section className="courses_background !p-0">
      <Container className="text-black">
        <h2 className="h4 py-2 text-left !font-medium text-black">Curriculum designed by experts</h2>
        <div className="flex flex-col gap-4 self-center md:flex-row lg:gap-6 2xl:gap-12">
          <div className="basis-8/12">
            <Card className=" mb-2 flex flex-row justify-between gap-2 rounded-md px-6 py-2 shadow-lg">
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
            <Card className="rounded-md px-6 py-2 shadow-lg">
              {curriculumData.map((item) => {
                return (
                  <div className="" key={item.module}>
                    <Accordion type="single" collapsible>
                      {item.type === "test" ? (
                        <p>{item.module}</p>
                      ) : (
                        <AccordionItem value={`item-${item.module}`} className="w-full rounded-lg border px-4">
                          <AccordionTrigger>{item.module}</AccordionTrigger>
                          <AccordionContent>
                            <ul>
                              {item.submodule?.map((sub) => (
                                <li key={sub.title}>
                                  {sub.title}
                                  {sub.subtitle && (
                                    <ul>
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
                    </Accordion>
                  </div>
                )
              })}
            </Card>
          </div>
          <div className="sticky-column sticky mx-auto basis-auto justify-center text-center"></div>
        </div>
      </Container>
    </Section>
  )
}

export default CourseCurriculum
