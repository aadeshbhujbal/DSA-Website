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
    <Section className="course_description1 !m-2 !my-8 !p-0 md:!m-4 md:!mx-8 xl:!m-0">
      <Container className=" relative bg-[#f5f5f5] !p-0 md:-inset-y-14 md:!max-w-[1200px] md:rounded-md md:!shadow-xl  xl:-inset-y-12 2xl:!max-w-[1400px]">
        {courseDescriptionData.map((item) => {
          const id = uuidv4()
          return (
            <div
              className="course_description flex flex-wrap justify-evenly gap-1  py-6 text-black md:px-8  lg:flex-row"
              key={`${id}-${item.duration}`}
            >
              <div className="my-3  max-w-40  basis-2/4 self-center  rounded-lg border border-[#d1cdcd] py-2 text-center shadow-lg md:my-0 md:basis-auto   md:border-none md:py-0 md:shadow-none ">
                <p>{item.durationText}</p>
                <h5 className="text-lg font-bold">{item.duration}</h5>
              </div>
              <div className="my-3 max-w-40  basis-2/4  self-center  rounded-lg border border-[#d1cdcd] py-2 text-center shadow-lg md:my-0 md:basis-auto  md:border-none md:px-0 md:py-0 md:shadow-none">
                <p>{item.placementSupportText}</p>
                <h5 className="text-lg font-bold">{item.placementSupport}</h5>
              </div>
              <div className="my-3 max-w-40   basis-2/4  rounded-lg border border-[#d1cdcd]  py-2 text-center shadow-lg  md:my-0 md:basis-auto  md:border-none md:py-0 md:shadow-none">
                <p>{item.easyEMIText}</p>
                <h5 className="text-lg font-bold">{item.easyEMI}</h5>
              </div>
              <div className="my-3 max-w-40  basis-2/4  rounded-lg border border-[#d1cdcd]  py-2 text-center shadow-lg md:my-0 md:basis-auto  md:border-none md:py-0 md:shadow-none">
                <p>{item.classModeText}</p>
                <h5 className="text-lg font-bold">{item.classMode}</h5>
              </div>
              <div className="my-3   basis-3/4  rounded-lg border border-[#d1cdcd] py-2 text-center shadow-lg md:my-0 md:basis-auto  md:border-none md:py-0 md:shadow-none">
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
