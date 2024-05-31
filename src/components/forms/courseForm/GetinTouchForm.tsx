"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Button from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import Input from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TickIcon } from "@/constants/icons"
import { HeroFormSchema } from "@/functions/validations"

import { countryData } from "../FormComponents/countries"
import { stateData } from "../FormComponents/state"

type FormData = z.infer<typeof HeroFormSchema>
interface GetInTouchProps {}

const isDevelopment = process.env.NODE_ENV === "development"
const siteKey = process.env.RECAPTCHA_SITE_KEY || "YOUR_DEFAULT_SITE_KEY"
const MockReCAPTCHA: React.FC<{ onChange: (token: string) => void }> = ({ onChange }) => {
  const handleCaptchaChange = () => {
    const token = "MOCK_TOKEN"
    onChange(token)
  }

  useEffect(() => {
    handleCaptchaChange()
  })

  return <div>Mock ReCAPTCHA</div>
}

const ReCAPTCHAComponent = isDevelopment ? MockReCAPTCHA : ReCAPTCHA

const GetInTouchForm: React.FC<GetInTouchProps & { onSubmit: () => void }> = ({ onSubmit }) => {
  const currentPathname = usePathname()
  const lastSlug = currentPathname.split("/").pop() || ""
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<string>("+91")
  const [selectedCountryFlag, setSelectedCountryFlag] = useState<string>("🇮🇳")
  const [selectedState, setSelectedState] = useState<string>("")
  const [captchaToken, setCaptchaToken] = useState<string>("")

  const form = useForm<FormData>({
    resolver: zodResolver(HeroFormSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
      country: "+91",
      state: "",
      pathname: "",
    },
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!captchaToken) {
      console.error("ReCaptcha not verified")
      return
    }

    setIsSubmitting(true)

    const isValid = await form.trigger()

    if (isValid) {
      const data: FormData = form.getValues()
      const selectedCountryData = countryData.countries.find((country) => country.phone_code === selectedCountry)

      if (!selectedCountryData) {
        console.error("Error: Selected country data not found")
        setIsSubmitting(false)
        return
      }

      const formattedData: FormData = {
        name: data.name,
        emailAddress: data.emailAddress,
        phoneNumber: `${selectedCountry} ${data.phoneNumber}`,
        country: selectedCountryData.name,
        state: selectedState,
        pathname: lastSlug,
      }

      try {
        const existingDataJSON = localStorage.getItem("formData")
        let existingData: FormData[] = []

        if (existingDataJSON) {
          existingData = JSON.parse(existingDataJSON) as FormData[]
          console.log("Existing form data:", JSON.stringify(existingData, null, 2))
        }

        existingData.push(formattedData)

        localStorage.setItem("formData", JSON.stringify(existingData))
        const exportedDataJSON = JSON.stringify(existingData, null, 2)
        const blob = new Blob([exportedDataJSON], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "formData.json"

        console.log("Data successfully stored in localStorage")
      } catch (error) {
        console.error("Error storing data in localStorage:", error)
      }

      setIsSubmitting(false)
      setSubmitted(true)
      form.reset()
      setTimeout(() => {
        setSubmitted(false)
        onSubmit() // Call the passed onSubmit prop to update the parent component state
      }, 2000)
    } else {
      setIsSubmitting(false)
    }
  }

  const onCaptchaChange = (token: string | null) => {
    if (token) {
      setCaptchaToken(token)
    }
  }

  return (
    <div className="mx-auto max-w-sm self-center">
      {/* Main form */}
      <Form {...form}>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full flex-col  gap-2 md:max-w-6xl lg:!flex-col 2xl:gap-3 3xl:max-w-6xl"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full  ">
                <Input
                  placeholder="Name"
                  className="base-regular  border-![#EBEBEB]!outline-none !w-full border-2  bg-white !text-black !ring-offset-0  placeholder:text-black focus:border-link focus:!outline-none focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12 2xl:max-w-full"
                  size="medium"
                  variant="ghost"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email field */}
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem className="w-full  ">
                <Input
                  placeholder="Email Address"
                  className="base-regular border-![#EBEBEB]!outline-none !w-full  border-2 bg-white !text-black  !ring-offset-0 placeholder:text-black focus:border-link focus:!outline-none focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12 2xl:max-w-full"
                  size="medium"
                  variant="ghost"
                  {...field}
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
                <FormItem className={"!w-28 "}>
                  <div className=" !w-28 ">
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
                      <SelectTrigger className=" base-regular !w-30 border-![#EBEBEB] w-full border-2 bg-white text-black outline-none !ring-offset-link placeholder:text-black focus:!outline-none focus:ring-0  focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12">
                        <SelectValue placeholder=" +91" className="!w-30 !font-satoshi ">
                          {selectedCountryFlag && selectedCountryFlag} {selectedCountry && `(${selectedCountry})`}
                        </SelectValue>
                      </SelectTrigger>

                      {/* SelectContent component */}
                      <SelectContent className=" border-![#EBEBEB]!outline-none base-regular w-full border-2  bg-white text-black !ring-offset-link placeholder:text-black focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0">
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
                    className=" border-![#EBEBEB]!outline-none base-regular w-full border-2  bg-white text-black !ring-offset-link placeholder:text-black focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12 "
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
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className={""}>
                <Select
                  {...field}
                  onValueChange={(value: string) => {
                    setSelectedState(value) // Update selected state
                    field.onChange(value) // Trigger onChange event
                  }}
                >
                  {/* SelectTrigger component */}
                  <SelectTrigger className=" border-![#EBEBEB] focus-visible:ring-02xl:!h-12 base-regular w-full border-2 bg-white text-black outline-none !ring-offset-link placeholder:text-black  focus:!outline-none focus:ring-0 focus-visible:border-link focus-visible:!outline-none 2xl:!h-12 ">
                    <SelectValue placeholder="State" className=" ">
                      {field.value ? field.value : "State"}
                    </SelectValue>
                  </SelectTrigger>

                  {/* SelectContent component */}
                  <SelectContent className=" base-regular border-![#EBEBEB]!outline-none w-full border-2 bg-white  text-black !ring-offset-link placeholder:text-black focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0">
                    {/* Display state options */}
                    {stateData.states.map((state) => (
                      <SelectItem key={state.id} value={state.name}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="">
            <div className="items-top flex space-x-2">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                >
                  Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
              </div>
            </div>
          </div>
          <ReCAPTCHAComponent sitekey={siteKey} onChange={onCaptchaChange} />
          {/* Submit button */}
          <div className="w-full align-top ">
            <Button
              type="submit"
              disabled={!captchaToken || isSubmitting}
              className={`m-0 w-full self-center p-0 2xl:!h-12 ${submitted ? "!bg-green" : ""} ${
                isSubmitting ? "bg-amber-500" : ""
              }`}
              size="medium"
              variant="default"
            >
              {isSubmitting ? (
                <span className="text-white"> Processing...</span>
              ) : submitted ? (
                <>
                  <TickIcon className="mr-3 size-5 text-white" title="Check" titleId="checkIcon" fillColor="#FFffff" />{" "}
                  Submitted
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default GetInTouchForm
