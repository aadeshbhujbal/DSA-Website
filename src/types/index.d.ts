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
  courses?: Course[]
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
  id?: any
  light: string
  url: string
  h5: string
  p: string
}

interface TrainerCarouselProps {
  id?: any
  imageSrc: any
  imageAlt: string
  trainerName: string
  trainerDesignation: string
  trainerDescription: string
  trainerProfileUrl: string
  trainerLinkedInUrl: string
}

interface FaqItemProps {
  id?: any
  title: string
  content: string
}

interface HeroProps {
  backgroundImage: string
  heading: string
  background?: string

  subheading: string
  paragraph: string
  buttonText: string
  buttonLink: string
  brochureText: string
  brochureLink: string
  rating: string
}

interface BenefitsDataProps {
  title: string
  salary: string
  industries: string
}

interface ProgramOverviewProps {
  title: string
  description: string
  items: { title: string; id: string; content: string }[]
  videoUrl: string
  addOnsLink: string
  videoPlaceholder: string
}

interface CourseDescriptionProps {
  durationText: string
  duration: string
  placementSupportText: string
  placementSupport: string
  easyEMIText: string
  easyEMI: string
  classModeText: string
  classMode: string
  extraBenefitsText: string
  extraBenefits: string
}
interface CourseCurriculumProps {
  durationText: string
  duration: string
  placementSupportText: string
  placementSupport: string
  easyEMIText: string
  easyEMI: string
  classModeText: string
  classMode: string
  extraBenefitsText: string
  extraBenefits: string
}

interface Submodule {
  title: string
  subtitle?: string[]
}

export interface CourseModule {
  module: string
  type?: "module" | "test"
  submodule?: Submodule[]
}
interface Project {
  title: string
  description: string
  imageUrl: string
  tools: string[]
}

interface Program {
  title: string
  subtitle?: string
  duration?: string
  level?: string
  points: string[]
}

interface ProgramBenefitProps {
  mainProgram: Program
  addOnBenefits: Program[]
}
