"use client"
import React from "react"
import { Container } from "@/components/ui/Container"

import { Section } from "@/components/ui/Section"
import { VerticalTabs, VerticalTabsList, VerticalTabsTrigger } from "@/components/ui/VerticalTabs"
import tabs from "./content"

const Termscondition = () => {
  const [selectedTab, setSelectedTab] = React.useState("cybersecurity")
  const handleTabClick = (index: React.SetStateAction<string>) => {
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

  return (
    <Section>
      <Container>
        <div className="flex flex-col ">
          <div>
            <h6 className="h3 !font-mediumbold">Terms & Conditions</h6>
          </div>
          <div className="my-10 max-w-7xl  md:my-10 lg:my-16 ">
            <VerticalTabs defaultValue="1" className="flex w-full flex-col !p-0 md:flex-row">
              <div className="w-full md:w-[250px]">
                {" "}
                <VerticalTabsList className="custom-scrollbar  flex h-16 w-full scroll-mb-3.5 flex-row !items-start gap-1 overflow-scroll bg-transparent  sm:h-auto md:flex-col  md:gap-4 lg:max-w-60 ">
                  {tabs.map((tab) => (
                    <VerticalTabsTrigger
                      key={tab.key}
                      value={tab.key}
                      variant="tab2"
                      className="!bg-transparent !p-2 lg:!p-3 "
                      onClick={() => handleTabClick(tab.key)}
                    >
                      {tab.label}
                    </VerticalTabsTrigger>
                  ))}
                </VerticalTabsList>
              </div>

              <div className="h-[calc(90vh-16rem)] overflow-y-auto md:w-2/3 " id="right-panel-container">
                {tabs.map((tab) => (
                  <div id={`section-${tab.key}`} className="md:mb-8" key={tab.key}>
                    <h2 className="pb-2 text-2xl font-bold text-black md:pb-4">{tab.label}</h2>
                    <p className="text-black">{tab.content}</p>
                  </div>
                ))}
              </div>
            </VerticalTabs>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Termscondition
