import { SlidersHorizontal } from "lucide-react"
import React from "react"
import { Container } from "@/components/ui/Container"
import Filter from "./components/filter"
import Jobdetailscard from "./components/jobcard"
import Search from "./components/search"
import { jobdetails } from "./content"

const Careers = () => {
  return (
    <div>
      <div className="bg-black">
        <section>
          <Container className="flex justify-center md:w-[85%] lg:w-[70%] xl:w-[60%]">
            <div className="flex flex-col  justify-center gap-5 px-4 py-6 text-center md:gap-8    md:py-10">
              <p className="h2 text-white ">Join Our Team and Shape the Future of EdTech </p>
              <p className="text-white">
                Join us to reshape EdTech. Drive innovation, impact globally, and grow in a collaborative team.
              </p>
              <div className="">
                <Search />
              </div>
            </div>
          </Container>
        </section>
      </div>
      <section>
        <Container>
          <div className="py-10">
            <div className="flex justify-between gap-4">
              <p className="h3 ">Current Openings</p>
              <div className="block md:hidden">
                <div className="flex gap-2 rounded-lg bg-white px-5 py-2">
                  <div className="pt-1">
                    <SlidersHorizontal size={18} />
                  </div>

                  <p>filter</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3  py-10 ">
              <div className="grid w-full grid-cols-1 gap-5 md:w-2/3">
                {jobdetails &&
                  jobdetails.map((data, index) => (
                    <div key={index}>
                      <Jobdetailscard data={data} />
                    </div>
                  ))}
              </div>
              <div className="hidden md:block md:w-1/3">
                <Filter />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Careers
