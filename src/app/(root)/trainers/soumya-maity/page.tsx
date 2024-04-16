import React from "react"
import { Container } from "@/components/ui/Container"
import Image from "next/image"
import { LinkedInIcon } from "@/constants/icons"
import Rating from "../../(home)/homepagesections/Hero/Rating"


const SoumyyaMaity = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="  md:p-8 flex justify-center">
              <Image
                src={"/images/trainer-profile-picture.png"}
                alt={"certificate"}
                width={400}
                height={400}
                className="lg:!w-xl lg:max-w-[900px]"
              />
            </div>
            <div className="flex px-4 py-4 md:px-8 justify-center gap-4">
              <div>
              <LinkedInIcon />
              </div>
              <div className="flex items-center">
                <p>Explore Soumya Maity on <span>Linkedin</span></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-4 py-8">
              <p className="h2">Soumya Maity</p>
              <p className="h5">Lead Network Analyst & Cloud Support Engineer</p>
              <p>Dedicated and results-driven Lead Network Analyst & Cloud Support Engineer with over multiple of progressive experience in architecting, implementing, and optimizing robust network infrastructures and cloud solutions. Known for exceptional problem-solving abilities and a deep understanding of networking protocols and cloud technologies. Proven track record of successfully leading cross-functional teams to deliver innovative solutions that enhance efficiency, reliability, and security. Passionate about staying at the forefront of technological advancements and driving organizational growth through strategic IT initiatives.</p>
            </div>
            <div>
              p
            </div>
          </div>

        </div>
      </Container>
      <Rating header={false} />
    </div>

  )
}

export default SoumyyaMaity
