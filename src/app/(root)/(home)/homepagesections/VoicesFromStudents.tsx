/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import Image from "next/image"
import { VoiceFromStudentsProps } from "@/types"
import { voiceFromStudents } from "@/constants"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const VoicesFromStudentsSlider: React.FC<{ slides: VoiceFromStudentsProps[] }> = ({ slides }) => {
  const [showPlayer, setShowPlayer] = useState(false)

  useEffect(() => {
    setShowPlayer(true)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1.05,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    centerMode: true,
    cssEase: "linear",
    dotsClass: "button__bar",
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.02,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          center: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 0.9,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          center: false,
        },
      },
    ],
  }

  return (
    <div className="mx-auto max-w-screen-lg">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="" style={{ width: 100 }}>
            <div className="flex !w-[225px] flex-col !rounded-xl md:gap-3 lg:!flex-row">
              <div className="!w-[225px] !rounded-xl md:w-[250px] lg:!w-[270px]">
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
                  width={250}
                  height={300}
                  style={{ border: "1px solid transparent" }}
                  className="!w-[225px] !rounded-xl md:!w-[330px] lg:!h-[350px] lg:!w-[270px]"
                />
              </div>
              <div className="">
                <Card className="w-[225px] max-w-md !rounded-xl p-8 pt-10 md:!w-[330px] lg:!h-[350px] lg:!min-w-[500px] ">
                  <h5 className="h5 mb-4 font-medium">{slide.h5}</h5>
                  <p className="small-regular">{slide.p}</p>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

const VoicesFromStudents = () => {
  return (
    <Section className="!p-0">
      <Container className="sm:!p-0">
        <h2 className="h4 my-4 px-8 pb-2 pt-4 text-center !font-medium text-black sm:px-0">Voices from Our Students</h2>
        <VoicesFromStudentsSlider slides={voiceFromStudents} />
      </Container>
    </Section>
  )
}

export default VoicesFromStudents
