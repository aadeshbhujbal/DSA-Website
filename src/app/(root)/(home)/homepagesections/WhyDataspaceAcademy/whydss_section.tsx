import Image from "next/image"
import React from "react"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import DataspaceCertification from "./DataspaceCertification"
import WhatWePromise from "./WhatWePromise"

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
        <Button size="large" variant={"default"} className="my-4">
          Get in touch
        </Button>
      </div>
      <div className="ml-auto self-center">
        <Image
          src={"/images/video.png"}
          className="self-center"
          alt="DataSpace Academy Video"
          width={350}
          height={350}
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
        <div className="">
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
