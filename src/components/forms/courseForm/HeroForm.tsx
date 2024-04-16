"use client"

// Importing necessary dependencies
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

// Importing components and data
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import Input from "@/components/ui/input"
import { Section } from "@/components/ui/Section"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TickIcon } from "@/constants/icons"
import { HeroFormSchema } from "@/functions/validations"
import { countryData } from "../FormComponents/countries"

// Defining types for form data
type FormData = z.infer<typeof HeroFormSchema>

// Main component for the interesting form
const HeroForm: React.FC = () => {
  // State variables for form submission status and selected country
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [selectedCountry, setSelectedCountry] = React.useState("+91") // Default value set to +91
  const [selectedCountryFlag, setSelectedCountryFlag] = React.useState("🇮🇳") // Default flag for India

  // Form hook initialization
  const form = useForm<FormData>({
    resolver: zodResolver(HeroFormSchema),
    defaultValues: {
      emailAddress: "",
      phoneNumber: "",
      country: "+91",
    },
  })

  // Function to handle form submission
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Trigger validation
    const isValid = await form.trigger()

    if (isValid) {
      // If form is valid, prepare data for submission
      const data: FormData = form.getValues()

      // Find selected country data
      const selectedCountryData = countryData.countries.find((country) => country.phone_code === selectedCountry)

      if (!selectedCountryData) {
        console.error("Error: Selected country data not found")
        setIsSubmitting(false)
        return
      }

      // Format form data with selected country
      const formattedData: FormData = {
        emailAddress: data.emailAddress,
        phoneNumber: `${selectedCountry} ${data.phoneNumber}`,
        country: selectedCountryData.name,
      }

      try {
        // Retrieve existing data from localStorage
        const existingDataJSON = localStorage.getItem("formData")
        let existingData: FormData[] = []

        if (existingDataJSON) {
          existingData = JSON.parse(existingDataJSON) as FormData[]
          console.log("Existing form data:", JSON.stringify(existingData, null, 2))
        }

        // Append new data to existing data
        existingData.push(formattedData)

        // Store updated data back to localStorage
        localStorage.setItem("formData", JSON.stringify(existingData))
        const exportedDataJSON = JSON.stringify(existingData, null, 2)
        const blob = new Blob([exportedDataJSON], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "formData.json"
        // a.click() //commented this function so  that the download does not start automatically after clicking submit

        console.log("Data successfully stored in localStorage")
      } catch (error) {
        console.error("Error storing data in localStorage:", error)
      }

      // Reset form and update submission status
      setIsSubmitting(false)
      setSubmitted(true)
      form.reset()
      setTimeout(() => {
        setSubmitted(false)
      }, 2000)
    } else {
      setIsSubmitting(false)
    }
  }

  // Rendering the form component
  return (
    <Section className="relative !py-0">
      <Container className="relative z-10 mx-auto  py-14">
        {/* Title and description */}
        <div className="">
          <h2 className="h4 my-2 text-left !font-medium text-black">Get In touch </h2>
          <p className="text-cente mx-auto my-4 md:max-w-5xl 3xl:max-w-6xl">Talk to our Career Experts </p>
        </div>

        {/* Main form */}
        <Form {...form}>
          <form
            onSubmit={onSubmit}
            className="mx-auto flex w-full flex-col  gap-4 md:max-w-6xl lg:!flex-col 3xl:max-w-6xl"
          >
            {/* Email field */}
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem className="w-full lg:!max-w-[23rem] ">
                  <Input
                    placeholder="Email Address"
                    className=" border-![#EBEBEB]!outline-none  w-full border-2 bg-black  text-white !ring-offset-0 placeholder:text-border focus:border-link focus:!outline-none focus-visible:!outline-none focus-visible:ring-0"
                    size="medium"
                    variant="ghost"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" flex w-full flex-row gap-3 md:gap-4 ">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className={"!w-28 md:!w-36"}>
                    <div className=" !w-28 md:!w-36">
                      <Select
                        onValueChange={(value: string) => {
                          setSelectedCountry(value)
                          const selectedCountryData = countryData.countries.find(
                            (country) => country.phone_code === value
                          )
                          setSelectedCountryFlag(selectedCountryData?.flag || "")
                          field.onChange(value)
                        }}
                        defaultValue={selectedCountry} // Set default value to +91
                      >
                        {/* SelectTrigger component */}
                        <SelectTrigger className="!w-30 border-![#EBEBEB] w-full border-2 bg-black text-white outline-none !ring-offset-link placeholder:text-border focus:!outline-none focus:ring-0  focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0 ">
                          <SelectValue placeholder=" +91" className="!w-30 ">
                            {selectedCountryFlag && selectedCountryFlag} {selectedCountry && `(${selectedCountry})`}
                          </SelectValue>
                        </SelectTrigger>

                        {/* SelectContent component */}
                        <SelectContent className=" border-![#EBEBEB]!outline-none w-full border-2 bg-black  text-white !ring-offset-link placeholder:text-border focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0">
                          {/* Display country options */}
                          {countryData.countries.map((country) => (
                            <SelectItem key={country.phone_code} value={country.phone_code}>
                              {country.flag} ({country.phone_code})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone number field */}
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input
                      placeholder="Phone Number"
                      className=" border-![#EBEBEB]!outline-none w-full border-2 bg-black  text-white !ring-offset-link placeholder:text-border focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0"
                      size="medium"
                      variant="ghost"
                      {...field}
                    />

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Country field */}

            {/* Submit button */}
            <div className="w-full  align-top lg:max-w-[200px]">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`m-0 w-full self-center p-0  ${submitted ? "!bg-green" : ""} ${
                  isSubmitting ? "bg-amber-500" : ""
                }`}
                size="medium"
                variant="default"
              >
                {/* Conditional rendering based on form state */}
                {isSubmitting ? (
                  <>
                    <span className="text-white"> Processing...</span>
                  </>
                ) : submitted ? (
                  <>
                    {/* Success icon */}
                    <TickIcon
                      className="mr-3 size-5 text-white"
                      title="Check"
                      titleId="checkIcon"
                      fillColor="#FFffff"
                    />{" "}
                    Submitted
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </Form>

        {/* Terms of Use and Privacy Policy */}
      </Container>
    </Section>
  )
}

export default HeroForm
