import { z } from "zod";

export const skillValidator = z.object({
  skillName: z.string(),
  skillIcon: z.string(),
});

export type SkillRequest = z.infer<typeof skillValidator>;