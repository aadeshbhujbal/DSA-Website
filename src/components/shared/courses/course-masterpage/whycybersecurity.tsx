import React from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

const Whycybersecurity = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="h5 !font-medium">Why should you learn Cybersecurity in 2023?</h3>
            <p>
              Embark on an exhilarating journey in 2023 by diving into ethical hacking. Unlock career opportunities,
              become a digital guardian, and contribute to a global community of cyber defenders.
            </p>
          </div>
          <div className="basis-1/2">
            <h3 className="h5 !font-medium">Salary Range of a Cybersecurity Expert in India</h3>
            <div className="flex flex-row">
              <p className="body-regular">
                In India, the salary range for ethical hackers can vary based on factors such as experience, location,
                industry, and certifications.{" "}
              </p>
              {/* <Image src={} /> */}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Whycybersecurity
