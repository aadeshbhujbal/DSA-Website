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
          <div className=" mx-auto lg:max-w-full">
            <style>
              {`
        .swiper-pagination .swiper-pagination-bullet-active {
          width: 20px !important;
          border-radius: 20px !important;
          
        }
        `}
            </style>
            <Swiper
              parallax={true}
              spaceBetween={30}
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
              modules={[Autoplay, Pagination]}
              className="mySwiper ease-in"
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                },
              }}
            >
              {" "}
              {trainerDetails.map((trainer) => {
                return (
                  <SwiperSlide key={trainer.id}>
                    <Card className="m-4 mb-12 flex max-w-4xl flex-col gap-4 rounded-lg border-none p-4 shadow-lg sm:flex-row md:m-8 md:gap-6 md:p-6 lg:!mx-auto">
                      <div className="self-center md:basis-5/12 2xl:basis-1/3 ">
                        <Image
                          src={trainer.trainer_Image}
                          alt={`${trainer.trainer_Name} - "Industry Experts"`}
                          width={360}
                          height={360}
                          className="sm:max-w-auto !w-full max-w-80 sm:object-contain"
                        />
                      </div>
                      <div className="md:basis-7/12 2xl:basis-8/12">
                        <h4 className="h5  !font-medium text-black">{trainer.trainer_Name}</h4>
                        <p className="small-regular text-[#404040]">{trainer.trainer_Designation}</p>
                        <p className="base-regular hidden py-3 sm:block">{trainer.trainer_Bio}</p>
                        <div className=" mt-4 flex  flex-row  gap-2 md:gap-4">
                          <div className=" self-center">
                            <Button
                              className="rounded-md border-link py-0 text-xs md:py-3 md:text-sm "
                              href={trainer.slug}
                              target="_blank"
                              size={"default"}
                              variant={"outline"}
                            >
                              {" "}
                              View Profile <RightChevron className="ml-2" />
                            </Button>
                          </div>
                          <div className="flex flex-row gap-2 self-center">
                            <Image
                              src={"/images/linkedin.png"}
                              className="size-8 self-center md:size-11"
                              alt={"Trainer"}
                              width={45}
                              height={45}
                            />
                            <div className="small-regular self-center">
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
