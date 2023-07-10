import { z } from "zod";

export const contactValidator = z.object({
  name: z.string(),
  phone: z.string(),
  message: z.string(),
  email: z.string(),
});

export type ContactRequest = z.infer<typeof contactValidator>;