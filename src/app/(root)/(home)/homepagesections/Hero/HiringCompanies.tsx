import Image from "next/image"
import React, { useId } from "react"
import { Container } from "@/components/ui/Container"
import { InfiniteMoving } from "@/components/ui/InfiniteMoving"
import { hiringCompanies } from "@/constants"

const HiringCompanies = () => {
  const id = useId()
  return (
    <Container className="!p-0">
      <h2 className="h4 mt-6 px-4 text-center !font-medium text-black lg:mt-16">
        Ignite Your Career With Top Hiring Companies
      </h2>
      <div className="rounded-md] relative flex flex-col items-center justify-center overflow-hidden antialiased  [mask-image:linear-gradient(to_right,transparent,white_20%,white_90%,transparent)]">
        <InfiniteMoving direction="left" speed="normal" pauseOnHover={false}>
          {hiringCompanies.map((item) => {
            return (
              <Image
                key={`${id}-${item.title}`}
                src={item.src}
                alt={item.alt}
                title={item.title}
                width={125}
                height={125}
                className="!size-20 md:!size-[120px]"
              />
            )
          })}
        </InfiniteMoving>
      </div>
    </Container>
  )
}

export default HiringCompanies
