import Image from "next/image"
import React from "react"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

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
interface Herobackground {
  [key: string]: string
}
const herobackground: Herobackground = {
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  Height: "100%",
}

const HeroCourseMaster: React.FC<HeroProps> = ({
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
  const inlineStyles = {
    ...herobackground,
    backgroundImage: `url(${backgroundImage})`,
    background,
  }
  return (
    <Section className="!p-0">
      <div className=" !flex  h-full " style={inlineStyles}>
        <Container className=" self-center">
          <div className="flex flex-col md:gap-8 lg:flex-row lg:py-16 ">
            <div className=" !basis-3/5 self-center  text-white ">
              <h1 className="h2 my-3  !font-medium lg:!text-6xl 2xl:text-7xl ">{heading}</h1>
              <p className="body-medium my-3 2xl:my-6  2xl:text-2xl ">{subheading}</p>
              <p className="base-medium my-3 2xl:my-6 2xl:text-xl">{paragraph}</p>
              <div className="my-3 flex flex-row gap-2 2xl:my-4">
                <Image src={"/images/star1.png"} className="size-6 self-center" alt="Star" width={20} height={10} />
                <p className="base-medium my-3 2xl:text-xl ">{rating}</p>
              </div>
              <Button
                className="max-w-[250px] md:max-w-[350px] 2xl:text-lg "
                variant={"default"}
                size="large"
                href={buttonLink}
              >
                {buttonText}
              </Button>
              <div className="mt-4 flex  gap-4  text-white lg:my-6">
                <span className="h6 self-center text-xl 2xl:text-2xl">
                  DataSpace <br /> Academy Reviews
                </span>
                <Image
                  src={"/images/rating.png"}
                  width={130}
                  height={100}
                  alt={rating}
                  className="w-auto max-w-[155px] 2xl:max-w-96"
                />
              </div>
            </div>
            <div className="mx-auto basis-2/5 self-center lg:max-w-[450px]">{children}</div>
          </div>
        </Container>
      </div>
    </Section>
  )
}

export default HeroCourseMaster
