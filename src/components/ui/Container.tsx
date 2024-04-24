import clsx from "clsx"
import React, { ReactNode } from "react"

type Props = {
  term?: string
  className?: string
  children: ReactNode
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

export const Container: React.FC<Props> = ({ as: Component = "div", className, children }) => {
  return (
    <Component className={clsx("container mx-auto max-w-screen-2xl py-8", className)}>
      <div className="mx-auto w-full items-center justify-center lg:max-w-none">{children}</div>
    </Component>
  )
}
