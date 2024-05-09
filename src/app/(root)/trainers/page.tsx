import React from "react"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { trainerDetails } from "@/constants/trainer"
import { TrainerCard } from "../(home)/homepagesections/IndustryExperts"

const page = () => {
  return (
    <Section className="!pt-0">
      <Container className=" w-full !max-w-full bg-black">
        <div className="mx-auto flex max-w-screen-2xl flex-col justify-center gap-8 py-12">
          <h2 className="h2 mt-6 px-4 text-center !font-medium text-white lg:mt-16">Meet Our Trainers</h2>
          <p className="mx-auto max-w-screen-md px-4 text-center text-white/70 lg:text-lg">
            Discover profiles brimming with professional insights, specialties, and personal stories. From seasoned
            industry leaders to dynamic up-and-comers, each mentor is dedicated to fueling your success. Connect with a
            mentor who resonates with your goals and embark on an inspiring learning journey with us.
          </p>
          <Button className="mx-auto  " variant="primary" size="large">
            Explore Our Trainers
          </Button>
        </div>
      </Container>
      <Container className="pt-16">
        <div className="flex flex-wrap justify-center gap-12">
          <TrainerCard trainerDetails={trainerDetails} />
        </div>

        <div className="mx-auto mt-16 flex max-w-screen-lg flex-col gap-8 self-center md:flex-row">
          <div className=" basis-2/3">
            <h2 className="h4 py-2 !font-medium text-black">Curious about joining our team?</h2>
            <p>
              Discover opportunities to join our dynamic team. Contribute your talents to our mission alongside
              experienced professionals dedicated to growth and innovation.
            </p>
          </div>
          <div className="w-full basis-1/3  self-center">
            <Button className=" " variant="primary" size="large">
              Join us Now
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default page
