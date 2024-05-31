import Image from "next/image"
import React from "react"

import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { TickIcon } from "@/constants/icons"

const DownloadApp = () => {
  return (
    <Section className="!p-0">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:gap-2 md:flex-row">
          <div className="self-center">
            <h2 className="h4 my-4 text-left !font-medium text-black">
              More convenient learning experience with DSA learning app
            </h2>
            <ul className="my-4 grid gap-y-2">
              <li className="flex items-center ">
                <TickIcon title="Easy apply for trending jobs" titleId="easyApply" className="mr-2" />
                Easy learning on-the-go from anywhere
              </li>
              <li className="flex items-center ">
                <TickIcon title="Get the best learning experience" titleId="learningExperience" className="mr-2" />
                Connect with mentors from anywhere
              </li>
              <li className="flex items-center ">
                <TickIcon title="Enroll free skill-up courses" titleId="freeCourses" className="mr-2" />
                Keep track of classes
              </li>
            </ul>
            <Button variant={"default"} size={"large"}>
              Download the app now
            </Button>
          </div>
          <div className="">
            <Image src={"/images/mobile.png"} alt="Dataspace Academy App" width={400} height={400} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default DownloadApp
