import Image from "next/image"
import Link from "next/link"
import { useId } from "react"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { InfiniteMoving } from "@/components/ui/InfiniteMoving"
import { Section } from "@/components/ui/Section"
import { industryExperts } from "@/constants"
import { LinkedInIcon } from "@/constants/icons"

const IndustryExperts = () => {
  const id = useId()
  return (
    <Section className=" p-0 bg-grid-black/[0.05]">
      <Container>
        <h2 className="h4 text-center !font-medium text-black">Get interactive classes by industry experts</h2>
        <div className="  relative flex w-full flex-col  items-center justify-center overflow-hidden rounded-md bg-white/60 py-4 antialiased ">
          <InfiniteMoving direction="left" speed="slow" className="">
            {industryExperts.map((item) => {
              return (
                <Card className="!w-[320px]" key={`${id}-${item.trainer_Name}`}>
                  <div className="relative">
                    <Image
                      src={item.trainer_Image}
                      className="border-b-none w-max rounded-t-lg shadow-sm"
                      alt={`${item.trainer_Name} - "Industry Experts"`}
                      width={360}
                      height={360}
                    />
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.trainer_linkinUrl}
                      className="linkedin_img absolute -bottom-5 right-5 size-12"
                    >
                      <LinkedInIcon />
                    </Link>
                  </div>

                  <div className="flex flex-col gap-4 p-4">
                    <h5 className="h5 !font-medium">{item.trainer_Name}</h5>
                    <p className="p">{item.trainer_Designation}</p>
                  </div>
                </Card>
              )
            })}
          </InfiniteMoving>
        </div>
      </Container>
    </Section>
  )
}

export default IndustryExperts
