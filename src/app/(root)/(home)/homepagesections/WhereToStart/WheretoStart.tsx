import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import Button from "@/components/ui/button"
import Image from "next/image"
import React from "react"

const WheretoStart = () => {
  return (
    <>
      <Section className=" grid_with_linear_gradient !p-0">
        <Container className="mx-auto max-w-screen-xl ">
          <div className="coufused-start-bg mx-auto flex flex-row">
            <div className="basis-4/6 self-center px-20 py-11">
              <h2 className="h4 py-2 text-left !font-medium text-white">Confused about where to start?</h2>
              <p className="mx-auto pb-6 text-left text-white sm:pb-2 md:max-w-2xl 3xl:max-w-6xl">
                Take our AI-powered hands-on skills test to assess your current abilities and discover where you stand
                today. Our AI Algorithm will evaluate your proficiency in key areas and provide personalized
                recommendations based on your interests and goals.
              </p>
              <Button variant={"default"} href="" size="medium" className="mt-5 w-full  max-w-[250px]">
                Take A Skill Test
              </Button>{" "}
            </div>
            <div className="w-full basis-2/6 self-center">
              <Image
                src={"/images/question-illustration.svg"}
                className="self-center"
                alt="DataSpace Academy Video"
                width={350}
                height={350}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default WheretoStart
