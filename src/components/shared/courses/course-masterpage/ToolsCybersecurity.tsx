import Image from "next/image"
import React from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"


interface ToolsCybersecurityProps {
  imageFilenames: string[]
}

const ToolsCybersecurity: React.FC<ToolsCybersecurityProps> = ({ imageFilenames = [] }) => {
  return (
    <Section className=" !p-0">
      <Container className="text-black">
        <h2 className="h4 py-2 text-center !font-medium text-black">Tools we’ve got you covered</h2>
        <div className="mx-auto flex max-w-screen-sm flex-row flex-wrap justify-center gap-6 py-3 ">
          {imageFilenames.map((filename) => (
            <div key={filename}>
              <Image src={`/images/tools/${filename}`} alt={filename} width={150} className="!w-28 p-2" height={150} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default ToolsCybersecurity
