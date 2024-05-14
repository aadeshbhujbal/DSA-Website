"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { countryData } from "@/components/forms/FormComponents/countries"
import { stateData } from "@/components/forms/FormComponents/state"
import Button from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Container } from "@/components/ui/Container"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import Input from "@/components/ui/input"
import { Section } from "@/components/ui/Section"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TickIcon } from "@/constants/icons"
import { ContactFormSchema } from "@/functions/validations"
import Rating from "../(home)/homepagesections/Hero/Rating"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import ThankYou from "@/components/shared/ThankYou"
type FormData = z.infer<typeof ContactFormSchema>
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
  }, [])

  return <div>Mock ReCAPTCHA</div>
}
const ReCAPTCHAComponent = isDevelopment ? MockReCAPTCHA : ReCAPTCHA
const Contactus: React.FC<GetInTouchProps> = ({ buttonComponent, pdfLocation }) => {
  const [showDialog, setShowDialog] = useState(false) // State to control dialog visibility
  const currentPathname = usePathname()
  const lastSlug = currentPathname.split("/").pop() || ""
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<string>("+91")
  const [selectedCountryFlag, setSelectedCountryFlag] = useState<string>("🇮🇳")
  const [selectedState, setSelectedState] = useState<string>("")
  const [captchaToken, setCaptchaToken] = useState<string>("")
  const [showThankYou, setShowThankYou] = useState(false)
  const [canSubmit, setCanSubmit] = useState(true)

  const form = useForm<FormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
      country: "+91",
      state: "",
      pathname: "",
      message: "",
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
        message: data.message,
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
      setShowDialog(true) // Show dialog
      setCanSubmit(false) // Disable submission
      form.reset()
      setTimeout(() => {
        setShowThankYou(false) // Hide the thank you message
        setShowDialog(false) // Hide the dialog after 8 seconds
        setCanSubmit(true) // Enable submission after 5 seconds
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
    <>
      <Section className="!pt-0">
        <Container className="w-full !max-w-full  bg-gradient-to-b from-[#C6FFAE4D] to-[#C6FFAE00] p-6  !pb-20  !opacity-100 md:p-2 lg:p-16 lg:pt-4 ">
          <div className="mx-auto grid max-w-screen-2xl  grid-cols-1 gap-10 py-6 md:grid-cols-2">
            <div className="flex flex-col gap-10">
              <div>
                <p className="h3 !font-medium">Get In Touch</p>
                <p className="py-4">
                  Get in touch with us for any inquiries or assistance. Our team is here to help you.
                </p>
                <p className="pb-4">You can reach us via email or phone :</p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <div className=" pb-1 ">
                    <Link
                      href={"mailto:hi@dataspacesecurity.com"}
                      className=" !w-full rounded-lg border border-none bg-white px-8 py-2  shadow-lg hover:bg-link hover:text-white "
                    >
                      hi@dataspacesecurity.com
                    </Link>
                  </div>
                  <div className=" pb-3 md:pb-5 ">
                    <Link
                      href={"tel:+91 85462 65942"}
                      className=" !w-full rounded-lg border border-none bg-white px-8 py-2  shadow-lg hover:bg-link hover:text-white "
                    >
                      +91 85462 65942
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <p className="h4 !font-medium">Registered Officials</p>
                <div className="grid grid-cols-2 gap-4 pt-10">
                  <div className="rounded-lg bg-white shadow-lg">
                    <div className="p-3 md:p-4">
                      <p className="base-semibold pb-4">Kolkata (Headquarter)</p>
                      <p>3rd Floor, Seven Hills Building, En 34, Salt Lake Sector 5, Kolkata 700091.</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white shadow-lg">
                    <div className="p-3 md:p-4">
                      <p className="base-semibold pb-4 ">KSA</p>
                      <p>C.R. 2051243484, Al-Khobar, KSA</p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="rounded-lg bg-white shadow-lg">
                      <div className="p-3 md:p-4">
                        <p className="base-semibold pb-4">Bengaluru</p>
                        <p>
                          Prime Arcade, 1002, 3rd Floor, Above Health & Glow, Ananthnagar , Electonic City Phase 2,
                          Bengaluru, Karnataka 560100
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <div className="w-[400px] max-w-[700px] rounded-lg bg-white shadow-lg">
                <div className="p-8">
                  <p className="h5 mb-8 !font-medium ">Let us know about </p>
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
                                <SelectValue placeholder="Select Purpose" className=" ">
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
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <Textarea
                              placeholder="Message"
                              className="placeholder:text-text-black h-20 max-h-48 w-full border-border bg-white text-black outline-none ring-offset-link focus:outline-none focus-visible:border-link focus-visible:outline-none focus-visible:ring-0"
                              {...field}
                            />
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
                          className={`m-0 w-full self-center p-0 2xl:!h-12 ${isSubmitting ? "bg-amber-500" : ""}`}
                          size="medium"
                          variant="default"
                        >
                          {isSubmitting ? <span className="text-white">Processing..</span> : "Submit"}
                        </Button>
                        {showThankYou && (
                          <>
                            <div className="mt-2 text-center text-green">Thank you for your submission!</div>
                            {showDialog && ( // Render the dialog if showDialog state is true
                              <Dialog>
                                <DialogContent className="!p-0 sm:max-w-[850px]">
                                  <ThankYou heading="Thank You For Contacting" paragraph="We Will Reach Out Soon" />
                                </DialogContent>
                              </Dialog>
                            )}
                          </>
                        )}
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Rating header={false} />
    </>
  )
}

export default Contactus
