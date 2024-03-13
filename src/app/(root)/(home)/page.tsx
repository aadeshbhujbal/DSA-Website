import { FadeIn } from "@/components/ui/FadeIn"
import DownloadApp from "./homepagesections/DownloadApp"
import Hero from "./homepagesections/Hero/Hero"
import IndustryExperts from "./homepagesections/IndustryExperts"
import LearnerReview from "./homepagesections/LearnerReview"
import Lms from "./homepagesections/Lms"
import OurPrograms from "./homepagesections/OurPrograms"
import SkillupCourses from "./homepagesections/SkillupCourses"
import UpcomingEvents from "./homepagesections/upcomingEvents"
import WhyDss from "./homepagesections/WhyDataspaceAcademy/whydss_section"
import Skills from "./homepagesections/skills"
import IntrestingForm from "@/components/forms/IntrestingForm"

export default function Home() {
  return (
    <FadeIn>
      <Hero />
      <OurPrograms />
      <IndustryExperts />
      <Lms />
      <WhyDss />
      <LearnerReview />
      <UpcomingEvents />
      <IntrestingForm />
      <SkillupCourses />
      <DownloadApp />
    </FadeIn>
  )
}
