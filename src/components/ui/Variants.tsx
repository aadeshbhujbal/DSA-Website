import clsx from "clsx"
import React from "react"

export interface VariantProps {
  variant?: "primary" | "secondary" | "default" | "destructive" | "ghost" | "link" | "outline"
  size?: "small" | "medium" | "large" | "default" | "icon"
  className?: string
  href?: string
  children?: React.ReactNode
  target?: boolean
  asDiv?: boolean
  style?: React.CSSProperties
  placeholder?: string
  position?: any
  role?: string
}

export const Variants = ({ variant, size }: { variant?: VariantProps["variant"]; size?: VariantProps["size"] }) => {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: " bg-transparent ",
    link: "text-primary underline-offset-4 hover:underline",
  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    small: "h-9 rounded-md px-3 text-sm",
    medium: "text-base h-11 rounded-lg px-8",
    large: "text-lg rounded-lg px-20 h-11 ",
    icon: "h-10 w-10",
  }

  return clsx(variant && variantClasses[variant], size && sizeClasses[size])
}

{
  /* <FormItem>
<FormLabel>Country</FormLabel>
<Select
  {...field}
  options={countries.map((country) => ({
    label: `${country.flag}  ${country.phone_code}`,
    value: country.country_code,
  }))}
  className="w-32 bg-transparent hover:bg-accent  hover:text-accent-foreground"
  defaultValue={form.getValues("country")}
  isSearchable
  onChange={(selectedOption) => form.setValue("country", selectedOption)}
/>
</FormItem> */
}