"use client"
import { SlidersHorizontal } from "lucide-react"
import React from "react"
import { Button } from "components-story/Button/Button"
import DepartmentSelect from "./departmentselect"
import ExperienceSelect from "./experienceselect"



const Filter = () => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-md bg-white py-6 shadow-lg">
      <div className="flex justify-between ">
        <div className="flex gap-2 px-5 ">
          <div className="pt-[6px]">
            <SlidersHorizontal size={18} />
          </div>
          <p className="h5  pb-2">Filters</p>
        </div>
        <div className="pr-3 block md:hidden ">
        <Button variant={"default"} href=""  className="  max-w-[250px] text-black bg-blue-500 cursor-pointer pb-1">
              Submit{" "}
        </Button> 
        </div>
      </div>

      <div className=" px-4">
        <div className="border"></div>
      </div>
      <div className="px-5">
        <p className=" font-bold ">Department</p>
        <div className="py-4 ">
          <DepartmentSelect />
        </div>
      </div>
      <div className="px-5">
        <p className=" pt-1 font-bold">Experience</p>
        <div className="pt-4 ">
          <ExperienceSelect />
        </div>
      </div>
    </div>
  )
}
export default Filter
