import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react" // Import useEffect
import Button from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { OurProgramCardProps } from "@/types"

const AllCourse: React.FC<{ programs: OurProgramCardProps[] }> = ({ programs }) => {
  const [activeProgram, setActiveProgram] = useState<OurProgramCardProps | null>(null)

  // Set the first program as active when component mounts
  // useEffect(() => {
  //   if (programs.length > 0 && !activeProgram) {
  //     setActiveProgram(programs[0])
  //   }
  // }, [programs, activeProgram])

  const handleProgramHover = (program: OurProgramCardProps) => {
    setActiveProgram(program)
  }

  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="primary" size="medium">
            {" "}
            <div className="flex flex-row gap-2">
              <Image src="/images/book.svg" alt="Arrow" className="" width={20} height={20} />
              <span className="mb-0.5">All Courses</span>
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className="min-h-[400px] p-0 lg:!max-w-[800px] 2xl:!max-w-5xl 2xl:p-4 3xl:!max-w-7xl">
          <div className="flex flex-row gap-2 2xl:gap-4">
            <div className="basis-5/12 rounded-lg bg-[#F1FBFF] p-6 pr-2">
              <p className="mb-7 !font-clashgrotesk text-xl font-medium">Categories</p>
              <div className="flex flex-col gap-1 2xl:gap-2">
                {programs.map((program) => (
                  <Link
                    href={program.program_link}
                    key={program.id}
                    onMouseEnter={() => handleProgramHover(program)}
                    className={` flex flex-row justify-between p-1.5 2xl:p-2 ${activeProgram && activeProgram.id === program.id ? "border-l-4 border-link bg-gradient-to-r from-[#fbfbfb] to-transparent  text-link" : ""}`}
                  >
                    {program.program_Name}
                    <ChevronRight
                      className={` rounded-md bg-white ${activeProgram && activeProgram.id === program.id ? "bg-white text-link" : ""}`}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className=" basis-auto py-6 pl-4 pt-3">
              <p className="!font-clashgrotesk text-xl font-medium">Courses</p>
              {activeProgram ? (
                <p className="mb-4 !font-clashgrotesk text-lg font-medium">{activeProgram.program_Name}</p>
              ) : (
                <>
                  <p>Select a program to view its courses</p>
                </>
              )}{" "}
              {activeProgram &&
                activeProgram.courses.map((course) => (
                  <div key={course.id} className="py-2 hover:text-link ">
                    <a href={course.route}>{course.name}</a>
                  </div>
                ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AllCourse
