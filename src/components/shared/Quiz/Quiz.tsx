"use client"

import React, { useEffect, useState } from "react"
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

const Quiz: React.FC<QuizProps> = ({ buttonComponent, subtitle, title, isheading }) => {
  const [showCourses, setShowCourses] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [quizData, setQuizData] = useState<QuizQuestions[]>(initialQuizData)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [CourseKey, setCourseKey] = useState<number | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false) // State to track form submission

  const handleQuestionSubmit = () => {
    if (selectedAnswer !== null) {
      const currentQuestion = QuizData[currentQuestionIndex]
      if (currentQuestion) {
        // Check if currentQuestion is not undefined
        const updatedQuizData = [...quizData]
        updatedQuizData.push({ question: currentQuestion.question, answers: [selectedAnswer] }) // Wrap selectedAnswer in an array
        setQuizData(updatedQuizData)

        const updatedSelectedAnswers = [...selectedAnswers, selectedAnswer]
        setSelectedAnswers(updatedSelectedAnswers)

        if (currentQuestionIndex < QuizData.length - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
          setSelectedAnswer(null)
        } else {
          console.log("Selected Questions and Answers:")
          updatedQuizData.forEach((question) => {
            console.log("Question:", question.question)
            console.log("Selected Answer:", question.answers)
          })
          determineKey(updatedSelectedAnswers)
          setShowCourses(true)
          setTimeout(() => {
            setShowCourses(false)
            setFormSubmitted(false)
            setCurrentQuestionIndex(0)
            setSelectedAnswer(null)
            setQuizData([])
            setSelectedAnswers([])
          }, 15000)
        }
      }
    }
  }

  const determineKey = (answers: string[]) => {
    if (answers.includes("Cybersecurity")) {
      setCourseKey(2)
    } else if (answers.includes("Data Science")) {
      setCourseKey(3)
    } else if (answers.includes("Digital Marketing")) {
      setCourseKey(4)
    } else if (answers.includes("Cloud and Networking")) {
      setCourseKey(5)
    } else if (answers.includes("Programming")) {
      setCourseKey(6)
    } else {
      setCourseKey(null)
    }
  }

  const handleFormSubmit = () => {
    setFormSubmitted(true)
  }

  const currentQuestion = QuizData[currentQuestionIndex]

  return (
    <Dialog>
      <DialogTrigger asChild>{buttonComponent}</DialogTrigger>
      {showCourses ? (
        <DialogContent className="!overflow-scroll !p-0 lg:!h-[550px] lg:min-w-[1100px]">
          <CoursesSubCategories
            id="cybersecuritryCourses"
            courseid={CourseKey}
            title="Suggested Courses Based on Your Preferences"
            description="Embark on a journey of personalized learning with our carefully curated course selections. Explore topics tailored to your interests and goals. Start today and unlock your full potential!"
          />
        </DialogContent>
      ) : (
        <DialogContent
          className={`w-full max-w-screen-2xl !rounded-lg !border-link ${isheading ? "!max-w-[400px] !p-6" : "!mr-10 md:py-0 md:pb-6 md:pl-0 lg:pb-0"}`}
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
                        {!formSubmitted ? (
                          <>
                            {" "}
                            <h2 className="h2  text-white">Take The First Step</h2>
                            <p className=" text-white">Register Here</p>
                          </>
                        ) : (
                          <>
                            <h2 className="h2  text-white">Help us understand you!</h2>
                            <p className=" text-white">
                              Answer a few quick questions to guide us in suggesting the best course for you.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
                <div className={`mx-auto ${isheading ? "" : "h-[580px] basis-1/2 rounded-lg "}  place-content-center `}>
                  <>
                    {!formSubmitted ? (
                      <div className="lg:min-h-[400px]">
                        {" "}
                        <GetInTouchForm onSubmit={handleFormSubmit} />
                      </div>
                    ) : (
                      <div className="flex w-full flex-col items-center lg:min-h-[400px]">
                        <div className="w-full max-w-lg">
                          {currentQuestion && (
                            <>
                              <h3 className="pb-2 text-lg font-bold">{currentQuestion.question}</h3>
                              <ul>
                                {currentQuestion.answers.map((answer) => (
                                  <li key={answer} className="my-4">
                                    <Button
                                      variant="outline"
                                      onClick={() => setSelectedAnswer(answer)}
                                      className={`w-full py-2 text-left hover:bg-yellow-300 ${selectedAnswer === answer ? "bg-yellow-300" : ""}`}
                                    >
                                      {answer}
                                    </Button>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                    <div className="mt-4 flex w-full flex-col items-center gap-6 md:max-w-3xl">
                      {!formSubmitted ? (
                        <></>
                      ) : (
                        <Button
                          onClick={handleQuestionSubmit}
                          disabled={selectedAnswer === null}
                          variant="primary"
                          size="large"
                          className=" !max-w-lg  "
                        >
                          Next
                        </Button>
                      )}
                      {/* <p>
                        Progress: {formSubmitted ? currentQuestionIndex + 2 : "1"} / {QuizData.length + 1}
                      </p> */}
                      <div className="flex items-center space-x-1 ">
                        {[...Array(QuizData.length + 1)].map((_, index) => (
                          <div
                            key={index}
                            className={`h-1 w-14 rounded-md bg-gray-300 ${
                              index <= (formSubmitted ? currentQuestionIndex + 1 : 0) ? "!bg-blue-500" : ""
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </>
                  {/* <div className="mt-4 w-full max-w-lg">
                  <p>
                    Progress: {formSubmitted ? currentQuestionIndex + 2 : "1"} / {QuizData.length + 1}
                  </p>
                  <div className="h-2 w-full bg-gray-300">
                    <div
                      className="h-full bg-blue-500"
                      style={{
                        width: `${((formSubmitted ? currentQuestionIndex + 2 : 1) / (QuizData.length + 1)) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div> */}
                </div>
              </div>
            </Container>
          </Section>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default Quiz

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
