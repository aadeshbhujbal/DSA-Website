import Image from "next/image"
import React from "react"
import Rating from "@/app/(root)/(home)/homepagesections/Hero/Rating"

import { Container } from "../ui/Container"
import { Section } from "../ui/Section"

interface ThankYouProps {
  heading: string
  paragraph: string
}

const ThankYou: React.FC<ThankYouProps> = ({ heading, paragraph }) => {
  return (
    <Section className="!p-0">
      <Container className="!p-0">
        <Image src={"/thank-you.gif"} alt="Thank You" width={250} height={250} className="mx-auto" />
        <h2 className="h4 mx-auto   my-0 pl-4 text-center !font-medium text-black 2xl:text-4xl">{heading}</h2>
        <p className="mx-auto my-4 mt-0 pl-4 text-center md:max-w-5xl 2xl:text-xl 3xl:max-w-6xl">{paragraph}</p>
        <Rating header={false} />
      </Container>
    </Section>
  )
}

export default ThankYou
