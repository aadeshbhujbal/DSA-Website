"use client"
import React from "react"
import { Bar, BarChart, Cell, LabelList, Tooltip, XAxis } from "recharts"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

interface WhycourseProps {
  title1: string
  content1: string
  title2: string
  content2: string
  graphData: { name: string; range: number; label: string }[]
}
const getIntroOfPage = (label: string, data: { name: string; range: number; label: string }[]) => {
  const entry = data.find((item) => item.name === label)
  return entry ? entry.label : ""
}

const CustomTooltip = ({ active, payload, label, data }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${getIntroOfPage(label, data)}`}</p>
      </div>
    )
  }

  return null
}

const WhyCourse: React.FC<WhycourseProps> = ({ title1, content1, title2, content2, graphData }) => {
  const colors = ["#3B82F6", "#F59E0B", "#1AAA03", "#14B8A6", "#0A0A0A"]

  return (
    <Section className="!p-0">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="h5 !font-medium">{title1}</h3>
            <p className="p max-w-lg pt-4">{content1}</p>
          </div>
          <div className="flex basis-1/2 flex-col md:flex-row ">
            <div className="flex flex-col">
              <h3 className="h5 !font-medium">{title2}</h3>
              <p className="p pt-2">{content2}</p>
            </div>
            <div className="my-5 ">
              <BarChart
                width={320}
                height={200}
                data={graphData}
                margin={{
                  top: 50,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <Tooltip content={<CustomTooltip data={graphData} />} />
                <Bar dataKey="range" label={"label"} fill="#8884d8" barSize={65}>
                  <LabelList dataKey="label" position="top" fontSize={14} />
                  {graphData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
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

export default WhyCourse
