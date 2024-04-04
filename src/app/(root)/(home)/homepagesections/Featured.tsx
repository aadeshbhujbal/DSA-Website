import Image from "next/image"
import Link from "next/link"
import React from "react"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

const Featured = () => {
  return (
    <Section>
      <Container className="max-w-screen-2xl !pt-0">
        <h2 className="h4 pb-4 text-center !font-medium text-black">We got featured!</h2>
        <div className=" mx-auto flex flex-col justify-center lg:flex-row  lg:gap-16">
          {" "}
          <div className="basis-1/3">
            <h4 className="h6 py-4 !font-medium text-black">We Are In Top 10 Training Providers</h4>
            <p className="p base-regular  ">
              Indian enterprises are in constant search for skilled cybersecurity professionals to increase digital
              infrastructure security. Safeguarding data from unwanted intrusions and several job vacancies in the
              country are creating challenges in collection of the right resources for the position. According to a
              report, the increasing cyber attacks and data protection laws are expected to create one million jobs and
              $35 billion opportunities for India by 2025. It helps in creating an opportunity for individuals
              interested in cybersecurity as a career option. As country is creating a massive opportunity for
              enterprises to hire people for increasing the cybersecurity performance.{" "}
            </p>
            <Button variant={"default"} href="" size="medium" className="mt-5 w-full  max-w-[250px]">
              Get In Touch{" "}
            </Button>
          </div>
          <div className="basis-1/3 self-center">
            <div className="mx-auto flex max-w-sm  flex-wrap justify-center gap-8 py-6 sm:grid  sm:grid-cols-2">
              <Link href="/">
                <Image
                  src={"/images/ed.png"}
                  alt=""
                  className="  w-[130px] shadow-[rgba(6,_8,_24,_0.08)_0px_9px_20px] sm:w-auto "
                  width={400}
                  height={400}
                />
              </Link>
              <Link href="/">
                <Image
                  src={"/images/blogrizm.png"}
                  className="  w-[130px] shadow-[rgba(6,_8,_24,_0.08)_0px_9px_20px] sm:w-auto "
                  alt=""
                  width={400}
                  height={400}
                />
              </Link>
              <Link href="/">
                <Image
                  src={"/images/mid-day.png"}
                  className="  w-[130px] shadow-[rgba(6,_8,_24,_0.08)_0px_9px_20px] sm:w-auto "
                  alt=""
                  width={400}
                  height={400}
                />
              </Link>
              <Link href="/">
                <Image
                  src={"/images/cio.png"}
                  className="  w-[130px] shadow-[rgba(6,_8,_24,_0.08)_0px_9px_20px] sm:w-auto "
                  alt=""
                  width={400}
                  height={400}
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Featured
