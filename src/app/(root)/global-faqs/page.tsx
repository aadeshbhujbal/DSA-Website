"use client"
import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container } from "@/components/ui/Container"
import { VerticalTabs, VerticalTabsContent, VerticalTabsList, VerticalTabsTrigger } from "@/components/ui/VerticalTabs"
import tabs from "./content"
import Rating from "../(home)/homepagesections/Hero/Rating"

const GlobalFaqs = () => {
  const [selectedTab, setSelectedTab] = React.useState("1")

  const handleTabClick = (index: string) => {
    setSelectedTab(index)
    const element = document.getElementById(`section-${index}`)
    if (element) {
      const container = document.getElementById("right-panel-container")
      if (container) {
        const offset = element.offsetTop - container.offsetTop
        container.scrollTo({
          top: offset,
          behavior: "smooth",
        })
      }
    }
  }

  // Filter the tabs array to get the content of the selected tab
  const selectedTabContent = tabs.find((tab) => tab.key === selectedTab)
  if (!selectedTabContent) {
    return null
  }
  return (
    <div>
      <section>
        <Container>
          <div className="flex justify-center pt-16 text-center">
            <p className="h2">Any Doubts? Let’s Clear</p>
          </div>
          <div className="my-10 max-w-6xl md:my-10 lg:my-16 ">
            <VerticalTabs defaultValue={selectedTab} className="flex w-full flex-col !p-0 md:flex-row">
              <div className="md:w-1/3">
                <VerticalTabsList className="custom-scrollbar flex h-16 w-full scroll-mb-3.5 flex-row !items-start gap-1 overflow-scroll bg-transparent sm:h-auto md:flex-col md:gap-4 lg:max-w-60 ">
                  {tabs.map((tab) => (
                    <VerticalTabsTrigger
                      key={tab.key}
                      value={tab.key}
                      variant="tab"
                      className="!bg-transparent !p-2 data-[state=active]:!bg-link lg:!p-3"
                      onClick={() => handleTabClick(tab.key)}
                    >
                      {tab.label}
                    </VerticalTabsTrigger>
                  ))}
                </VerticalTabsList>
              </div>

              <div className="md:w-2/3" id="right-panel-container">
                <Accordion type="single" collapsible className=" w-full " defaultValue="0">
                  {selectedTabContent.content.map((faq, index) => (
                    <div key={index} className="w-full p-2 ">
                      <AccordionItem value={index.toString()} className="w-full rounded-lg border-b px-4">
                        <AccordionTrigger className="self-start text-left font-bold text-black">
                          {faq.title}
                        </AccordionTrigger>
                        <AccordionContent className="self-start pl-2 text-left">{faq.description}</AccordionContent>
                      </AccordionItem>
                    </div>
                  ))}
                </Accordion>
              </div>
            </VerticalTabs>
          </div>
        </Container>
      </section>
      <Rating header={false} />
    </div>
  )
}

export default GlobalFaqs
