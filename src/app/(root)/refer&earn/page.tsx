import React from "react"
import Faqs from "@/components/shared/courses/course-masterpage/Faqs"
import { Container } from "@/components/ui/Container"

import { CybersecurityMasterpageFaqs } from "@/constants/courses/cybersecuritycourses"
import Rating from "../(home)/homepagesections/Hero/Rating"

const Referandearn = () => {
  return (
    <div>
      <Container>
        <div className="py-10">
          {/* Comment for the first div */}
          <div className="flex justify-center">
            <p className="h3">How To Refer?</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-10 align-middle md:flex-row">
            <div className="flex h-[79px] max-h-[110px] w-full items-center rounded-lg bg-white shadow-xl md:w-[300px] md:max-w-[350px] ">
              <div className=" inline-flex items-center gap-3 px-5 py-4">
                <div className="rounded-md bg-blue-600 px-3 py-1 text-white shadow-lg">
                  <p>1</p>
                </div>
                <p className="py-1">Go to your profile</p>
              </div>
            </div>
            <div className="flex size-8 items-center justify-center rounded-full bg-yellow-400 "></div>
            <div className="flex h-[79px] max-h-[110px]  w-full items-center rounded-lg bg-white shadow-xl md:w-[300px] md:max-w-[350px]">
              <div className=" inline-flex items-center gap-3 px-5 py-4">
                <div className="h-[33px] rounded-md bg-blue-600 px-3 py-1 text-white shadow-lg ">
                  <p>2</p>
                </div>
                <p className="py-1">Find your unique code</p>
              </div>
            </div>
            <div className="flex size-8 items-center justify-center rounded-full bg-yellow-400 "></div>
            <div className="flex h-[79px] max-h-[110px]  w-full items-center rounded-lg bg-white shadow-xl md:w-[300px] md:max-w-[350px]">
              <div className=" inline-flex items-center gap-3 px-5 py-3">
                <div className="h-[33px] rounded-md bg-blue-600 px-3 py-1 text-white  shadow-lg ">
                  <p>3</p>
                </div>
                <div>
                  <p className="py-1">Share the code with your family & friends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Comment for the second div */}

          <div className="flex flex-col gap-5">
            <Faqs faqs={CybersecurityMasterpageFaqs} />
          </div>
        </div>
        {/* End of comment for the second div */}
      </Container>

      <Rating header={false} />
    </div>
  )
}

export default Referandearn
