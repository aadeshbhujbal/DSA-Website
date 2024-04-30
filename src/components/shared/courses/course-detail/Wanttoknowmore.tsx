import Image from "next/image"
import React from "react"
import DownloadBrochure from "@/components/forms/courseForm/DownloadBrochureForm"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"

import { Section } from "@/components/ui/Section"

interface WantToknowmoreProps {
  title?: string
  description?: string
  buttonText?: string
  downloadBrochureLink?: any
}

const Wanttoknowmore: React.FC<WantToknowmoreProps> = ({ buttonText, downloadBrochureLink }) => {
  return (
    <Section className="!py-0">
      <Container className="want_to_know_more_shadow rounded-t-xl bg-[#f5f5f5] !p-0 lg:max-w-[1200px]  ">
        <div className="flex flex-col md:flex-row">
          <div className="basis-3/5 self-center px-16">
            <h2 className="h4 pb-4 text-left !font-medium text-black">Want to know more?</h2>
            <p className="base-regular ">
              Explore detailed course descriptions and outlines in our brochure. Download now for comprehensive
              information on our offerings.
            </p>
            <DownloadBrochure
              pdfLocation={downloadBrochureLink}
              buttonComponent={
                <Button size="large" variant="primary" className="my-4">
                  {buttonText}
                </Button>
              }
            />
            {/* <Button variant={"primary"} size="large" className="my-4">
              DownLoad Brochure
            </Button> */}
          </div>

          <div className=" mx-auto justify-center">
            <Image src="/images/brochure.png" alt="Brochure" width={250} height={150}></Image>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Wanttoknowmore
