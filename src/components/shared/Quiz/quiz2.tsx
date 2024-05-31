"use client"
import React, { useReducer } from "react"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Section } from "@/components/ui/Section"
import CoursesSubCategories from "../courses/course-masterpage/CoursesSubCategories"
import GetInTouchForm from "@/components/forms/courseForm/GetinTouchForm"

interface QuizProps {
  buttonComponent?: React.ReactNode
  title?: string
  subtitle?: string
  isheading?: boolean
}

interface QuizQuestions {
  question: string
  answers: string[]
}

const initialQuizData: QuizQuestions[] = []

const QuizData: QuizQuestions[] = [
  {
    question: "1. What is your current level of expertise in the field of technology?",
    answers: [
      "Intermediate - I have some basic knowledge.",
      "Beginner - I have little to no experience.",
      "Expert - I have significant experience and advanced skills.",
    ],
  },
  {
    question: "2. Which area of technology are you most interested in learning about?",
    answers: ["Cybersecurity", "Data Science", "Digital Marketing", "Cloud and Networking", "Programming"],
  },
  {
    question: "3. What is your primary goal in taking this course?",
    answers: [
      "To gain foundational knowledge and skills.",
      "To enhance my existing skills and knowledge.",
      "To become an expert in the field and advance my career.",
    ],
  },
  {
    question: "4. How much time are you willing to dedicate to learning each week?",
    answers: ["Less than 5 hours", "5-10 hours", "More than 10 hours"],
  },
]

interface State {
  showCourses: boolean
  currentQuestionIndex: number
  selectedAnswer: string | null
  quizData: QuizQuestions[]
  selectedAnswers: string[]
  courseKey: number | null
}

const initialState: State = {
  showCourses: false,
  currentQuestionIndex: 0,
  selectedAnswer: null,
  quizData: initialQuizData,
  selectedAnswers: [],
  courseKey: null,
}

type Action =
  | { type: "SET_SELECTED_ANSWER"; payload: string }
  | { type: "NEXT_QUESTION" }
  | { type: "SHOW_COURSES" }
  | { type: "SET_COURSE_KEY"; payload: number | null }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_SELECTED_ANSWER":
      return { ...state, selectedAnswer: action.payload }
    case "NEXT_QUESTION":
      const updatedQuizData = [...state.quizData]
      const currentQuestion = QuizData[state.currentQuestionIndex]
      if (currentQuestion) {
        updatedQuizData.push({ question: currentQuestion.question, answers: [state.selectedAnswer!] })
      }
      const updatedSelectedAnswers = [...state.selectedAnswers, state.selectedAnswer!]
      return {
        ...state,
        quizData: updatedQuizData,
        selectedAnswers: updatedSelectedAnswers,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswer: null,
      }
    case "SHOW_COURSES":
      return { ...state, showCourses: true }
    case "SET_COURSE_KEY":
      return { ...state, courseKey: action.payload }
    default:
      return state
  }
}

const determineKey = (answers: string[]): number | null => {
  if (answers.includes("Cybersecurity")) {
    return 2
  } else if (answers.includes("Data Science")) {
    return 3
  } else if (answers.includes("Digital Marketing")) {
    return 4
  } else if (answers.includes("Cloud and Networking")) {
    return 5
  } else if (answers.includes("Programming")) {
    return 6
  } else {
    return null
  }
}

const Quiz: React.FC<QuizProps> = ({ buttonComponent, subtitle, title, isheading }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleQuestionSubmit = () => {
    if (state.selectedAnswer !== null) {
      if (state.currentQuestionIndex < QuizData.length - 1) {
        dispatch({ type: "NEXT_QUESTION" })
      } else {
        console.log("Selected Questions and Answers:")
        state.quizData.forEach((question) => {
          console.log("Question:", question.question)
          console.log("Selected Answer:", question.answers)
        })
        const key = determineKey(state.selectedAnswers)
        dispatch({ type: "SET_COURSE_KEY", payload: key })
        dispatch({ type: "SHOW_COURSES" })
      }
    }
  }

  const currentQuestion = QuizData[state.currentQuestionIndex]
  return (
    <Dialog>
      <DialogTrigger asChild>{buttonComponent}</DialogTrigger>
      {state.showCourses ? (
        <DialogContent className="!overflow-scroll !p-0 lg:!h-[600px] lg:min-w-[1100px]">
          <CoursesSubCategories
            id="cybersecuritryCourses"
            courseid={state.courseKey}
            title="Suggested Courses Based on Your Preferences"
            description="Embark on a journey of personalized learning with our carefully curated course selections. Explore topics tailored to your interests and goals. Start today and unlock your full potential!"
          />
        </DialogContent>
      ) : (
        <DialogContent
          className={` w-full  max-w-screen-2xl !rounded-lg !border-link   ${isheading ? "!max-w-[400px] !p-6" : "!mr-10 md:py-0 md:pb-6 md:pl-0 lg:pb-0"}`}
        >
          <Section className={`relative w-full max-w-screen-2xl  rounded-lg bg-white !p-0 `}>
            <Container className="max-w-screen relative z-10 mx-auto w-full !p-0  ">
              <div
                className={` w-full max-w-full  ${isheading ? "" : "flex !h-full !max-h-full flex-col md:flex-row"}`}
              >
                {isheading ? (
                  <>
                    <div className="relative mt-4 max-w-[350px] ">
                      <h2 className="h4 my-0 pl-4 text-left !font-medium text-black 2xl:text-4xl">
                        {title ? title : "Get In touch"}
                      </h2>
                      <p className="mx-auto my-4 mt-0 pl-4 md:max-w-5xl 2xl:text-xl 3xl:max-w-6xl">
                        {subtitle ? subtitle : "Talk to our Career Experts"}{" "}
                      </p>
                      <div className="absolute  top-0 h-full w-1.5" style={{ backgroundColor: "#ff9933" }}></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" flex  basis-1/2  items-center justify-center rounded-lg bg-black px-4 py-16 md:rounded-none md:p-0 ">
                      <div className=" flex flex-col self-center align-middle">
                        {" "}
                        <h2 className="h2  text-white">Take The First Step</h2>
                        <p className=" text-white">Register Here</p>
                      </div>
                    </div>
                  </>
                )}
                <div className={`mx-auto ${isheading ? "" : "h-[630px] basis-1/2 rounded-lg "}  place-content-center `}>
                  {/* <GetInTouchForm /> */}
                  {currentQuestion && (
                    <div className="mx-auto w-full max-w-xl">
                      <h2 className="h4 my-0 pl-4 text-left font-medium text-black 2xl:text-4xl">
                        {currentQuestion.question}
                      </h2>
                      <ul className="mx-auto my-4 mt-0 pl-4 md:max-w-5xl 2xl:text-xl 3xl:max-w-6xl">
                        {currentQuestion.answers.map((answer, index) => (
                          <li key={index} className="my-4">
                            <Button
                              variant="outline"
                              size="large"
                              className={`!max-w-full !px-0 hover:bg-yellow-300 ${state.selectedAnswer === answer ? "bg-yellow-300" : ""}`}
                              onClick={() => dispatch({ type: "SET_SELECTED_ANSWER", payload: answer })}
                            >
                              {answer}
                            </Button>
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="primary"
                        size="large"
                        className="m-4 !max-w-full "
                        onClick={handleQuestionSubmit}
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </Section>{" "}
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Quiz
