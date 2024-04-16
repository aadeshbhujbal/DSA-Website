"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    variant?: Variant;
  }
>(({ className, variant, ...props }, ref) => (
<TabsPrimitive.List
  ref={ref}
  className={cn(
   
    variant === "secondary"
      ? "h-0 inline-flex w-full items-center justify-between rounded-md p-1 text-muted-foreground"
      : variant === "referandearnpagetab"
      ? " h-90 inline-flex w-full items-center justify-center rounded-md p-7 text-muted-foreground"
      : variant === "trainertab"
      ? "h-60 border-b-2 border-gray-300 inline-flex w-full items-center justify-between rounded-md p-1 text-muted-foreground"
      : "",   
      className
  )}
  {...props}
/>


))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    variant?: Variant;
  }
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      variant === "secondary"
      ? "inline-flex items-center justify-evenly whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm bg-black"
      : variant === "referandearnpagetab"
      ? "inline-flex  justify-evenly whitespace-nowrap rounded-md px-4 py-1.5 text-sm from-neutral-100 ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white [data-state=active]:shadow-lg data-[state=active]:text-gray-400 data-[state=active]:shadow-sm" 
      : "inline-flex items-center justify-evenly whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-sm" // this one used in trainer's profile tab 
      ,
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-1 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
