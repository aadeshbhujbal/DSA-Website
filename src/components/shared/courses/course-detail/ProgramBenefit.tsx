"use client"
import Image from "next/image"
import React, { useEffect } from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Program } from "@/types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const handleSmoothScroll = (event: any) => {
  event.preventDefault()
  const targetElement = document.querySelector(event.target.getAttribute("href"))
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" })
  }
}

interface ProgramBenefitProps {
  mainProgram: Program
  addOnBenefits: Program[]
  id?: string
}

const ProgramBenefit: React.FC<ProgramBenefitProps> = ({ mainProgram, addOnBenefits, id }) => {
  const hrStyle: React.CSSProperties = {
    background: "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 85.78%)",
    height: "1px",
    width: "100%",
  }
  useEffect(() => {
    const link = document.querySelector(`a[href="#${id}"]`)
    if (link) {
      link.addEventListener("click", handleSmoothScroll)

      return () => {
        link.removeEventListener("click", handleSmoothScroll)
      }
    }
  }, [id])

  return (
    <Section className="bg-black">
      <Container className="!py-0">
        <h2 id={id} className="h4 pb-4 pt-6 text-center !font-medium text-white md:my-3 ">
          Program Benefits
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="">
            <h3 className="h5 py-2 text-white">Main Program </h3>
            <div className="mt-4 rounded-lg border !border-[#97ACCB] bg-gradient-to-b from-[#004165] via-[#061A25] to-[#000814] p-4 lg:min-h-[565px] 2xl:min-h-[535px] ">
              <div className="rounded-lg bg-gradient-to-b from-blue-500 to-transparent p-4">
                <h4 className="h4 py-4 text-white">{mainProgram.title}</h4>
                {mainProgram.duration && (
                  <p className="base-regular pb-2 text-white">Duration : {mainProgram.duration}</p>
                )}
                {mainProgram.level && <p className="base-regular pb-2 text-white">Level : {mainProgram.level}</p>}
                <div className="my-4" style={hrStyle} />
                <ul className="point-icon-list">
                  {mainProgram.points.map((point, index) => (
                    <li key={index} className="text-white">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="h5 py-2 text-white">Add-on Benefits </h3>
            <Accordion type="single" collapsible className="" defaultValue="0">
              {addOnBenefits.map((benefit, index) => (
                <div key={index} className="">
                  <AccordionItem
                    value={index.toString()}
                    className="bg-gradient my-4 rounded-lg border !border-[#63748D] from-[#030F16] via-[#020D16] to-[#000814] p-4 !pr-0 "
                  >
                    {" "}
                    <AccordionTrigger className="flex justify-between self-center   " showChevron={false}>
                      <h4 className="h5  text-white">
                        {benefit.title}{" "}
                        {benefit.subtitle && <span className="small-regular text-white/60 ">{benefit.subtitle}</span>}
                      </h4>
                      {index < 1 && (
                        <>
                          <Image
                            src="/images/recomended.png"
                            width={200}
                            height={100}
                            alt="recommended"
                            className="h-6 w-32 self-center md:h-8 md:w-44"
                          />
                        </>
                      )}
                      {index > 0 && (
                        <Image
                          src="/images/plus.png"
                          width={200}
                          height={100}
                          alt="cybersecurity"
                          className="mr-4 size-6 self-center"
                        />
                      )}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="my-4" style={hrStyle} />
                      <ul className="point-icon-list">
                        {benefit.points.map((point, index) => (
                          <li key={index} className="text-white">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ProgramBenefit
