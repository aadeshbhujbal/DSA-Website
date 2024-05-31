import Image from "next/image"
import React from "react"
import GetInTouch from "@/components/shared/GetInTouch"
import Button from "@/components/ui/button"
import { TickIcon } from "@/constants/icons"

const DataspaceCertification = () => {
  return (
    <>
      {" "}
      <h2 className="h4 my-4 text-left !font-medium text-white">Get industry relevant certificate</h2>
      <div className="flex flex-col gap-16  md:flex-row ">
        <div className=" max-w-[400px]  rounded-lg bg-gradient-to-br from-[#0077E5]   via-black to-black p-4 lg:w-auto lg:!max-w-[900px]">
          <Image
            src={"/images/certificate.png"}
            alt={"certificate"}
            width={400}
            height={400}
            className="lg:!w-xl lg:max-w-[900px]"
          />
        </div>
        <div className="">
          <h2 className="h4 my-2 text-left !font-medium text-white">DataSpace Certification</h2>
          <p className="base-regular max-w-xl py-2 text-white">
            DataSpace Academy’s Certification is acknowledged all across the globe as a valid testament to a learner’s
            expertise and skills in the most in-demand career domains. Experience professional growth with our
            industry-leading certification courses and practical training. Join us to unlock your dream career.
          </p>
          <ul className="my-4 flex flex-col gap-3 lg:flex-row">
            <li className="small-medium flex items-center text-white">
              <TickIcon title="Easy apply for trending jobs" titleId="easyApply" className="mr-2" />
              Professional Growth{" "}
            </li>
            <li className="small-medium flex items-center text-white">
              <TickIcon title="Get the best learning experience" titleId="learningExperience" className="mr-2" />
              Industry Recognition
            </li>
            <li className="small-medium flex items-center text-white">
              <TickIcon title="Enroll free skill-up courses" titleId="freeCourses" className="mr-2" />
              Practical Skill Development
            </li>
          </ul>

          <GetInTouch
            isheading={true}
            buttonComponent={
              <Button variant={"default"} href="" size="medium" className="mt-5 w-full  max-w-[250px]">
                Get In Touch{" "}
              </Button>
            }
          />
        </div>
      </div>
    </>
  )
}

export default DataspaceCertification
