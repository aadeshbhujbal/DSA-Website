"use client"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"
import { cn } from "@/lib/utils"
import { VariantProps, Variants } from "./Variants"

const VerticalTabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & VariantProps // Add VariantProps to props
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Root
    orientation="vertical"
    ref={ref}
    className={cn(
      "border-3 flex gap-1 rounded-md border-white p-1 text-muted-foreground",
      Variants({ variant }), // Apply variant classes here
      className
    )}
    {...props}
  />
))

VerticalTabs.displayName = TabsPrimitive.List.displayName

const VerticalTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & VariantProps // Add VariantProps to props
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex h-auto flex-col items-center justify-start rounded-md bg-muted p-1 text-muted-foreground",
      Variants({ variant }), // Apply variant classes here
      className
    )}
    {...props}
  />
))

VerticalTabsList.displayName = TabsPrimitive.List.displayName

const VerticalTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & VariantProps // Add VariantProps to props
>(({ className, variant, size, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex items-center justify-start whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      Variants({ variant, size }), // Apply variant classes here
      className
    )}
    {...props}
  />
))

VerticalTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const VerticalTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ml-4 mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))

VerticalTabsContent.displayName = TabsPrimitive.Content.displayName

export { VerticalTabs, VerticalTabsContent, VerticalTabsList, VerticalTabsTrigger }
