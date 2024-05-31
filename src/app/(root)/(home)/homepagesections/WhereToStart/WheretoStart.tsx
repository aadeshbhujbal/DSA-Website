import Image from "next/image"
import React from "react"
import Quiz from "@/components/shared/Quiz/Quiz"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

const WheretoStart = () => {
  return (
    <>
      <Section className=" grid_with_linear_gradient hidden !p-0 !py-16  md:block">
        <Container className="mx-auto max-w-screen-xl 2xl:max-w-screen-lg ">
          <div className="coufused-start-bg mx-auto flex flex-row">
            <div className="basis-4/6 self-center px-20 py-11 lg:pl-28  2xl:pl-20">
              <h2 className="h4 py-2 text-left !font-medium text-white">Confused about where to start?</h2>
              <p className="base-regular mx-auto pb-6 text-left text-white sm:pb-2 md:max-w-2xl 3xl:max-w-6xl">
                No worries! We have your back.
                <br />
                Just take our AI-powered test to assess your aptitude and current skills. The AI algorithm will evaluate
                your skill level, goals, and interests, and recommend the most compatible course for you.
              </p>
              <Quiz
                buttonComponent={
                  <Button variant={"default"} href="" size="medium" className="mt-5 w-full  max-w-[250px]">
                    Take A Skill Test
                  </Button>
                }
              />
            </div>
            <div className=" w-full basis-2/6 self-center">
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
      <Section className=" grid_with_linear_gradient !p-0">
        <Container className="mx-auto  md:hidden ">
          <div className="coufused-start-bg-mobile mx-auto flex flex-col p-4">
            <Image
              src={"/images/question-illustration.svg"}
              className="self-center"
              alt="DataSpace Academy Video"
              width={250}
              height={220}
            />
            <h2 className="h6 py-2 text-left !text-xl !font-medium text-white">Confused about where to start?</h2>
            <p className="small-medium  max-w-xs pb-2 text-left text-white">
              Take our AI-powered hands-on skills test to assess your current abilities and discover where you stand
              today. Our AI Algorithm will evaluate your proficiency in key areas and provide personalized
              recommendations based on your interests and goals.
            </p>

            <Quiz
              buttonComponent={
                <Button variant={"default"} href="" size="medium" className="mt-5 w-full  max-w-[250px]">
                  Take A Skill Test
                </Button>
              }
            />
          </div>
        </Container>
      </Section>
    </>
  )
}

export default WheretoStart
