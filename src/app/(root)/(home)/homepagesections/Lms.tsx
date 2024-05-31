import Image from "next/image"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

const Lms = () => {
  return (
    <Section className="bg-gradient-to-t from-[#c6ffae4d]  to-white/10 !p-0 ">
      {" "}
      <Container className="p-6 !opacity-100 ">
        <h2 className="h4 py-2 text-center !font-medium text-black">
          Dive into a state-of-the-art Immersive Learning Experience
        </h2>
        <p className="base-regular mx-auto pb-6 text-center sm:pb-2 md:max-w-2xl 3xl:max-w-6xl">
          Say Hello to our dedicated LMS (Learning Management System) where you will find complete account of our course
          and cohorts. A blend of innovation and education, our LMS is designed with care to ensure the most seamless
          learning experience.
        </p>
        <div className="mx-auto flex flex-col md:flex-row 2xl:max-w-screen-2xl">
          <Image
            className="mx-auto w-full max-w-2xl py-8 "
            src={"/images/LMS1.png"}
            width={400}
            height={400}
            alt="DataSpace Learning Management System"
          />
          <div className="mx-auto  self-center ">
            <ul className="tick-icon-list">
              <li>
                <h6 className="base-medium">Interactive classes</h6>
                <p className="base-regular">
                  We ensure the most engaging learning ambience with interactive classes, doubt-clearing sessions, and
                  MCQ quizzes.
                </p>
              </li>
              <li>
                <h6 className="base-medium">Course Tracking</h6>
                <p className="base-regular">
                  Easy tracking of courses progress, classes assigned, and upcoming classes.
                </p>
              </li>

              <li>
                <h6 className="base-medium">Academic Resources</h6>
                <p className="base-regular">
                  You will have access to all the academic resources related to your course in just a few clicks, in one
                  single portal.
                </p>
              </li>
              {/* <li>
                <h6 className="base-medium">Comprehensive Analytics:</h6>
                <p className="base-regular"> Gain insights into learner engagement and course effectiveness.</p>
              </li> */}
            </ul>
            <Button variant={"default"} href="" size="medium" className="mt-5 w-full  max-w-[250px]">
              Start Learning
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Lms
