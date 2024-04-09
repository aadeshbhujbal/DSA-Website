import { Container } from "@/components/ui/Container"
import Button from "@/components/ui/button"
import Image from "next/image"

const UpskillCourses = () => {
  return (
    <>
      <Container className="!bg-black !pb-0">
        <div className="mx-auto flex flex-col justify-items-start md:flex-row md:gap-6 2xl:max-w-7xl">
          <div className="basis-2/3 ">
            <h4 className="h6 py-4 !font-medium text-white">
              Upskill yourself with our <span className="text-blue-secondary"> FREE</span> courses
            </h4>
            <p className="p base-regular max-w-4xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <div className="mx-auto flex flex-row justify-start pb-6">
              <Button className="mt-4 w-full max-w-[320px]" size={"large"} variant={"default"}>
                Explore Now
              </Button>
            </div>
          </div>
          <div className="">
            <Image src="/images/tablet-1.png" alt="" width={400} height={400} className="" />
          </div>
        </div>
      </Container>
    </>
  )
}

export default UpskillCourses
