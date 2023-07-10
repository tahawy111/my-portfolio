import { z } from "zod";

export const projectValidator = z.object({
  title: z.string(),
  image: z.object({ url: z.string(), public_id: z.string() }),
  codeLink: z.string(),
  viewLink: z.string(),
  description: z.string(),
});

export type SkillRequest = z.infer<typeof projectValidator>;

export const updateProjectOrderValidator = z.object({
  type: z.enum(["UP", "DOWN"]),
  index: z.number().min(0),
});
export type updateProjectOrderRequest = z.infer<typeof updateProjectOrderValidator>;
