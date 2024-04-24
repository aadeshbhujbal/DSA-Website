import React from "react"
import HeroForm from "@/components/forms/courseForm/HeroForm"
import Benefits from "@/components/shared/courses/course-detail/Benefits"
import CourseDescription from "@/components/shared/courses/course-detail/CourseDescription"
import HeroCourse from "@/components/shared/courses/course-detail/HeroCourse"
import ProgramOverview from "@/components/shared/courses/course-detail/ProgramOverview"
import SkillsYouWillGather from "@/components/shared/courses/course-detail/SkillsYouWillGather"
import Wanttoknowmore from "@/components/shared/courses/course-detail/Wanttoknowmore"
import {
  benefitsData,
  courseDescriptionData,
  CybersecurityCurriculumData,
  HeroData,
  ProgramOverviewData,
  skillsData,
} from "@/constants/courses/cybersecuritycourses/masterprogram"
import CourseCurriculum from "@/components/shared/courses/course-detail/CourseCurriculum"

const page = () => {
  return (
    <div>
      <HeroCourse HeroData={HeroData}>
        {" "}
        <HeroForm />
      </HeroCourse>
      <CourseDescription courseDescriptionData={courseDescriptionData} />
      <ProgramOverview
        title="Program Overview"
        description="The MASTER Program in Cybersecurity is an all-in-one cybersecurity program that will help you to land up with your dream job in cybersecurity. The advanced program will cover training on:"
        items={ProgramOverviewData}
        videoUrl="/videos/get-started.mp4"
        addOnsLink="#"
        videoPlaceholder="/images/video.png"
      />
      <Wanttoknowmore
        buttonText="Download Brochure"
        downloadBrochureLink="https://dataspaceacademy.com/public/datascience/DataScience.pdf"
      />
      <SkillsYouWillGather skills={skillsData} />
      <Benefits
        benefitsData={benefitsData}
        heading="Cybersecurity master program benefits"
        salaryTitle=" Salary Range of a Cybersecurity Expert in India"
        salaryPara=" In India, the salary range for ethical hackers can vary based on factors such as experience, location,
              industry, and certifications."
      />
      <CourseCurriculum
        curriculumData={CybersecurityCurriculumData}
        assignments={20}
        hours={20}
        skills={50}
      ></CourseCurriculum>
    </div>
  )
}

export default page
