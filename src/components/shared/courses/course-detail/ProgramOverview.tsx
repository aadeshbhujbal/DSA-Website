"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { TickIcon } from "@/constants/icons"
import { ProgramOverviewProps } from "@/types"
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const ProgramOverview: React.FC<ProgramOverviewProps> = ({
  title,
  description,
  items,
  videoUrl,
  addOnsLink,
  videoPlaceholder,
}) => {
  return (
    <Section className=" !pt-0 xl:mt-0">
      <Container className="!pt-0">
        <div className="flex flex-col md:flex-row">
          <div className="basis-3/5">
            <h2 className="h4 pb-4 text-left !font-medium text-black">{title}</h2>
            <p className="base-medium p max-w-xl">{description}</p>
            <ul className="my-4 flex flex-col gap-3 lg:flex-col">
              {items.map((item) => (
                <li key={item.id} className="small-medium flex items-center text-black">
                  <TickIcon title={item.title} titleId={item.id} className="mr-2 " />
                  {item.content}
                </li>
              ))}
            </ul>
            <p className="base-regular">
              *Boost your Competitive Edge with our{" "}
              <Link href={addOnsLink} className="text-link">
                Power Add-ons.
              </Link>
            </p>
          </div>
          <div className="">
            <h2 className="h5 pb-4 text-left !font-medium text-black">See Course Preview Video</h2>
            <ReactPlayer
              playIcon={
                <Image width={50} height={50} alt="Play button" style={{ maxWidth: "80px" }} src="/images/play-1.png" />
              }
              light={videoPlaceholder}
              url={videoUrl}
              controls={true}
              width={350}
              height={250}
              style={{ border: "1px solid " }}
              className=" !rounded-xl "
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ProgramOverview
