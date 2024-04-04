import Image from "next/image"
import Link from "next/link"
import React from "react"
import { v4 as uuidv4 } from "uuid"
import Button from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { upcomingEvents } from "@/constants"
import { CalanderIcon } from "@/constants/icons"

const UpcomingEvents = () => {
  return (
    <Section className="!py-0">
      <Container className="bg-gradient-to-b from-[#c6ffae4d]  to-white/10 p-4 sm:!pb-4">
        <h2 className="h4 py-6 text-center !font-medium text-black sm:pt-0">Upcoming Events</h2>

        <div className="mx-auto flex w-full flex-row flex-wrap  items-center justify-center gap-8 overflow-hidden rounded-md py-4 2xl:max-w-7xl">
          {upcomingEvents.map((item) => {
            const id = uuidv4()
            return (
              <Link href={item.event_link} key={`${id}-${item.event_Name}`}>
                <Card className=" w-full sm:w-[320px]">
                  <Image
                    src={item.event_Image}
                    className="border-b-none !w-full  rounded-t-lg shadow-sm"
                    alt={`${item.event_Name} - "Industry Experts"`}
                    width={360}
                    height={360}
                  />
                  <div className="p-4">
                    <h6 className="body-medium justify-center self-center !font-medium">{item.event_Name}</h6>
                    <div className="flex flex-row gap-2 p-4 !pl-0">
                      <CalanderIcon />
                      <p className="small-regular self-center">{item.event_Date}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
        <div className="mx-auto flex flex-row justify-center">
          <Button className="mt-4 w-full max-w-[320px]" size={"large"} variant={"default"}>
            See All Events
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default UpcomingEvents
