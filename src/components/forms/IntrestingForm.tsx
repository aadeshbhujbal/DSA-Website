"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUp } from "lucide-react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

import * as z from "zod"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import countriesData from "@/components/forms/FormComponents/countries.json" // Import the country data
import { IntrestingFormSchema } from "@/functions/validations"
import { cn } from "@/lib/utils"
import Button from "../ui/button"
import { Container } from "../ui/Container"
import { GridPattern } from "../ui/GridPattern"
import Input from "../ui/input"
import { Section } from "../ui/Section"
import MobileNumberCombo from "./FormComponents/MobileNumberCombo"

const IntrestingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof IntrestingFormSchema>>({
    resolver: zodResolver(IntrestingFormSchema),
    defaultValues: {
      emailAddress: "",
      phoneNumber: "",
      country: { label: "India 🇮🇳 +91", value: "IN" },
    },
  })

  async function onSubmit(values: z.infer<typeof IntrestingFormSchema>) {
    setIsSubmitting(true)
  }

  const countries = countriesData.countries || []

  return (
    <Section className="relative !py-0">
      <GridPattern
        className="gradient-dark-background absolute inset-0 z-[-10] size-full  fill-[#0142ac27] stroke-[#e0e5f20a] text-black"
        yOffset={0}
        interactive
      />
      <Container className="relative z-10 py-14 ">
        <h2 className="h4 my-2 text-center !font-medium text-white">Interesting right?</h2>
        <p className="mx-auto text-center text-white md:max-w-5xl 3xl:max-w-6xl">
          Lets Connect with our Academic Counselor
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto flex w-full flex-col justify-center gap-4 md:max-w-5xl md:flex-row 3xl:max-w-7xl"
          >
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem className="w-full  bg-black">
                  <Input
                    placeholder="Email Address"
                    className="  border-2 bg-black text-white !outline-none !ring-offset-link placeholder:text-[#EBEBEB] focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0"
                    size="medium"
                    variant="ghost"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => <FormItem className="w-full  bg-black">{/* <MobileNumberCombo /> */}</FormItem>}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full  bg-black">
                  <Input
                    placeholder="Phone Number"
                    className="  border-2 bg-black text-white !outline-none !ring-offset-link placeholder:text-[#EBEBEB] focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0"
                    size="medium"
                    variant="ghost"
                    {...field}
                  />
                </FormItem>
              )}
            />

            <Button className="m-0 w-full max-w-[250px] self-center p-0" size={"medium"} variant={"default"}>
              Submit{" "}
            </Button>
          </form>
        </Form>
      </Container>
    </Section>
  )
}

export default IntrestingForm
