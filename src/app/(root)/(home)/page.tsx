import IntrestingForm from "@/components/forms/IntrestingForm"
import { FadeIn } from "@/components/ui/FadeIn"
import { learnersReviewLowerCarousel, learnersReviewUpperCarousel, voiceFromStudents } from "@/constants"
import DownloadApp from "./homepagesections/DownloadApp"
import Featured from "./homepagesections/Featured"
import Hero from "./homepagesections/Hero/Hero"
import { HiringTrends } from "./homepagesections/HiringTrends/hiringtrends"
import IndustryExperts from "./homepagesections/IndustryExperts"
import Lms from "./homepagesections/Lms"
import OurPrograms from "./homepagesections/OurPrograms"
import SkillupCourses from "./homepagesections/SkillupCourses"
import UpcomingEvents from "./homepagesections/upcomingEvents"
import WheretoStart from "./homepagesections/WhereToStart/WheretoStart"
import WhyDss from "./homepagesections/WhyDataspaceAcademy/whydss_section"
import LearnerReview from "../../../components/shared/LearnerReview"
import VoicesFromStudents from "../../../components/shared/VoicesFromStudents"

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
      <LearnerReview
        learnersReviewLowerCarousel={learnersReviewLowerCarousel}
        learnersReviewUpperCarousel={learnersReviewUpperCarousel}
      />
      <UpcomingEvents />
      <VoicesFromStudents slides={voiceFromStudents} />
      <Featured />
      <IntrestingForm />
      <SkillupCourses />
      <DownloadApp />
    </FadeIn>
  )
}
