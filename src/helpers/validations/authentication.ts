import { z } from "zod";

export const zodSignUp = z
  .object({
    full_name: z.string().min(3),
    username: z.string().min(3, { message: "Your username min characters: 3" }).max(32, { message: "Your username max characters: 32" }),
    password: z.string().min(5, { message: "Your password must contains at least 5 characters" }),
    confirm_password: z.string()
  })
  .refine(
    (data) => data.password === data.confirm_password,
    {
      message: "Password don't match"
    }
  )