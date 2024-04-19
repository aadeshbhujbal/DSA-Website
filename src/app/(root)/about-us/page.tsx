import { Container } from "@/components/ui/Container"
import React from "react"
import Featured from "../(home)/homepagesections/Featured"
import Button from "@/components/ui/button"
import Image from "next/image"





const AboutUs = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="px-6 md:px-16 py-10 md:py-24 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col  gap-3 md:gap-5 ">
              <p className="h3 text-white">EdTech Pioneers:</p>
              <p className="text-white h4">Transforming Online Education</p> 
              <p className="text-white" >We pride ourselves on being the leading EdTech powerhouse in India, dedicated to revolutionizing higher education. Through cutting-edge technology, innovative pedagogy, strategic industry partnerships, and a team of esteemed faculty, we craft unparalleled online learning journeys for students worldwide.</p>    
              <Button variant={"default"} href="" size="medium" className="mt-2 w-full  max-w-[250px]">
              Join Our Team{" "}
              </Button>                 
          </div>
          <div className="flex justify-center">
            <div>

            </div>
          </div>
        </div>
      </div>
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-8 lg:px-10 pb-10">
          <div className="flex justify-center">
          <Image
                src={"/images/our-mission.png"}
                alt={"our-mission"}
                width={700}
                height={400}
                className="lg:!w-xl lg:max-w-[900px]"
              />
          </div>
          <div className="  flex items-center">
            <div className="flex flex-col gap-2 md:gap-5 md:pr-4">
              <p className="h2">Our Mission</p>
              <p>Our mission is clear: to redefine the landscape of online education through innovative EdTech solutions. We are dedicated to empowering learners globally by providing access to world-class online learning experiences, regardless of geographical or economic barriers. Our goal is to inspire, engage, and support students on their educational journey, equipping them with the skills and knowledge they need to thrive in an ever-evolving world. Through our relentless pursuit of excellence, we aim to shape the future of online learning and make a lasting impact on society.</p>
            </div>
            
          </div>
        </div>
        <div className="py-8">
          <div className="flex justify-center items-center">
            <p className="h2">Meet Our Top Management Team</p>
          </div>
          <div className="flex justify-evenly">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 py-12 ">
            <div className="flex flex-col gap-2">
              <div>
              <Image
                src={"/images/trainer-profile-picture.png"}
                alt={"certificate"}
                width={300}
                height={400}
                className="lg:!w-xl lg:max-w-[900px]"
              />
              </div>
              <p className="h4 "style={{ fontWeight: '500' }}>Samiran Santra</p>
              <p>Co-Founder and CEO</p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
              <Image
                src={"/images/trainer-profile-picture.png"}
                alt={"certificate"}
                width={300}
                height={400}
                className="lg:!w-xl lg:max-w-[900px]"
              />
              </div>
              <p className="h4" style={{ fontWeight: '500' }}>Moutuli Mitra</p>
              <p>Chief Business Development Officer</p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
              <Image
                src={"/images/trainer-profile-picture.png"}
                alt={"certificate"}
                width={300}
                height={400}
                className="lg:!w-xl lg:max-w-[900px]"
              />
              </div>
              <p className="h4" style={{ fontWeight: '500' }}>Partha Jana</p>
              <p>Chief Operating Officer</p>
            </div>

          </div>
          </div>


        </div>

        <div className="flex flex-col gap-4 ">
          <div className="flex justify-center">
            <p className="h2">Award And Recognitions</p>
          </div>

        </div>
        
      </Container>
      <Featured />
    </section>
    </div>
  )
}

export default AboutUs
