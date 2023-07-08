import { getAuthSession } from "@/lib/auth";
import connectDB from "@/lib/database";
import { skillValidator } from "@/lib/validators/skillValidator";
import Skill from "@/models/skillModel";
import { z } from "zod";


  ;
export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    console.log(session.user);

    const body = await req.json();
    const { skillName, skillIcon } = skillValidator.parse(body);

    const newSkill = await Skill.create({ skillName, skillIcon })

    return new Response("OK");
  } catch (error) {
    console.log(error);

    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed.", { status: 422 });
    }
    return new Response(
      "Could not add skill at this time, please try again later.",
      {
        status: 500,
      }
    );
  }
}