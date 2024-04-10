"use client"
import Image from "next/image"
import React from "react"
import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/utils"

const RatingCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        " rounded-lg border !bg-[#fff] px-4 py-2 text-card-foreground opacity-100 shadow-sm md:px-6",
        className
      )}
      {...props}
    />
  )
)
RatingCard.displayName = "RatingCard"

const ratingName = [
  {
    companylogo: "/ratings/google-logo.svg",
    companyName: "Google Reviews",
    ratings: "Rated 4.8",
  },
  {
    companylogo: "/ratings/trust-pilot.svg",
    companyName: "Trustpilot Reviews",
    ratings: "Rated 4.6",
  },
  {
    companylogo: "/ratings/just-dial.svg",
    companyName: "Justdial Reviews",
    ratings: "Rated 4.8",
  },
]
interface RatingProps {
  header?: boolean;
}
const Rating: React.FC<RatingProps>  = ({header}) => {
  return (
    <Container className="!p-0 ">
      {header && <h2 className="h5 mt-2 text-center !font-medium text-black">Trust Ratings</h2>}
      <div className="w-100  bg-gradient-to-b from-[#C6FFAE00] to-[#C6FFAE4D] p-6  !pb-20  !opacity-100 md:p-2 lg:p-16 lg:pt-4 ">
        <div className="flex flex-row flex-wrap justify-center gap-3  md:flex-row md:gap-7">
          {ratingName.map((item) => {
            return (
              <RatingCard
                key={item.companyName}
                className="flex flex-row flex-wrap items-center gap-3 justify-self-center"
              >
                <div className="">
                  {" "}
                  <Image
                    priority={false}
                    loading="lazy"
                    key={item.companyName}
                    src={item.companylogo}
                    width={50}
                    height={50}
                    alt={item.companyName}
                    className=" size-8 md:w-auto"
                  />
                </div>

                <div className="">
                  <p className="tiny-regular md:base-regular">{item.companyName}</p>
                  <p className="h6 md:h5 font-semibold"> {item.ratings}</p>
                </div>
              </RatingCard>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default Rating
