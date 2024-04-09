export interface NavigationHome {
  route: string
  label: string
  imgUrl?: string
}

export interface TrendingPrograms {
  name: string
  route: string
  color?: string
}

export interface HiringCompanies {
  src: Url
  alt: string
  title?: string
}
export interface IndustryExperts {
  trainer_Image: Url
  trainer_Name: string
  trainer_Designation: string
  trainer_linkinUrl: string
  className?: string
}
export interface OurProgramCardProps {
  id?: number
  className?: string
  program_Name: string
  program_description: string
  program_link: string
  icons?: JSX.Element
  hoverColor: string | undefined
  animate?: boolean
  courses?: object
}

export interface LearnersReview {
  learner_Name: string
  learner_Position?: string
  learner_Image: string
  learner_review: string
  className?: string
}
export interface EventsProps {
  className?: string
  event_Name: string
  event_Date: string
  event_link: string
  event_Image: string
}

export interface SkillupProps {
  className?: string
  course_Name: string
  course_Duration: string
  course_Link: string
}

export interface VoiceFromStudentsProps {
  light: string
  url: string
  h5: string
  p: string
}
