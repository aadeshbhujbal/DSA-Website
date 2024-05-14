"use client"
import Image from "next/image"
import dynamic from "next/dynamic"

import React from "react"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import DataspaceCertification from "./DataspaceCertification"
import WhatWePromise from "./WhatWePromise"
import GetInTouch from "@/components/shared/GetInTouch"
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const WhyChooseDatapaceAcademy = () => {
  return (
    <>
      <div className="">
        <h2 className="h4 my-2  text-left !font-medium text-white">
          Why choose <br /> <span className="text-blue-secondary">DataSpace Academy?</span>
        </h2>
        <p className="base-regular max-w-xl  py-2 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <GetInTouch
          isheading={true}
          buttonComponent={
            <Button variant={"default"} href="" size="medium" className="mt-5 w-full  max-w-[250px]">
              Get In Touch{" "}
            </Button>
          }
        />
      </div>
      <div className="self-starat sm:ml-auto sm:self-center">
        <ReactPlayer
          playIcon={
            <Image width={50} height={50} alt="Play button" style={{ maxWidth: "80px" }} src="/images/play-1.png" />
          }
          light="/images/video.png"
          url="/videos/get-started.mp4" // Replace with your video URL
          controls={true}
          width={320}
          height={250}
          style={{ border: "1px solid " }}
          className=" !rounded-xl "
        />
      </div>
    </>
  )
}

const WhyDss = () => {
  return (
    <Section className=" relative bg-black !py-0">
      {/* <GridPattern
        className="gradient-dark-background absolute inset-0 z-[-10] size-full  fill-[#0142ac27] stroke-[#e0e5f20a] text-black"
        yOffset={0}
        interactive
      /> */}
      <Container className=" relative z-10 flex flex-col gap-4 py-12 lg:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="mx-auto flex flex-col sm:flex-row  ">
          <WhyChooseDatapaceAcademy />
        </div>
        <div className="py-4">
          <WhatWePromise />
        </div>
        <div className="">
          <DataspaceCertification />
        </div>
      </Container>
    </Section>
  )
}

export default WhyDss
