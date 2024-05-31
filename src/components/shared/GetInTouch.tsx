"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import * as z from "zod"
import ThankYou from "@/components/shared/ThankYou"
import Button from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Container } from "@/components/ui/Container"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import Input from "@/components/ui/input"
import { Section } from "@/components/ui/Section"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TickIcon } from "@/constants/icons"
import { HeroFormSchema } from "@/functions/validations"

import { countryData } from "../forms/FormComponents/countries"
import { stateData } from "../forms/FormComponents/state"

type FormData = z.infer<typeof HeroFormSchema>
interface GetInTouchProps {
  buttonComponent: React.ReactNode
  pdfLocation?: string
}

const isDevelopment = process.env.NODE_ENV === "development"

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
interface GetInTouchProps {
  buttonComponent: React.ReactNode
  title?: string
  subtitle?: string
  isheading?: boolean
}
const ReCAPTCHAComponent = isDevelopment ? MockReCAPTCHA : ReCAPTCHA

const GetInTouch: React.FC<GetInTouchProps> = ({ buttonComponent, subtitle, title, isheading }) => {
  const currentPathname = usePathname()
  const lastSlug = currentPathname.split("/").pop() || ""
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<string>("+91")
  const [selectedCountryFlag, setSelectedCountryFlag] = useState<string>("🇮🇳")
  const [selectedState, setSelectedState] = useState<string>("")
  const [captchaToken, setCaptchaToken] = useState<string>("")
  const [showThankYou, setShowThankYou] = useState(false)
  const [canSubmit, setCanSubmit] = useState(true)

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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

        console.log("Data successfully stored in localStorage")
      } catch (error) {
        console.error("Error storing data in localStorage:", error)
      }
      setIsSubmitting(false)
      setShowThankYou(true)
      setCanSubmit(false) // Disable submission
      form.reset()
      setTimeout(() => {
        setSubmitted(false)
        setCanSubmit(true) // Enable submission after 5 seconds
        setShowThankYou(false) // Hide the thank you message
      }, 80000)
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
    <Dialog>
      <DialogTrigger asChild>{buttonComponent}</DialogTrigger>
      {showThankYou ? (
        <DialogContent className="!p-0 sm:max-w-[850px]">
          <ThankYou heading="Thank You For Contactiong " paragraph="We Will Reach Out  Soon" />{" "}
        </DialogContent>
      ) : (
        <DialogContent
          className={` w-full max-w-screen-2xl !rounded-lg !border-link   ${isheading ? "!max-w-[400px] !p-6" : "!mr-10 md:py-0 md:pb-6 md:pl-0 lg:pb-0"}`}
        >
          <Section className={`relative w-full max-w-screen-2xl rounded-lg bg-white !p-0 `}>
            <Container className="max-w-screen relative z-10 mx-auto w-full !p-0 ">
              {/* Title and description */}

              <div className={` w-full max-w-full  ${isheading ? "" : "flex flex-col md:flex-row"}`}>
                {isheading ? (
                  <>
                    <div className="relative mt-4 max-w-[350px] ">
                      <h2 className="h4 my-0 pl-4 text-left !font-medium text-black 2xl:text-4xl">
                        {title ? title : "Get In touch"}
                      </h2>
                      <p className="mx-auto my-4 mt-0 pl-4 md:max-w-5xl 2xl:text-xl 3xl:max-w-6xl">
                        {subtitle ? subtitle : "Talk to our Career Experts"}{" "}
                      </p>
                      <div className="absolute  top-0 h-full w-1.5" style={{ backgroundColor: "#ff9933" }}></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" flex  basis-1/2  items-center justify-center rounded-lg bg-black px-4 py-16 md:rounded-none md:p-0 ">
                      <div className=" flex flex-col self-center align-middle">
                        {" "}
                        <h2 className="h2  text-white">Take The First Step</h2>
                        <p className=" text-white">Register Here</p>
                      </div>
                    </div>
                  </>
                )}
                <div className={`mx-auto ${isheading ? "" : "basis-1/2 lg:p-24"}  place-content-center `}>
                  {/* Main form */}
                  <div className="mx-auto max-w-sm self-center">
                    <Form {...form}>
                      <form
                        onSubmit={onSubmit}
                        className="mx-auto flex w-full flex-col  gap-4 md:max-w-6xl lg:!flex-col 3xl:max-w-6xl"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem className="w-full  ">
                              <Input
                                placeholder="Name"
                                className=" border-![#EBEBEB]!outline-none !w-full border-2  bg-white !text-black !ring-offset-0  placeholder:text-black focus:border-link focus:!outline-none focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12 2xl:max-w-full"
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
                                className=" border-![#EBEBEB]!outline-none !w-full  border-2 bg-white !text-black  !ring-offset-0 placeholder:text-black focus:border-link focus:!outline-none focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12 2xl:max-w-full"
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
                                    <SelectTrigger className="!w-30 border-![#EBEBEB] w-full border-2 bg-white text-black outline-none !ring-offset-link placeholder:text-black focus:!outline-none focus:ring-0  focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12">
                                      <SelectValue placeholder=" +91" className="!w-30 !font-satoshi ">
                                        {selectedCountryFlag && selectedCountryFlag}{" "}
                                        {selectedCountry && `(${selectedCountry})`}
                                      </SelectValue>
                                    </SelectTrigger>

                                    {/* SelectContent component */}
                                    <SelectContent className=" border-![#EBEBEB]!outline-none w-full border-2 bg-white  text-black !ring-offset-link placeholder:text-black focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0">
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
                                  className=" border-![#EBEBEB]!outline-none w-full border-2 bg-white  text-black !ring-offset-link placeholder:text-black focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0 2xl:!h-12"
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
                                <SelectTrigger className=" border-![#EBEBEB] focus-visible:ring-02xl:!h-12 w-full border-2 bg-white text-black outline-none !ring-offset-link placeholder:text-black focus:!outline-none  focus:ring-0 focus-visible:border-link focus-visible:!outline-none 2xl:!h-12 ">
                                  <SelectValue placeholder="State" className=" ">
                                    {field.value ? field.value : "State"}
                                  </SelectValue>
                                </SelectTrigger>

                                {/* SelectContent component */}
                                <SelectContent className=" border-![#EBEBEB]!outline-none w-full border-2 bg-white  text-black !ring-offset-link placeholder:text-black focus:!outline-none focus-visible:border-link focus-visible:!outline-none focus-visible:ring-0">
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
                              <p className="text-sm text-muted-foreground">
                                You agree to our Terms of Service and Privacy Policy.
                              </p>
                            </div>
                          </div>
                        </div>
                        <ReCAPTCHAComponent
                          sitekey="JOASDOMOSADASDOASD" // Replace with your ReCaptcha site key
                          onChange={onCaptchaChange}
                        />

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
                  </div>
                </div>
              </div>
            </Container>
          </Section>{" "}
        </DialogContent>
      )}
    </Dialog>
  )
}

export default GetInTouch
