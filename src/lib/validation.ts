import { z } from "zod";

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(120, "Email is too long."),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a phone number.")
    .max(25, "Phone number is too long.")
    .regex(/^[0-9+().\-\s]+$/, "Use numbers and standard phone characters only."),
  location: z
    .string()
    .trim()
    .min(2, "Enter your city or area.")
    .max(120, "Location is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little about the project.")
    .max(1200, "Message is too long."),
  company: z.string().optional(),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
