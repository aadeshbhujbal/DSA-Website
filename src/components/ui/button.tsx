import clsx from "clsx"
import Link from "next/link"
import React from "react"
import { VariantProps, Variants } from "./Variants"

interface ButtonProps extends VariantProps {
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  href,
  children,
  asDiv,
  style,
  type = "button",
  disabled = false,
  ariaLabel,
  ...rest
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  const combinedClasses = clsx(baseClasses, Variants({ variant, size }), className)

  const buttonProps = {
    className: combinedClasses,
    style: style,
    type: type,
    disabled: disabled,
    "aria-label": ariaLabel || (typeof children === "string" ? children : undefined),
    ...rest,
  }

  if (asDiv) {
    return <div {...buttonProps}>{children}</div>
  } else if (href) {
    return (
      <Link href={href} {...buttonProps} target="_blank">
        {children}
      </Link>
    )
  }

  return <button {...buttonProps}>{children}</button>
}

export default Button
