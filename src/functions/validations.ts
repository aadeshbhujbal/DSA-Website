import * as z from "zod"

export const IntrestingFormSchema = z.object({
  emailAddress: z
    .string()
    .email({ message: "Invalid email address" })
    .refine((data) => data.includes("@"), { message: "Email must contain @" })
    .refine((data) => data.trim() !== "", { message: "Email is required" })
    .refine((data) => data.length >= 5, { message: "Email must be at least 5 characters long" }),
  phoneNumber: z
    .string()
    .refine((value) => /^\+?[0-9]+$/g.test(value), { message: "Invalid phone number format" })
    .refine((data) => data.trim() !== "", { message: "Phone number is required" })
    .refine((data) => data.length >= 5, { message: "Phone number must be at least 5 characters long" })
    .refine((data) => data.length <= 15, { message: "Phone number must be at most 15 characters long" }),
  country: z
    .string()
    .nullable()
    .refine((data) => data !== null && data.trim() !== "", { message: "Please select a country" }),
})
