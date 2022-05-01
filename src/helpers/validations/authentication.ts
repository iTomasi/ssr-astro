import { z } from "zod";

const username = z.string().min(3, { message: "Your username min characters: 3" }).max(32, { message: "Your username max characters: 32" }).regex(/^[A-Za-z0-9]+$/, { message: "Your username should contain these characters: [A-Z, 0-9]" })
const password = z.string().min(5, { message: "Your password must contains at least 5 characters" })
const full_name = z.string().min(3, { message: "Your full name mut contains at least 3 characters" })

export const zodSignUp = z
  .object({
    full_name,
    username,
    password,
    confirm_password: z.string()
  })
  .refine(
    (data) => data.password === data.confirm_password,
    {
      message: "Password don't match"
    }
  )

export const zodSignIn = z.object({
  username,
  password
})

export const zodEditAccount = z.object({
  username,
  full_name,
  description: z.string().max(200, { message: "Description max characters: 200" }),
  profile_picture: z.string()
})