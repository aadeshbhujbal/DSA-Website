import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import Button from "@/components/ui/button"
import Image from "next/image"
import React from "react"

interface HeroProps {
  backgroundImage: string
  heading: string
  background: string
  children?: React.ReactNode
  subheading: string
  paragraph: string
  buttonText: string
  buttonLink: string
  rating: string
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  heading,
  background,
  subheading,
  paragraph,
  buttonText,
  buttonLink,
  rating,
  children,
}) => {
  return (
    <Section className="!p-0">
      <div className="" style={{ backgroundImage: `url(${backgroundImage})`, background: `${background}` }}>
        <Container>
          <div className="flex flex-col md:gap-8 lg:flex-row">
            <div className=" !basis-3/5 text-white  2xl:max-w-4xl ">
              <h1 className="h2 my-3  !font-normal 2xl:text-7xl ">{heading}</h1>
              <p className="body-medium my-3 ">{subheading}</p>
              <p className="base-medium my-3 ">{paragraph}</p>
              <div className="my-3 flex flex-row gap-2">
                <Image
                  src={"/images/star1.png"}
                  className="size-4 self-center"
                  alt="Star"
                  width={20}
                  height={10}
                ></Image>
                <p>{rating}</p>
              </div>
              <Button className="max-w-[250px]  md:max-w-[350px]" variant={"default"} size="large" href={buttonLink}>
                {buttonText}
              </Button>
              <div className="mt-4 flex  gap-4 text-white">
                <span className="h6 text-xl">
                  DataSpace <br /> Academy Reviews
                </span>
                <Image
                  src={"/images/rating.png"}
                  width={130}
                  height={100}
                  alt={rating}
                  className="w-auto max-w-[155px]"
                />
              </div>
            </div>
            <div>{children}</div>
          </div>
        </Container>
      </div>
    </Section>
  )
}

export default Hero
