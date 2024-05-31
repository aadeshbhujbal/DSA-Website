"use client"
import Image from "next/image"
import React from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Project } from "@/types"

interface HandsonProjectProps {
  projects: Project[]
}

const HandsonProject: React.FC<HandsonProjectProps> = ({ projects }) => {
  return (
    <Section className="!max-w-full !pt-0">
      <Container className=" !max-w-full  !p-0">
        <h2 className="h4  pt-2 text-center !font-medium text-black lg:py-6">Hands On Project</h2>
        <div className="flex max-w-full flex-row ">
          <Swiper
            loop={true}
            slidesPerView={"auto"}
            centeredSlides={true}
            parallax={true}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            speed={2000}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper ease-in"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3.4,
              },
              1536: {
                slidesPerView: 4.4,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Card className=" m-4 my-10 max-w-96 p-6" key={index}>
                  <Image
                    src={project.imageUrl}
                    className="my-2 mr-auto aspect-auto h-[60px] shadow-sm"
                    alt="hands on project"
                    width={200}
                    height={200}
                  />
                  <h5 className="h5  h-16 max-w-64 !font-medium  2xl:h-16">{project.title}</h5>
                  <p className="p h-44 py-3 lg:h-44 2xl:h-56">{project.description}</p>
                  <p className="mt-0 font-bold">Tools Covered</p>
                  <div className="mt-2 flex justify-start">
                    {project.tools.map((tool, index) => (
                      <Image key={index} src={tool} alt={tool} width={52} height={52} />
                    ))}
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  )
}

export default HandsonProject
