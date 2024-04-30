"use client"
import React from "react"
import Lms from "@/app/(root)/(home)/homepagesections/Lms"
import WhyDss from "@/app/(root)/(home)/homepagesections/WhyDataspaceAcademy/whydss_section"
import HeroForm from "@/components/forms/courseForm/HeroForm"
import IntrestingForm from "@/components/forms/IntrestingForm"
import Benefits from "@/components/shared/courses/course-detail/Benefits"
import CourseCurriculum from "@/components/shared/courses/course-detail/CourseCurriculum"
import CourseDescription from "@/components/shared/courses/course-detail/CourseDescription"
import HandsonProject from "@/components/shared/courses/course-detail/HandsonProject"
import HeroCourse from "@/components/shared/courses/course-detail/HeroCourse"
import ProgramOverview from "@/components/shared/courses/course-detail/ProgramOverview"
import SkillsYouWillGather from "@/components/shared/courses/course-detail/SkillsYouWillGather"
import Wanttoknowmore from "@/components/shared/courses/course-detail/Wanttoknowmore"
import Faqs from "@/components/shared/courses/course-masterpage/Faqs"
import ToolsCybersecurity from "@/components/shared/courses/course-masterpage/ToolsCybersecurity"
import LearnerReview from "@/components/shared/LearnerReview"
import TrainerCarousel from "@/components/shared/TrainerCarousel"
import VoicesFromStudents from "@/components/shared/VoicesFromStudents"
import { learnersReviewLowerCarousel, learnersReviewUpperCarousel, voiceFromStudents } from "@/constants"
import { CybersecurityMasterpageFaqs, CybersecurityTrainers } from "@/constants/courses/cybersecuritycourses"
import {
  benefitsData,
  courseDescriptionData,
  CybersecurityaddOnBenefitsData,
  CybersecurityCurriculumData,
  CybersecurityHandsOnProjectData,
  CybersecurityMainProgramBenefitsData,
  CybersecurityWhoCanJoinData,
  HeroData,
  ProgramOverviewData,
  skillsData,
} from "@/constants/courses/cybersecuritycourses/masterprogram"
import WhoCanJoin from "@/components/shared/courses/course-detail/WhoCanJoin"
import ProgramBenefit from "@/components/shared/courses/course-detail/ProgramBenefit"

const page = () => {
  const imageFilenames = [
    "Burpsuite.png",
    "hashcat.png",
    "Metaspolit.png",
    "Nessus.png",
    "nmap.png",
    "nikto.png",
    "Nuclei.png",
    "Shodan.png",
  ]
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
      {/* <CourseCurriculum curriculumData={CybersecurityCurriculumData} assignments={20} hours={20} skills={50} /> */}
      <ToolsCybersecurity imageFilenames={imageFilenames} />
      <HandsonProject projects={CybersecurityHandsOnProjectData} />
      <TrainerCarousel trainerDetails={CybersecurityTrainers} />
      <Lms />
      <WhyDss />

      <LearnerReview
        learnersReviewLowerCarousel={learnersReviewLowerCarousel}
        learnersReviewUpperCarousel={learnersReviewUpperCarousel}
      />
      <WhoCanJoin whocanJoin={CybersecurityWhoCanJoinData} />
      <ProgramBenefit
        mainProgram={CybersecurityMainProgramBenefitsData}
        addOnBenefits={CybersecurityaddOnBenefitsData}
      />

      <VoicesFromStudents slides={voiceFromStudents} />
      <IntrestingForm />
      <Faqs faqs={CybersecurityMasterpageFaqs} />
    </div>
  )
}

export default page
