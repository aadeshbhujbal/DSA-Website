// In your Input component file

import * as React from "react"
import { cn } from "@/lib/utils"

import { VariantProps, Variants } from "./Variants"

const Input = React.forwardRef<HTMLInputElement, VariantProps>(
  ({ className, variant = "default", size = "default", placeholder, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
          Variants({ variant, size }),
          className
        )}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export default Input
