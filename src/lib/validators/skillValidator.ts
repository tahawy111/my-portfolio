import { z } from "zod";

export const skillValidator = z.object({
  skillName: z.string(),
  skillIcon: z.object({ url: z.string(), public_id: z.string() }),
});

export type SkillRequest = z.infer<typeof skillValidator>;

export const updateSkillOrderValidator = z.object({
  type: z.enum(["UP", "DOWN"]),
  index: z.number().min(0),
});
export type updateSkillOrderRequest = z.infer<typeof updateSkillOrderValidator>;
