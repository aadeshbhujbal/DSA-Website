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
    <Section className="course_description1 !m-4 !p-0 sm:!m-0">
      <Container className=" relative -inset-y-36 rounded-md bg-[#f5f5f5] !p-0 !shadow-xl sm:-inset-y-12 sm:max-w-[520px] md:!max-w-5xl lg:!max-w-[1200px] 2xl:!max-w-[1400px]">
        {courseDescriptionData.map((item) => {
          const id = uuidv4()
          return (
            <div
              className="course_description flex  flex-wrap justify-evenly py-6 text-black  lg:flex-row"
              key={`${id}-${item.duration}`}
            >
              <div className="my-3 basis-2/4 text-center sm:my-0 md:basis-auto">
                <p>{item.durationText}</p>
                <h5 className="text-lg font-bold">{item.duration}</h5>
              </div>
              <div className="my-3 basis-2/4 text-center sm:my-0 md:basis-auto">
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
