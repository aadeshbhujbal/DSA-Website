/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"

import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import Image from "next/image"
import { VoiceFromStudentsProps } from "@/types"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const VoicesFromStudentsSlider: React.FC<{ slides: VoiceFromStudentsProps[] }> = ({ slides }) => {
  const [showPlayer, setShowPlayer] = useState(false)

  useEffect(() => {
    setShowPlayer(true)
  }, [])
  return (
    <div className="mx-auto w-full max-w-7xl ">
      <style>
        {`
        .swiper-pagination .swiper-pagination-bullet-active {
          width: 20px !important;
          border-radius: 20px !important;
        }
        `}
      </style>
      <Swiper
        loop={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={60}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        speed={2000}
        modules={[Autoplay, Pagination]}
        className="mySwiper ease-in"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1.5,
          },
        }}
      >
        {" "}
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={slide.id} style={{ width: "auto", height: "auto" }} className="lg:!max-w-3xl">
              <div className="m-8 mx-auto flex max-w-3xl flex-col gap-1 !rounded-xl md:!flex-row lg:gap-3">
                <div className="sm:mx-none mx-auto !rounded-xl ">
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
                    light={slide.light}
                    url={slide.url}
                    controls={true}
                    width={220}
                    height={320}
                    style={{ border: "1px solid transparent" }}
                    className=" !w-[280px] !rounded-xl sm:w-auto "
                  />
                </div>
                <div className="mx-auto">
                  <Card className=" w-[280px] max-w-xs !rounded-xl p-8 pt-10 sm:w-auto sm:max-w-md md:h-[320px] ">
                    <h5 className="h5 mb-4 font-medium">{slide.h5}</h5>
                    <p className="small-regular">{slide.p}</p>
                  </Card>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

interface VoicesFromStudentsProps {
  slides: VoiceFromStudentsProps[]
}

const VoicesFromStudents: React.FC<VoicesFromStudentsProps> = ({ slides }) => {
  return (
    <Section className="!p-0 ">
      <Container className="!pb-4 sm:p-0">
        <h2 className="h4 my-4 px-8 pb-2 pt-4 text-center !font-medium text-black sm:px-0">Voices from Our Students</h2>
        <VoicesFromStudentsSlider slides={slides} />
      </Container>
    </Section>
  )
}

export default VoicesFromStudents
