import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import Button from "@/components/ui/button"

const Lms = () => {
  return (
    <Section className="bg-gradient-to-t from-[#c6ffae4d]  to-white/10 !p-0 ">
      {" "}
      <Container className="p-6 !opacity-100 ">
        <h2 className="h4 py-2 text-center !font-medium text-black">Get immersive learning experience</h2>
        <p className="mx-auto pb-6 text-center sm:pb-2 md:max-w-2xl 3xl:max-w-6xl">
          Meet our Learning Management System (LMS), where innovation meets education. Our LMS offers a seamless
          learning experience.
        </p>
        <div className="mx-auto flex flex-col md:flex-row 2xl:max-w-screen-2xl">
          <div className="mx-auto  self-center ">
            <ul className="tick-icon-list">
              <li>
                <h6 className="base-medium">Interactive Content Delivery:</h6>
                <p className="base-regular">Engage learners with multimedia, simulations, and gamified experiences.</p>
              </li>
              <li>
                <h6 className="base-medium">Robust Assessment Tools:</h6>
                <p className="base-regular">
                  Track progress and assess performance with customizable quizzes and assignments.
                </p>
              </li>

              <li>
                <h6 className="base-medium">Collaborative Spaces:</h6>
                <p className="base-regular">
                  Foster interaction and communication through discussion forums and group projects
                </p>
              </li>
              <li>
                <h6 className="base-medium">Comprehensive Analytics:</h6>
                <p className="base-regular"> Gain insights into learner engagement and course effectiveness.</p>
              </li>
            </ul>
            <Button variant={"default"} href="" size="medium" className="mt-5 w-full  max-w-[250px]">
              Start Learning
            </Button>
          </div>
          <Image
            className="mx-auto w-full max-w-2xl py-8 "
            src={"/images/LMS1.png"}
            width={400}
            height={400}
            alt="DataSpace Learning Management System"
          />
        </div>
      </Container>
    </Section>
  )
}

export default Lms
