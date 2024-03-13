"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { TickIcon } from "@/constants/icons"
import { countryData } from "./FormComponents/countries"
import Button from "../ui/button"
import { Container } from "../ui/Container"
import { Form, FormField, FormItem, FormMessage } from "../ui/form"
import { GridPattern } from "../ui/GridPattern"
import Input from "../ui/input"
import { Section } from "../ui/Section"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

const IntrestingFormSchema = z.object({
  emailAddress: z.string().email({ message: "Invalid email address" }).nonempty({ message: "Email is required" }),
  phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
  country: z.string().nonempty({ message: "Please select a country" }),
})

type FormData = z.infer<typeof IntrestingFormSchema>

const IntrestingForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [selectedCountry, setSelectedCountry] = React.useState("")
  const [selectedCountryFlag, setSelectedCountryFlag] = React.useState("")

  const form = useForm<FormData>({
    resolver: zodResolver(IntrestingFormSchema),
    defaultValues: {
      emailAddress: "",
      phoneNumber: "",
      country: "",
    },
  })

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const data = form.getValues()

    const selectedCountryData = countryData.countries.find((country) => country.phone_code === selectedCountry)

    if (!selectedCountryData) {
      console.error("Error: Selected country data not found")
      return
    }

    const formattedData = {
      email: data.emailAddress,
      phone: `${selectedCountry} ${data.phoneNumber}`,
    }

    console.log(`email: ${formattedData.email}`)
    console.log(`phone: ${formattedData.phone}`)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      form.reset()
      setTimeout(() => {
        setSubmitted(false)
      }, 2000)
    }, 1000)
  }

  return (
    <Section className="relative !py-0">
      <GridPattern
        className="gradient-dark-background absolute inset-0 z-[-10] size-full  fill-[#0142ac27] stroke-[#e0e5f20a] text-black"
        yOffset={0}
        interactive
      />
      <Container className="relative z-10 mx-auto  py-14">
        <h2 className="h4 my-2 text-center !font-medium text-white">Interesting right?</h2>
        <p className="mx-auto my-4 text-center text-white md:max-w-5xl 3xl:max-w-6xl">
          Lets Connect with our Academic Counselor
        </p>

        <Form {...form}>
          <form
            onSubmit={onSubmit}
            className="mx-auto flex w-full flex-col justify-evenly gap-4 md:max-w-5xl md:flex-row 3xl:max-w-6xl"
          >
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Input
                    placeholder="Email Address"
                    className=" border-![#EBEBEB]!outline-none  w-full border-2 bg-black  text-white !ring-offset-link placeholder:text-[#EBEBEB] focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0"
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
              render={({ field }) => (
                <FormItem>
                  <div className="!w-44">
                    <Select
                      onValueChange={(value: string) => {
                        setSelectedCountry(value)
                        const selectedCountryData = countryData.countries.find(
                          (country) => country.phone_code === value
                        )
                        setSelectedCountryFlag(selectedCountryData?.flag || "")
                        field.onChange(value)
                      }}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="!w-30">
                        <SelectValue placeholder=" +91" className="!w-30">
                          {selectedCountryFlag && selectedCountryFlag} {selectedCountry && `(${selectedCountry})`}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {countryData.countries.map((country, index) => (
                          <SelectItem key={index} value={country.phone_code}>
                            {country.flag} ({country.phone_code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage>{form.formState.errors.country?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Input
                    placeholder="Phone Number"
                    className=" border-![#EBEBEB]!outline-none w-full border-2 bg-black  text-white !ring-offset-link placeholder:text-[#EBEBEB] focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0"
                    size="medium"
                    variant="ghost"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`m-0 w-full max-w-[200px] self-center p-0 ${submitted ? "!bg-green" : ""} ${isSubmitting ? "bg-amber-500" : ""}`}
              size="medium"
              variant="default"
            >
              {isSubmitting ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="text-gray-00 mr-2 size-5 animate-spin fill-black dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="text-white"> Processing...</span>
                </>
              ) : submitted ? (
                <>
                  <TickIcon className="mr-3 size-5 text-white" title="Check" titleId="checkIcon" fillColor="#FFffff" />{" "}
                  Submitted
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
        <p className="relative mx-auto my-4 text-center text-sm text-white md:max-w-5xl 3xl:max-w-6xl">
          By providing your contact details, you agree to our{" "}
          <Link href={"/terms"} passHref className="pr-2 underline underline-offset-2 hover:text-link">
            Terms of Use
          </Link>
          &{" "}
          <Link href={"/privacy"} passHref className="pl-2 underline underline-offset-2 hover:text-link">
            Privacy Policy
          </Link>
        </p>
      </Container>
    </Section>
  )
}

export default IntrestingForm
