import Image from "next/image"
import React from "react"
import Button from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChipwithLink } from "@/components/ui/ChipWithLink"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { ourPrograms } from "@/constants/constants"

const CybersecuritryCourses: React.FC<{ id?: string }> = ({ id }) => {
  const cyberSecurityProgram = ourPrograms.find((program) => program.id === 2)
  const cyberSecurityCourses = (cyberSecurityProgram?.courses ?? []) as any[]
  const colors = ["#ff9933", "#f52b02", "#00d1b9", "#b200f2", "#3977D4"]

  return (
    <Section className="courses_background !p-0">
      <Container className="text-black">
        {" "}
        <h2 id={id} className="h4 py-2 text-center !font-medium text-black">
          Explore the best cybersecurity courses
        </h2>
        <p className="mx-auto pb-6 text-center sm:pb-6 md:max-w-2xl 3xl:max-w-6xl">
          Embark on an exhilarating journey in 2023 by diving into ethical hacking. Unlock career opportunities, become
          a digital guardian, and contribute to a global community of cyber defenders.
        </p>
        <div
          className="mx-auto flex max-w-screen-xl flex-wrap justify-center gap-4
"
        >
          {cyberSecurityCourses.map((course, index) => {
            const colorIndex = index % colors.length
            const bgColor = colors[colorIndex]
            return (
              <Card
                key={index}
                className={`max-w-80 !rounded-md border-none drop-shadow-lg ${index % 2 === 0 ? "bg-white" : "bg-black"} p-6`}
              >
                <div className="relative pr-6">
                  <h3 className={`h5 relative mb-6 h-12 !font-medium ${index % 2 === 0 ? "" : "text-white"}`}>
                    {course.name}
                  </h3>
                  <div
                    className="absolute left-[-1.53rem] top-2 h-full w-1.5"
                    style={{ backgroundColor: bgColor }}
                  ></div>
                </div>
                <ChipwithLink
                  variant={"outline"}
                  href="/"
                  className={`rounded-[4px] border-none text-black ${course.chip === "Best Seller" ? "bg-[#FF934A]" : "bg-[#67DEC0]"}`}
                >
                  {course.chip}
                </ChipwithLink>
                <div className="flex flex-row gap-2 py-2">
                  <Image
                    src={index % 2 === 0 ? "/images/linear-diagram.svg" : "/images/linear-diagram-dark.png"}
                    width={20}
                    height={10}
                    alt={"Star"}
                    className="size-4 !self-center"
                  />
                  <p className={`small-semibold ${index % 2 === 0 ? "" : "text-white"}`}>{course.programLevel}</p>
                </div>
                <p className={`p small-regular py-2 ${index % 2 === 0 ? "" : "text-white"}`}>{course.description}</p>

                <div className="flex flex-row justify-start gap-6 py-2">
                  <div className="flex flex-row  gap-2">
                    <Image
                      src={index % 2 === 0 ? "/images/linear-clock.png" : "/images/linear-clock-dark.png"}
                      className="size-4 !self-center"
                      width={16}
                      height={16}
                      alt="Clock"
                    />
                    <span className={`small-semibold ${index % 2 === 0 ? "" : "text-white"}`}>{course.duration}</span>
                  </div>
                  <div className="flex flex-row gap-1">
                    <Image
                      src={index % 2 === 0 ? "/images/booksaved.png" : "/images/booksaved-dark.png"}
                      className="size-4 !self-center"
                      width={16}
                      height={16}
                      alt="Clock"
                    />
                    <span className={`small-semibold ${index % 2 === 0 ? "" : "text-white"}`}>
                      {course.qualification}
                    </span>
                  </div>
                </div>
                <Button className="!my-2 w-full" variant="default" size="default" href={course.route}>
                  View Details
                </Button>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default CybersecuritryCourses
