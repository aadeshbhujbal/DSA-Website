import IntrestingForm from "@/components/forms/IntrestingForm"
import { FadeIn } from "@/components/ui/FadeIn"
import DownloadApp from "./homepagesections/DownloadApp"
import Hero from "./homepagesections/Hero/Hero"
import { HiringTrends } from "./homepagesections/HiringTrends/hiringtrends"
import IndustryExperts from "./homepagesections/IndustryExperts"
import LearnerReview from "./homepagesections/LearnerReview"
import Lms from "./homepagesections/Lms"
import OurPrograms from "./homepagesections/OurPrograms"
import SkillupCourses from "./homepagesections/SkillupCourses"
import UpcomingEvents from "./homepagesections/upcomingEvents"
import WhyDss from "./homepagesections/WhyDataspaceAcademy/whydss_section"
import WheretoStart from "./homepagesections/WhereToStart/WheretoStart"
import Featured from "./homepagesections/Featured"

export default function Home() {
  return (
    <FadeIn>
      <Hero />
      <OurPrograms />
      <WheretoStart />
      <HiringTrends />
      <IndustryExperts />
      <Lms />
      <WhyDss />
      <LearnerReview />
      <UpcomingEvents />
      <Featured />
      <IntrestingForm />
      <SkillupCourses />
      <DownloadApp />
    </FadeIn>
  )
}
