import Image from "next/image"
import React from "react"
import Button from "@/components/ui/button"

const DataspaceCertification = () => {
  return (
    <>
      {" "}
      <h2 className="h4 my-4 text-left !font-medium text-white">Get industry relevant certificate</h2>
      <div className="flex flex-col gap-16  md:flex-row ">
        <div className=" max-w-[400px]  rounded-lg bg-gradient-to-br from-[#0077E5] from-10%  via-black to-black p-4 lg:w-auto lg:!max-w-[900px]">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button size="large" variant={"default"} className="my-4">
            Get in touch
          </Button>
        </div>
      </div>
    </>
  )
}

export default DataspaceCertification
