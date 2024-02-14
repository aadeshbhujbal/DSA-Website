import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { navigationHomeDesktop } from "@/constants"
// import { AllCourse } from "./AllCourse"
import  HeaderLogo  from "./HeaderLogo"
import { DesktopHamMenu } from "./rightmenu2/DesktopHamMenu"


const DesktopNavigationMenu = () => {
  const pathname = usePathname()

  return (
    <>
      {navigationHomeDesktop.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route

        return (
          <Link
            href={item.route}
            key={item.route}
            className={`${
              isActive ? "text-link self-center align-middle font-bold" : "text-black"
            } relative block w-fit self-center align-middle text-black after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:rounded-md	after:bg-[#006CE8] after:transition after:duration-300 after:content-[''] hover:text-[] after:hover:scale-x-100`}
          >
            {item.label}
          </Link>
        )
      })}
    </>
  )
}

const NavigationHomeDesktop = () => {
  return (
    <div className="flex flex-row justify-between gap-8 self-center py-6 align-middle">
      <DesktopNavigationMenu />
      {/* <div className="justift-between text-center ">
                  <AllCourse />
                </div> */}
      <div className=" self-center align-middle">
        <DesktopHamMenu />
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Header1({ className }: { className?: string }) {
  return (
    <>
      <Container className=" sticky  mt-3 rounded-t-3xl bg-[#ffff]">
        <div className=" mx-auto">
          <FadeIn>
            <div className="space-y-8 px-4  sm:px-6 lg:space-y-16">
              <div className=" flex flex-row justify-between">
                <div className="py-6">
                  <Link href="/" aria-label="Home">
                    <HeaderLogo className="size-8" fillOnHover />
                  </Link>
                </div>
                <NavigationHomeDesktop />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  )
}

export default Header1
