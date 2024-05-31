import React from "react"
import Featured from "@/app/(root)/(home)/homepagesections/Featured"
import WhyDss from "@/app/(root)/(home)/homepagesections/WhyDataspaceAcademy/whydss_section"
import HeroForm from "@/components/forms/courseForm/HeroForm"

import ConfusedaboutCourse from "@/components/shared/courses/course-masterpage/CondusedAboutCourse"
import Faqs from "@/components/shared/courses/course-masterpage/Faqs"
import HeroCourseMaster from "@/components/shared/courses/course-masterpage/HeroCourseMaster"
import UpskillCourses from "@/components/shared/courses/course-masterpage/upskill"
import LearnerReview from "@/components/shared/LearnerReview"
import TrainerCarousel from "@/components/shared/TrainerCarousel"
import VoicesFromStudents from "@/components/shared/VoicesFromStudents"
import {
  CourseHeroData,
  cybersecuritylearnersReviewLowerCarousel,
  cybersecuritylearnersReviewUpperCarousel,
  CybersecurityMasterpageFaqs,
  CybersecurityTrainers,
  cybersecurityvoiceFromStudents,
} from "@/constants/courses/cybersecuritycourses"

import CoursesSubCategories from "../../../../components/shared/courses/course-masterpage/CoursesSubCategories"
import ToolsCybersecurity from "../../../../components/shared/courses/course-masterpage/ToolsCybersecurity"
import WhyCourse from "../../../../components/shared/courses/course-masterpage/whyCourse"

const Page = () => {
  // const handleButtonClick = () => {
  //   // Handle button click functionality
  // }
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
    <>
      <HeroCourseMaster HeroData={CourseHeroData}>
        <HeroForm />
      </HeroCourseMaster>
      <WhyCourse
        title1="Why should you learn Cybersecurity in 2023?"
        content1="Embark on an exhilarating journey in 2023 by diving into ethical hacking. Unlock career opportunities, become a digital guardian, and contribute to a global community of cyber defenders."
        title2="Salary Range of a Cybersecurity Expert in India"
        content2="In India, the salary range for ethical hackers can vary based on factors such as experience, location, industry, and certifications."
        graphData={[
          {
            name: "Beginner",
            range: 100,
            label: "₹3LPA - ₹6LPA",
          },
          {
            name: "Intermediate",
            range: 200,
            label: "₹8LPA - ₹10LPA",
          },
          {
            name: "Expert",
            range: 300,
            label: "₹10LPA - ₹15LPA",
          },
        ]}
      />

      <CoursesSubCategories
        id="cybersecuritryCourses"
        courseid={2}
        title="Explore the best cybersecurity courses"
        description="Embark on an exhilarating journey in 2023 by diving into ethical hacking. Unlock career opportunities, become a digital guardian, and contribute to a global community of cyber defenders."
      />
      <ToolsCybersecurity imageFilenames={imageFilenames} />
      <ConfusedaboutCourse
        title="Confused about which course to take?"
        description="Embark on an exhilarating journey in 2024 by diving into ethical hacking. Unlock career opportunities, become a digital guardian, and contribute to a global community of cyber defenders."
        buttonText="Get free Career Counselling"
        // onButtonClick={handleButtonClick}
      />
      <TrainerCarousel trainerDetails={CybersecurityTrainers} />
      <WhyDss />
      <LearnerReview
        learnersReviewLowerCarousel={cybersecuritylearnersReviewLowerCarousel}
        learnersReviewUpperCarousel={cybersecuritylearnersReviewUpperCarousel}
      />
      <VoicesFromStudents slides={cybersecurityvoiceFromStudents} />
      <UpskillCourses />
      <Featured />
      <Faqs faqs={CybersecurityMasterpageFaqs} />
    </>
  )
}

export default Page
