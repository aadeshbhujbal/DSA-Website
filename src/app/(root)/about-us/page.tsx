"use client"

import Image from "next/image"
import React from "react"
import ReactPlayer from "react-player"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"

import { Section } from "@/components/ui/Section"
import Featured from "../(home)/homepagesections/Featured"

const AboutUs = () => {
  return (
    <Section className="!pt-0">
      <Container className="!max-w-full !p-0">
        <div className="w-full !max-w-full bg-black">
          <div className="container flex max-w-screen-2xl  flex-col py-16 md:flex-row">
            <div className="flex basis-3/5 flex-col gap-3 md:gap-5  ">
              <h3 className="h3  text-white">EdTech Pioneers:</h3>
              <p className="h4 text-white">Transforming Online Education</p>
              <p className="text-white">
                We pride ourselves on being the leading EdTech powerhouse in India, dedicated to revolutionizing higher
                education. Through cutting-edge technology, innovative pedagogy, strategic industry partnerships, and a
                team of esteemed faculty, we craft unparalleled online learning journeys for students worldwide.
              </p>
              <Button variant={"default"} href="" size="medium" className="mt-2 w-full  max-w-[250px]">
                Join Our Team{" "}
              </Button>
            </div>
            <div className="mx-auto flex justify-center self-center py-8 sm:py-0">
              <ReactPlayer
                playIcon={
                  <Image
                    width={50}
                    height={50}
                    alt="Play button"
                    style={{ maxWidth: "80px" }}
                    src="/images/play-1.png"
                  />
                }
                light="/images/video.png"
                url="/videos/get-started.mp4" // Replace with your video URL
                controls={true}
                width={320}
                height={250}
                style={{ border: "1px solid " }}
                className=" !rounded-xl "
              />
            </div>
          </div>
        </div>

        <Container>
          <div className="grid grid-cols-1  gap-8 py-10 md:grid-cols-2 lg:px-10">
            <div className="flex justify-center">
              <Image
                src={"/images/our-mission.png"}
                alt={"our-mission"}
                width={500}
                height={400}
                className="lg:w-[550px] "
              />
            </div>
            <div className="  flex items-center">
              <div className="flex flex-col gap-2 md:gap-5 md:pr-4">
                <p className="h2">Our Mission</p>
                <p>
                  Our mission is clear: to redefine the landscape of online education through innovative EdTech
                  solutions. We are dedicated to empowering learners globally by providing access to world-class online
                  learning experiences, regardless of geographical or economic barriers. Our goal is to inspire, engage,
                  and support students on their educational journey, equipping them with the skills and knowledge they
                  need to thrive in an ever-evolving world. Through our relentless pursuit of excellence, we aim to
                  shape the future of online learning and make a lasting impact on society.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8">
            <div className="flex items-center justify-center text-center">
              <p className="h2">Meet Our Top Management Team</p>
            </div>
            <div className="flex justify-evenly">
              <div className="grid grid-cols-1 gap-x-20 gap-y-8 py-12 md:grid-cols-2 lg:grid-cols-3 ">
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
                  <p className="h4 " style={{ fontWeight: "500" }}>
                    Samiran Santra
                  </p>
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
                  <p className="h4" style={{ fontWeight: "500" }}>
                    Moutuli Mitra
                  </p>
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
                  <p className="h4" style={{ fontWeight: "500" }}>
                    Partha Jana
                  </p>
                  <p>Chief Operating Officer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-6">
            <div className="flex justify-center text-center">
              <p className="h2">Award And Recognitions</p>
            </div>
          </div>
        </Container>
        <Featured />
      </Container>
    </Section>
  )
}

export default AboutUs
