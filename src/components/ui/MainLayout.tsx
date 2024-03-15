"use client"
import { motion, MotionConfig, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

import { Footer } from "../shared/Footer/Footer"

function MainLayoutInner({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [expanded, setExpanded] = useState(false)

  let shouldReduceMotion = useReducedMotion()

  // useEffect(() => {
  //   function onClick(event: any) {
  //     if (event.target.closest("a")?.href === window.location.href) {
  //       setExpanded(false)
  //     }
  //   }

  //   window.addEventListener("click", onClick)

  //   return () => {
  //     window.removeEventListener("click", onClick)
  //   }
  // }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      {" "}
      {/* <header className="!bg-black ">
        <div className=" !fixed inset-x-0 top-0 !z-40 bg-[#000000]">
          <Header1 className="" />
        </div>
      </header> */}
      <motion.div layout className=" relative isolate flex w-full flex-col">
        <main className="w-full flex-auto">{children}</main>
      </motion.div>
      <motion.div
        layout
        // style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
        className="relative flex flex-auto overflow-hidden bg-black !pt-8 "
      >
        <Footer />
      </motion.div>
    </MotionConfig>
  )
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()

  return <MainLayoutInner key={pathname}>{children}</MainLayoutInner>
}
