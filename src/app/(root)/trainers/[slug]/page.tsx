import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LinkedInIcon } from "@/constants/icons"
import { trainerDetails } from "@/constants/trainer"
import Rating from "../../(home)/homepagesections/Hero/Rating"

export default function Page({ params }: { params: { slug: string } }) {
  // Find the trainer details based on the provided slug
  const trainer = trainerDetails.find((trainer) => trainer.slug === params.slug)

  // If trainer not found, return a message
  if (!trainer) {
    return <div>Trainer not found!</div>
  }

  const { trainer_Name, trainer_Designation, trainer_Bio, trainer_Image, trainer_linkinUrl, tabs } = trainer

  return (
    <Section className="!pb-0">
      <Container className="!mt-20 sm:!mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-8 md:gap-1 ">
            <Image
              src={trainer_Image}
              alt={"certificate"}
              width={500}
              height={500}
              className="!max-w-full  self-center md:p-8"
            />

            <div className="flex items-center justify-center gap-4">
              {" "}
              <LinkedInIcon />
              <p>
                Explore {trainer_Name} on
                <br></br>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={trainer_linkinUrl}
                  className="linkedin_img size-12 text-link"
                >
                  Linkedin
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col  pb-10 md:gap-6 md:pb-1">
            <div className="flex flex-col gap-4 py-8">
              <p className="h2">{trainer_Name}</p>
              <p className="h5">{trainer_Designation}</p>
              <p>{trainer_Bio}</p>
            </div>
            <div className="   flex-col">
              <div className="relative mx-auto">
                <Tabs defaultValue="awards" className="flex flex-col">
                  <TabsList className="mb-6 ml-0 mr-auto  justify-start rounded-none border-b border-black bg-[#f5f5f5] py-[26px] pl-0 md:flex ">
                    <TabsTrigger
                      value="awards"
                      className=" rounded-lg  bg-[#f5f5f5] px-5 py-3 text-sm text-black data-[state=active]:bg-black data-[state=active]:text-white sm:px-10 sm:py-4 "
                    >
                      Awards
                    </TabsTrigger>
                    <TabsTrigger
                      value="skills"
                      className=" rounded-lg  bg-[#f5f5f5] px-5 py-3 text-sm text-black data-[state=active]:bg-black data-[state=active]:text-white sm:px-10 sm:py-4 "
                    >
                      Skills
                    </TabsTrigger>
                    <TabsTrigger
                      value="toolsknown"
                      className=" rounded-lg bg-[#f5f5f5] px-5 py-3 text-sm text-black data-[state=active]:bg-black data-[state=active]:text-white sm:px-10 sm:py-4 "
                    >
                      Tools Known
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="awards">
                    <ul>
                      {tabs.awards.map((award, index) => (
                        <li key={index}>{award}</li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="skills">
                    <ul>
                      {tabs.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="toolsknown">
                    <ul>
                      {tabs.toolsknown.map((tool, index) => (
                        <li key={index}>{tool}</li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-10">
        {" "}
        <Rating />
      </div>
    </Section>
  )
}

export async function generateStaticParams() {
  return trainerDetails.map((trainer) => ({
    slug: trainer.slug,
  }))
}
