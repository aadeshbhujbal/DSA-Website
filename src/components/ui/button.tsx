import clsx from "clsx"
import Link from "next/link"
import React from "react"
import { VariantProps, Variants } from "./Variants"

const Button: React.FC<VariantProps> = ({
  variant,
  size,
  className,
  href,
  children,
  asDiv,
  style,
  ...rest
}: VariantProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  const combinedClasses = clsx(baseClasses, Variants({ variant, size }), className)
  if (asDiv) {
    return (
      <div className={combinedClasses} style={style} {...rest}>
        {children}
      </div>
    )
  } else if (href) {
    return (
      <Link href={href} className={combinedClasses} {...rest} target="_blank">
        {children}
      </Link>
    )
  }
  return (
    <button className={combinedClasses} style={style} {...rest}>
      {children}
    </button>
  )
}

export default Button
