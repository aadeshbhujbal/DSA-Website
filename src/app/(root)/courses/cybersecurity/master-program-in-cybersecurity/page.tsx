"use client"
import Image from "next/image"
import React, { useEffect } from "react"

import Featured from "@/app/(root)/(home)/homepagesections/Featured"
import WhyDss from "@/app/(root)/(home)/homepagesections/WhyDataspaceAcademy/whydss_section"
import ConfusedaboutCourse from "@/components/shared/courses/course-masterpage/CondusedAboutCourse"
import Hero from "@/components/shared/courses/course-masterpage/Hero"
import UpskillCourses from "@/components/shared/courses/course-masterpage/upskill"
import LearnerReview from "@/components/shared/LearnerReview"
import VoicesFromStudents from "@/components/shared/VoicesFromStudents"
import { Card } from "@/components/ui/card"
import {
  cybersecuritylearnersReviewLowerCarousel,
  cybersecuritylearnersReviewUpperCarousel,
  cybersecurityvoiceFromStudents,
} from "@/constants/courses/cybersecuritycourses"
import CybersecuritryCourses from "./CybersecuritryCourses"
import ToolsCybersecurity from "./ToolsCybersecurity"
import Whycybersecurity from "./whycybersecurity"

const handleSmoothScroll = (event: any) => {
  event.preventDefault()
  const targetElement = document.querySelector(event.target.getAttribute("href"))
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" })
  }
}

const Page = () => {
  useEffect(() => {
    const link = document.querySelector('a[href="#cybersecuritryCourses"]')
    if (link) {
      link.addEventListener("click", handleSmoothScroll)

      return () => {
        link.removeEventListener("click", handleSmoothScroll)
      }
    }
  }, [])
  const handleButtonClick = () => {
    // Handle button click functionality
  }
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
      <Hero
        background={"black"}
        backgroundImage="https://example.com/background.jpg"
        heading="Get The Best Cybersecurity
        Courses at One Place"
        subheading="Build your future with our popular cybersecurity programs."
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        buttonText="Explore Programs"
        buttonLink="#cybersecuritryCourses"
        rating={"4.8/5 Rating Program (1267 reviews)"}
      >
        <Card>Hello</Card>
      </Hero>
      <Whycybersecurity />
      <CybersecuritryCourses id="cybersecuritryCourses" />
      <ToolsCybersecurity imageFilenames={imageFilenames} />
      <ConfusedaboutCourse
        title="Confused about which course to take?"
        description="Embark on an exhilarating journey in 2024 by diving into ethical hacking. Unlock career opportunities, become a digital guardian, and contribute to a global community of cyber defenders."
        buttonText="Get free Career Counselling"
        // onButtonClick={handleButtonClick}
      />
      <WhyDss />
      <LearnerReview
        learnersReviewLowerCarousel={cybersecuritylearnersReviewLowerCarousel}
        learnersReviewUpperCarousel={cybersecuritylearnersReviewUpperCarousel}
      />
      <VoicesFromStudents slides={cybersecurityvoiceFromStudents} />
      <UpskillCourses />
      <Featured />
    </>
  )
}

export default Page
