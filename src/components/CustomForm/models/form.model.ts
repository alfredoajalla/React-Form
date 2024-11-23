import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email").min(1, "e-mail is required"),
    password: z.string().min(6, "password should have at least 6 chars"),
    confirmPassword: z.string().min(6, "Confirmation should have atl least 6 chars"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords should be equals",
    path: ["confirmPassword"]
})

export type FormValues = z.infer<typeof schema>;