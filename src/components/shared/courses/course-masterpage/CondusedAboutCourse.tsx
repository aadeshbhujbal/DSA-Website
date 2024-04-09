import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import React from "react"

interface ConfusedaboutCourseProps {
  title: string
  description: string
  buttonText: string
  onButtonClick?: () => void
}

const ConfusedaboutCourse: React.FC<ConfusedaboutCourseProps> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <>
      <Container className="mx-auto !pt-0">
        <h2 className="h4 py-2 text-center !font-medium text-black">{title}</h2>
        <p className="mx-auto pb-6 text-center sm:pb-6 md:max-w-2xl 3xl:max-w-6xl">{description}</p>
        <div className="mx-auto flex flex-row justify-center">
          <Button className="mt-4  " size={"large"} variant={"default"} onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      </Container>
    </>
  )
}

export default ConfusedaboutCourse
