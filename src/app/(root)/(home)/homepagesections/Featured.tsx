import Image from "next/image"
import Link from "next/link"
import React from "react"
import GetInTouch from "@/components/shared/GetInTouch"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

const Featured = () => {
  return (
    <Section>
      <Container className="max-w-screen-2xl md:!pt-12 lg:!pt-4">
        <h2 className="h4 pb-4 text-center !font-medium text-black">We got featured!</h2>
        <div className=" mx-auto flex flex-col justify-center lg:flex-row  lg:gap-16">
          {" "}
          <div className="basis-1/3">
            <h4 className="h6 py-4 !font-medium text-black">We Are In Top 10 Training Providers</h4>
            <p className="p base-regular  ">
              An award-winning ed-tech platform, DataSpace Academy offers job-ready and multi-level certification
              courses in cybersecurity, including courses in Ethical Hacking, Penetration Testing, Cyber Forensics, and
              more. Added to cybersecurity, DataSpace Academy also offers industry-recognised job-ready courses on Data
              Science, Networking, Python, Machine Learning, AI-powered Digital Marketing, and more. Almost all our
              courses carry a Complimentary Grooming session. We are based out of Kolkata and also have a branch in KSA.
              <br />
              Our industry-leading courses feature an advanced curriculum that has been framed as per the latest
              industry standards. One of the major factors that separate us from the rest is that we not only offer
              theoretical training but also the opportunity to develop practical skills through our capstone projects.
              DataSpace Academy further extends placement assistance to help the students find a solid footing in the
              job market.
            </p>
            <GetInTouch
              isheading={false}
              buttonComponent={
                <Button size="large" variant="primary" className="my-4">
                  Join us Now
                </Button>
              }
            />
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
