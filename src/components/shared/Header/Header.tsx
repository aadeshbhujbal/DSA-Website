import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { navigationHomeDesktop } from "@/constants"
// import { AllCourse } from "./AllCourse"
import { ourPrograms } from "@/constants/constants"
import AllCourse from "./AllCourse"
import HeaderLogo from "./HeaderLogo"
import MobileMenu from "./MobileMenu"
import { DesktopHamMenu } from "./rightmenu2/DesktopHamMenu"
interface MenuProps {
  className?: string // Make className an optional prop
}

export const DesktopNavigationMenu: React.FC<MenuProps> = ({ className }) => {
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
              isActive ? "self-center align-middle font-bold text-link" : "text-black"
            } relative block w-fit self-center align-middle text-black after:absolute after:block after:h-[3px] after:w-full after:origin-center after:transition after:duration-300	hover:text-[] after:hover:scale-x-100 lg:after:scale-x-0 lg:after:rounded-md lg:after:bg-[#006CE8] lg:after:content-[''] ${className}`}
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
    <div className="hidden justify-between gap-8 self-center py-6 align-middle  lg:flex lg:flex-row">
      {/* <div className="justift-between text-center ">
        <AllCourse />
      </div> */}
      <DesktopNavigationMenu />
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
      <Container className="!noise-bg sticky mt-3 !max-w-full  rounded-t-xl !bg-white/80 !py-0 shadow-md">
        <div className="!mx-auto !max-w-screen-2xl">
          <FadeIn>
            <div className="space-y-8 px-4  sm:px-6 lg:space-y-16 ">
              <div className=" flex flex-row justify-between">
                <div className="flex flex-row  justify-between gap-12 py-6">
                  <Link href="/" aria-label="Home" className="">
                    <HeaderLogo className="size-8" fillOnHover />
                  </Link>
                  <div className="">
                    <AllCourse programs={ourPrograms} />
                  </div>
                </div>

                <NavigationHomeDesktop />
                <MobileMenu />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  )
}

export default Header1
