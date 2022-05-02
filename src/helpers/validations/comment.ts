import { z } from "zod";

export const zodComment = z.object({
  profile_id: z.number(),
  message: z.string().min(1, { message: "Your message should contain at least 1 character" }).max(255, { message: "Max characters: 255" })
})