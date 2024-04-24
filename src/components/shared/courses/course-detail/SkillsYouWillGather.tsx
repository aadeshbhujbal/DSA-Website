import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { TickIcon } from "@/constants/icons"
import React from "react"

interface Skill {
  title: string
  id: string
}

interface SkillsProps {
  skills: Skill[]
}

const SkillsYouWillGather: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section className="bg-gradient-radial">
      <Container className="">
        <h2 className="h4 py-4 text-center !font-medium text-white">Skills you will gather</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          {skills.map((item, index) => (
            <div key={index} className="flex items-center rounded-md border-[#06101B] bg-[#01080E] p-4 text-white">
              <TickIcon title={item.title} titleId={item.id} className="mr-2" />
              <p className="">{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default SkillsYouWillGather
