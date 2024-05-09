import Link from "next/link"
import React from "react"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import Input from "@/components/ui/input"
import { Section } from "@/components/ui/Section"
import { Select } from "@/components/ui/select"
import Rating from "../(home)/homepagesections/Hero/Rating"

const Contactus = () => {
  return (
    <>
      <Section>
        <Container className="w-full !max-w-full  bg-gradient-to-b from-[#C6FFAE4D] to-[#C6FFAE00] p-6  !pb-20  !opacity-100 md:p-2 lg:p-16 lg:pt-4 ">
          <div className="mx-auto grid max-w-screen-2xl  grid-cols-1 gap-10 py-6 md:grid-cols-2">
            <div className="flex flex-col gap-10">
              <div>
                <p className="h3 !font-medium">Get In Touch</p>
                <p className="py-4">
                  Get in touch with us for any inquiries or assistance. Our team is here to help you.
                </p>
                <p className="pb-4">You can reach us via email or phone :</p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <div className=" pb-1 ">
                    <Link
                      href={"mailto:hi@dataspacesecurity.com"}
                      className=" !w-full rounded-lg border border-none bg-white px-8 py-2  shadow-lg hover:bg-link hover:text-white "
                    >
                      hi@dataspacesecurity.com
                    </Link>
                  </div>
                  <div className=" pb-3 md:pb-5 ">
                    <Link
                      href={"tel:+91 85462 65942"}
                      className=" !w-full rounded-lg border border-none bg-white px-8 py-2  shadow-lg hover:bg-link hover:text-white "
                    >
                      +91 85462 65942
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <p className="h4 !font-medium">Registered Officials</p>
                <div className="grid grid-cols-2 gap-4 pt-10">
                  <div className="rounded-lg bg-white shadow-lg">
                    <div className="p-3 md:p-4">
                      <p className="base-semibold pb-4">Kolkata (Headquarter)</p>
                      <p>3rd Floor, Seven Hills Building, En 34, Salt Lake Sector 5, Kolkata 700091.</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white shadow-lg">
                    <div className="p-3 md:p-4">
                      <p className="base-semibold pb-4 ">KSA</p>
                      <p>C.R. 2051243484, Al-Khobar, KSA</p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="rounded-lg bg-white shadow-lg">
                      <div className="p-3 md:p-4">
                        <p className="base-semibold pb-4">Bengaluru</p>
                        <p>
                          Prime Arcade, 1002, 3rd Floor, Above Health & Glow, Ananthnagar , Electonic City Phase 2,
                          Bengaluru, Karnataka 560100
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <div className="w-[400px] max-w-[700px] rounded-lg bg-white shadow-lg">
                <div className="p-8">
                  <p className="h5 mb-8 !font-medium ">Let us know about your query</p>
                  <div className=" pb-3 ">
                    <Input
                      placeholder="Name"
                      className=" border-![#EBEBEB]!outline-none !w-full border-2  bg-white !text-black !ring-offset-0  placeholder:text-black focus:border-link focus:!outline-none focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12 2xl:max-w-full"
                      size="medium"
                      variant="ghost"
                    />
                  </div>
                  <div className=" pb-3  ">
                    <Input
                      placeholder="Phone Number"
                      className=" border-![#EBEBEB]!outline-none w-full border-2 bg-white  text-black !ring-offset-link placeholder:text-black focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12"
                      size="medium"
                      variant="ghost"
                    />
                  </div>
                  <div className=" pb-3 ">
                    <Input
                      placeholder="Email Address"
                      className=" border-![#EBEBEB]!outline-none !w-full  border-2 bg-white !text-black  !ring-offset-0 placeholder:text-black focus:border-link focus:!outline-none focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12 2xl:max-w-full"
                      size="medium"
                      variant="ghost"
                    />
                  </div>
                  <div className=" pb-3 ">
                    <div className="relative w-full rounded-md border border-gray-200">
                      <select
                        className="block w-full appearance-none rounded border-gray-400  bg-white px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="grid-state"
                      >
                        <option>Select Purpose</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className=" pb-3 ">
                    <Input type="text" placeholder="Message" className="h-20  w-full  bg-white text-black" />
                  </div>

                  <div className="flex items-center">
                    <Input
                      id="link-checkbox"
                      type="checkbox"
                      className="size-4 rounded-full bg-gray-100 text-blue-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      By providing your contact details, you agree to our{" "}
                      <Link href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                        terms and conditions
                      </Link>
                      .
                    </label>
                  </div>

                  <Button variant={"primary"} href="" size="medium" className="mt-5 w-full text-black ">
                    Submit{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Rating header={false} />
    </>
  )
}

export default Contactus
