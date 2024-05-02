"use client"
import React from "react"
import { Bar, BarChart, Cell, LabelList, Tooltip, XAxis } from "recharts"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { BenefitsDataProps } from "@/types"

interface BenefitsProps {
  benefitsData: BenefitsDataProps[]
  heading?: string
  salaryTitle: string
  salaryPara: string
}

const data = [
  {
    name: "Beginner",
    range: 100,
    label: "₹3LPA - ₹6LPA",
  },
  {
    name: "Intermediate",
    range: 200,
    label: "₹8LPA - ₹10LPA",
  },
  {
    name: "Expert",
    range: 300,
    label: "₹10LPA - ₹15LPA",
  },
]
const getIntroOfPage = (label: string) => {
  if (label === "Beginner") {
    return "₹8LPA - ₹10LPA"
  }
  if (label === "Intermediate") {
    return "₹8LPA - ₹10LPA"
  }
  if (label === "Expert") {
    return "₹10LPA - ₹15LPA"
  }

  return ""
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${getIntroOfPage(label)}`}</p>
      </div>
    )
  }

  return null
}

const Benefits: React.FC<BenefitsProps> = ({ benefitsData, heading, salaryTitle, salaryPara }) => {
  const colors = ["#3B82F6", "#F59E0B", "#1AAA03", "#14B8A6", "#0A0A0A"]

  return (
    <Section className="p-0">
      <Container>
        <h2 className="h4 pb-4 text-center !font-medium text-black">{heading}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="">
            <Accordion type="single" collapsible className="flex w-full flex-wrap" defaultValue="0">
              {benefitsData.map((item, index) => (
                <div className="w-full !max-w-screen-xl p-2 " key={index}>
                  <AccordionItem
                    value={index.toString()}
                    className="w-full !max-w-screen-xl rounded-lg border bg-[#f5f5f5] px-4 !shadow-xl"
                  >
                    <AccordionTrigger className="body-medium">{item.title}</AccordionTrigger>
                    <AccordionContent>
                      <hr />
                      <div className="grid grid-cols-2 pt-2">
                        <div className="">
                          <p className="base-regular">Average salary</p>
                          <p className="body-medium font-bold">{item.salary}</p>
                        </div>
                        <div className="">
                          <p className="base-regular">Industries Hiring:</p>
                          <p className="base-medium !font-bold">{item.industries}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
          <div className="">
            <h2 className="h5 pb-4 text-left !font-medium text-black">{salaryTitle}</h2>
            <p>{salaryPara}</p>
            <div className=" my-5">
              {" "}
              <BarChart
                width={320}
                height={200}
                data={data}
                margin={{
                  top: 50,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <Tooltip content={<CustomTooltip />} />{" "}
                <Bar dataKey="range" label={"label"} fill="#8884d8" barSize={65}>
                  <LabelList dataKey="label" position="top" fontSize={14} />{" "}
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Benefits
