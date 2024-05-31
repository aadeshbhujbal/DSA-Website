import Image from "next/image"
import React from "react"

import Button from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DesktopNavigationMenu } from "./Header"
import { DesktopNavigationHamburgerMenu } from "./rightmenu2/DesktopHamMenuItem"

const MobileMenu = () => {
  return (
    <div className="self-center text-black lg:hidden">
      <Sheet>
        <SheetTrigger asChild className="self-center">
          <Button variant="outline">
            <Image src={"/images/hamburger-menu.svg"} width={20} height={20} alt={"Profile"} />
          </Button>
        </SheetTrigger>
        <SheetContent className=" flex flex-col gap-2">
          <DesktopNavigationMenu className="mt-4 w-full  !self-center rounded-xl bg-slate-200 p-4 hover:bg-link" />
          <DesktopNavigationHamburgerMenu className="w-full !self-center  rounded-xl bg-slate-200 p-4 hover:bg-link" />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
