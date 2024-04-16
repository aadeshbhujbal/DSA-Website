
import React from "react"
import { Container } from "@/components/ui/Container"
import { tabcategoryList, trainerDetailsList } from "@/constants/trainers"
import Rating from "../(home)/homepagesections/Hero/Rating"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { LinkedInIcon } from "@/constants/icons"


const Trainers = () => {
  
  return (
    <div>
      <Container>
        {" "}
        {trainerDetailsList.map(({ id, name, role, bio, tabs }) => (
          <div key={id}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <div className="  flex justify-center md:p-8">
                  <Image
                    src={"/images/trainer-profile-picture.png"}
                    alt={"certificate"}
                    width={400}
                    height={400}
                    className="lg:!w-xl lg:max-w-[900px]"
                  />
                </div>
                <div className="flex justify-center gap-4 p-4 md:px-8">
                  <div>
                    <LinkedInIcon />
                  </div>
                  <div className="flex items-center">
                    <p>
                      Explore {name} on <span>Linkedin </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  pb-10 md:gap-6 md:pb-1">
                <div className="flex flex-col gap-4 py-8">
                  <p className="h2">{name}</p>
                  <p className="h5">{role}</p>
                  <p>{bio}</p>
                </div>
                <div className="  relative flex-col">
                  <div className="relative mx-auto">
                    <Tabs defaultValue={tabcategoryList.id} className="flex flex-col">
                      <TabsList className="mx-auto mb-6  md:flex">
                        {tabcategoryList.map((category) => (
                          <TabsTrigger
                            key={category.id}
                            value={category.id}
                            className="mx-0 text-sm md:mx-2 lg:text-base xl:mx-6"
                            variant="trainertab"
                          >
                            {category.title}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {tabcategoryList.map((category) => (
                        <TabsContent key={category.id} value={category.id}>
                          {category.id === "1" && (
                            <div>
                              {tabs.awards.map((award, index) => (
                                <li key={index}>{award}</li>
                              ))}
                            </div>
                          )}
                          {category.id === "2" && (
                            <div>
                              {tabs.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                              ))}
                            </div>
                          )}
                          {category.id === "3" && (
                            <div>
                              {tabs.toolsknown.map((tool, index) => (
                                <li key={index}>{tool}</li>
                              ))}
                            </div>
                          )}
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
      <Rating header={false} />
    </div>
  )
}
export default Trainers;
