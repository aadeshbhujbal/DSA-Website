"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

import * as z from "zod"
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form"
import countriesData from "@/functions/countries.json" // Import the country data
import { IntrestingFormSchema } from "@/functions/validations"
import { Container } from "../ui/Container"
import { GridPattern } from "../ui/GridPattern"
import Input from "../ui/input"
import { Section } from "../ui/Section"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

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
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col md:flex-row ">
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Username</FormLabel>
                  <Input placeholder="Input Name" size="medium" variant="ghost" {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <Input placeholder="Input Phone Number" size="medium" variant="ghost" {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select>
                    <SelectTrigger className="w-[180px] text-white">
                      <SelectValue placeholder="Select a timezone" className="text-white" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <React.Fragment key={country.country_code}>
                          <SelectItem
                            value={country.country_code}
                            onClick={() => handleCountryChange(country.country_code)}
                          >
                            {`${country.flag} ${country.phone_code}`}
                          </SelectItem>
                          <SelectSeparator />
                        </React.Fragment>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </Container>
    </Section>
  )
}

export default IntrestingForm
