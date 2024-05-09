"use client"
import Image from "next/image"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Button from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { RightChevron } from "@/constants/icons"
import { Trainers } from "@/types"
import "swiper/css"
import "swiper/css/pagination"

const TrainerCarousel: React.FC<{ trainerDetails: Trainers[] }> = ({ trainerDetails }) => {
  return (
    <Section className=" !pt-0 bg-grid-black/[0.05]">
      <Container className="!max-w-full !p-0 ">
        <h2 className="h4  pt-2 text-center !font-medium text-black lg:py-6">
          Get interactive classes by industry experts
        </h2>
        <div className="noise-bg py-1">
          <div className=" mx-auto lg:max-w-6xl">
            <Swiper
              parallax={true}
              spaceBetween={30}
              centeredSlides={true}
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
            >
              {" "}
              {trainerDetails.map((trainer, index) => {
                return (
                  <SwiperSlide key={trainer.id}>
                    <Card className="!m-8 flex max-w-4xl  flex-col gap-4 rounded-lg border-none p-6 shadow-lg sm:flex-row lg:!mx-auto">
                      <div className="self-center">
                        <Image
                          src={trainer.trainer_Image}
                          alt={`${trainer.trainer_Name} - "Industry Experts"`}
                          width={360}
                          height={360}
                          className=" w-full max-w-60 md:w-auto"
                        />
                      </div>
                      <div className="">
                        <h4 className="h5  !font-medium text-black">{trainer.trainer_Name}</h4>
                        <p className="small-regular text-[#404040]">{trainer.trainer_Designation}</p>
                        <p className="base-regular py-3">{trainer.trainer_Bio}</p>
                        <div className=" flex flex-col gap-4 sm:flex-row">
                          <div className="">
                            <Button
                              className="rounded-md border-link"
                              href={trainer.slug}
                              target="_blank"
                              size={"default"}
                              variant={"outline"}
                            >
                              {" "}
                              View Profile <RightChevron className="ml-2" />
                            </Button>
                          </div>
                          <div className="flex flex-row gap-2">
                            <Image
                              src={"/images/linkedin.png"}
                              className="self-center"
                              alt={"Trainer"}
                              width={45}
                              height={45}
                            />
                            <div className="small-regular slef-center">
                              Explore {trainer.trainer_Name} <br /> on{" "}
                              <Link className="text-link underline" href={trainer.trainer_linkinUrl}>
                                Linked In
                              </Link>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default TrainerCarousel
