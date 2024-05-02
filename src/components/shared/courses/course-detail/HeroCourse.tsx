import Image from "next/image"
import React, { ReactNode } from "react"
import DownloadBrochure from "@/components/forms/courseForm/DownloadBrochureForm"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

interface HeroProps {
  backgroundImage: string
  heading: string
  background?: string
  children?: React.ReactNode
  subheading: string
  paragraph: string
  buttonText: string
  buttonLink: string
  brochureText: string
  brochureLink: string

  rating: string
}
interface Herobackground {
  [key: string]: string
}

interface HeroCourseProps {
  HeroData: HeroProps[]
  children?: ReactNode
}

const herobackground: Herobackground = {
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
}
const HeroCourse: React.FC<HeroCourseProps> = ({ HeroData, children }) => {
  const inlineStyles = {
    ...herobackground,
    backgroundImage: `url(${HeroData[0]?.backgroundImage || ""})`,
    background: HeroData[0]?.background || "",
  }
  return (
    <>
      <Section className="!p-0">
        <div className=" !flex  h-[160vh] sm:h-[130vh] md:h-[140vh]  lg:!h-auto" style={inlineStyles}>
          <Container className=" lg:self-center">
            <div className="flex flex-col md:gap-8 lg:flex-row lg:py-16 ">
              <div className=" !basis-3/5 self-center  text-white ">
                <h1 className="h2 my-3  !font-medium lg:!text-6xl 2xl:text-7xl ">{HeroData[0]?.heading || ""}</h1>

                <p className="base-medium my-3 max-w-4xl 2xl:my-6 2xl:text-2xl">{HeroData[0]?.paragraph || ""}</p>
                <div className="my-3 flex flex-row gap-2 2xl:my-4">
                  <Image src={"/images/star1.png"} className="size-6 self-center" alt="Star" width={20} height={10} />
                  <p className="base-medium my-3 2xl:text-xl ">
                    {HeroData[0]?.rating || ""}
                    {}
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  {" "}
                  <Button
                    className="max-w-[250px] md:max-w-[350px] 2xl:text-lg "
                    variant={"default"}
                    size="large"
                    href={HeroData[0]?.buttonLink || ""}
                  >
                    {HeroData[0]?.buttonText || ""}
                  </Button>
                  <DownloadBrochure
                    pdfLocation={HeroData[0]?.brochureLink || ""}
                    buttonComponent={
                      <Button
                        size="large"
                        variant="outline"
                        className="max-w-[250px] !rounded-md !border-[#C17400] !bg-transparent hover:!text-[#C17400] md:max-w-[350px] 2xl:text-lg "
                      >
                        {HeroData[0]?.brochureText || ""}
                      </Button>
                    }
                  />
                </div>

                <div className="my-8 flex gap-4 text-white  lg:my-6">
                  <span className="h6 self-center text-xl 2xl:text-2xl">
                    DataSpace <br /> Academy Reviews
                  </span>
                  <Image
                    src={"/images/rating.png"}
                    width={130}
                    height={100}
                    alt={HeroData[0]?.rating || ""}
                    className=" w-auto max-w-[155px] 2xl:max-w-96"
                  />
                </div>
              </div>
              <div className="mx-auto basis-2/5 self-center lg:max-w-[450px]">{children}</div>
            </div>
          </Container>
        </div>
      </Section>
    </>
  )
}

export default HeroCourse
