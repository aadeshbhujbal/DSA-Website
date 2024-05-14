import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { FaqItemProps } from "@/types"

interface FaqsProps {
  faqs: FaqItemProps[]
}

const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
  return (
    <Section className="!p-0">
      <Container>
        <h2 className="h3 py-2 text-center !font-normal text-black">Any Doubts? Let’s Clear</h2>
        <Accordion type="single" collapsible className="flex w-full flex-wrap" defaultValue="0">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full p-2 md:w-1/2">
              <AccordionItem value={index.toString()} className="w-full rounded-lg border px-4">
                <AccordionTrigger className="self-start text-left">{faq.title}</AccordionTrigger>
                <AccordionContent className="self-start text-left">{faq.content}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}

export default Faqs
