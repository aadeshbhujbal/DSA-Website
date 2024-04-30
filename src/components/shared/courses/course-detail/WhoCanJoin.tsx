import React from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { TickIcon } from "@/constants/icons"

interface Whocanjoin {
  title: string
  id: string
}

interface SkillsProps {
  whocanJoin: Whocanjoin[]
}

const WhoCanJoin: React.FC<SkillsProps> = ({ whocanJoin }) => {
  return (
    <Section className="bg-black">
      <Container className="md:!py-0 ">
        <h2 className="h4 my-3  pb-4 text-center !font-medium text-white">Who Can Join </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2  ">
          {whocanJoin.map((item, index) => (
            <div
              key={index}
              className="flex flex-row  items-center rounded-lg border-2 !border-[#06101B]  bg-[#01080E] p-4 text-white lg:p-6"
            >
              <TickIcon title={item.title} titleId={item.id} className="mr-2 basis-2/12 sm:basis-auto" />
              <p className="">{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default WhoCanJoin
