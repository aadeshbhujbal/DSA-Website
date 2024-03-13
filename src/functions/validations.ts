import * as z from "zod"

export const IntrestingFormSchema = z.object({
  emailAddress: z.string().email(),
  phoneNumber: z.string().min(10).max(15),
  country: z.object({
    label: z.string(),
    value: z.string(),
  }),
})
