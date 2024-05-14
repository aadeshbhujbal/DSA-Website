import React from "react"
import { v4 as uuidv4 } from "uuid"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { CourseDescriptionProps } from "@/types"

interface courseDescription {
  courseDescriptionData: CourseDescriptionProps[]
}

const CourseDescription: React.FC<courseDescription> = ({ courseDescriptionData }) => {
  return (
    <Section className="course_description1 !m-6 !my-8 !p-0 md:!m-4 md:!mx-8 xl:!m-0">
      <Container className=" relative   rounded-md bg-[#f5f5f5] !p-0 !shadow-xl md:-inset-y-14 md:!max-w-[1200px]  xl:-inset-y-12 2xl:!max-w-[1400px]">
        {courseDescriptionData.map((item) => {
          const id = uuidv4()
          return (
            <div
              className="course_description flex  flex-wrap justify-evenly py-6 text-black md:px-8  lg:flex-row"
              key={`${id}-${item.duration}`}
            >
              <div className="my-3 basis-2/4 self-center text-center sm:my-0 md:basis-auto">
                <p>{item.durationText}</p>
                <h5 className="text-lg font-bold">{item.duration}</h5>
              </div>
              <div className="my-3 basis-2/4 px-4 text-center sm:my-0 md:basis-auto md:px-0">
                <p>{item.placementSupportText}</p>
                <h5 className="text-lg font-bold">{item.placementSupport}</h5>
              </div>
              <div className="my-3 basis-2/4 text-center sm:my-0 md:basis-auto">
                <p>{item.easyEMIText}</p>
                <h5 className="text-lg font-bold">{item.easyEMI}</h5>
              </div>
              <div className="my-3 basis-2/4 text-center sm:my-0 md:basis-auto">
                <p>{item.classModeText}</p>
                <h5 className="text-lg font-bold">{item.classMode}</h5>
              </div>
              <div className="my-3 basis-3/4 text-center sm:my-0 md:basis-auto">
                <p>{item.extraBenefitsText}</p>
                <h5 className="text-lg font-bold">{item.extraBenefits}</h5>
              </div>
            </div>
          )
        })}
      </Container>
    </Section>
  )
}

export default CourseDescription
