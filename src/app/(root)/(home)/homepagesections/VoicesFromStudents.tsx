/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const VoicesFromStudents: React.FC = () => {
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
    speed: 500,
    centerMode: true,

    cssEase: "linear",
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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Section className="!p-0">
      <Container className="sm:!p-0">
        <h2 className="h4 my-4 px-8 pb-2 pt-4 text-center !font-medium text-black sm:px-0">Voices from Our Students</h2>
        <div className="mx-auto max-w-screen-lg">
          <Slider {...settings}>
            <div className="" style={{ width: 100 }}>
              <div className="flex !flex-row gap-3">
                <div className="">
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
                    light="/images/videothumb.png"
                    url="/videos/get-started.mp4" // Replace with your video URL
                    controls={true}
                    width={250}
                    height={300}
                    style={{ border: "1px solid " }}
                    className="!rounded-xl"
                  />
                </div>
                <div className="">
                  <Card className="!h-[300px] !min-w-[400px] max-w-md  !rounded-xl p-8 pt-10">
                    <h5 className="h5 mb-4 font-medium">Vikash Agarwal</h5>
                    <p className="small-regular">
                      Enrolling in courses here has been one of the best decisions Ive made for my career. The
                      instructors are incredibly knowledgeable and passionate, making learning enjoyable and effective.
                      The platforms user-friendly interface and diverse course offerings have helped me acquire valuable
                      skills that have boosted my confidence and opened up new opportunities. Im grateful for the
                      support and guidance provided every step of the way!
                    </p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="" style={{ width: 100 }}>
              <div className="flex !flex-row gap-3">
                <div className="">
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
                    light="/images/videothumb.png"
                    url="/videos/get-started.mp4" // Replace with your video URL
                    controls={true}
                    width={250}
                    height={300}
                    style={{ border: "1px solid " }}
                    className="!rounded-xl"
                  />
                </div>
                <div className="">
                  <Card className="!h-[300px] !min-w-[400px] max-w-md  !rounded-xl p-8 pt-10">
                    <h5 className="h5 mb-4 font-medium">Vikash Agarwal</h5>
                    <p className="small-regular">
                      Enrolling in courses here has been one of the best decisions Ive made for my career. The
                      instructors are incredibly knowledgeable and passionate, making learning enjoyable and effective.
                      The platforms user-friendly interface and diverse course offerings have helped me acquire valuable
                      skills that have boosted my confidence and opened up new opportunities. Im grateful for the
                      support and guidance provided every step of the way!
                    </p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="" style={{ width: 100 }}>
              <div className="flex !flex-row gap-3">
                <div className="">
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
                    light="/images/videothumb.png"
                    url="/videos/get-started.mp4" // Replace with your video URL
                    controls={true}
                    width={250}
                    height={300}
                    style={{ border: "1px solid " }}
                    className="!rounded-xl"
                  />
                </div>
                <div className="">
                  <Card className="!h-[300px] !min-w-[400px] max-w-md  !rounded-xl p-8 pt-10">
                    <h5 className="h5 mb-4 font-medium">Vikash Agarwal</h5>
                    <p className="small-regular">
                      Enrolling in courses here has been one of the best decisions Ive made for my career. The
                      instructors are incredibly knowledgeable and passionate, making learning enjoyable and effective.
                      The platforms user-friendly interface and diverse course offerings have helped me acquire valuable
                      skills that have boosted my confidence and opened up new opportunities. Im grateful for the
                      support and guidance provided every step of the way!
                    </p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="" style={{ width: 100 }}>
              <div className="flex !flex-row gap-3">
                <div className="">
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
                    light="/images/videothumb.png"
                    url="/videos/get-started.mp4" // Replace with your video URL
                    controls={true}
                    width={250}
                    height={300}
                    style={{ border: "1px solid " }}
                    className="!rounded-xl"
                  />
                </div>
                <div className="">
                  <Card className="!h-[300px] !min-w-[400px] max-w-md  !rounded-xl p-8 pt-10">
                    <h5 className="h5 mb-4 font-medium">Vikash Agarwal</h5>
                    <p className="small-regular">
                      Enrolling in courses here has been one of the best decisions Ive made for my career. The
                      instructors are incredibly knowledgeable and passionate, making learning enjoyable and effective.
                      The platforms user-friendly interface and diverse course offerings have helped me acquire valuable
                      skills that have boosted my confidence and opened up new opportunities. Im grateful for the
                      support and guidance provided every step of the way!
                    </p>
                  </Card>
                </div>
              </div>
            </div>

            {/* Add more slides here */}
            {/* Repeat the above structure for other slides */}
          </Slider>
        </div>
      </Container>
    </Section>
  )
}

export default VoicesFromStudents
