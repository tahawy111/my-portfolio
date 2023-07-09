import { getAuthSession } from "@/lib/auth";
import connectDB from "@/lib/database";
import { moveItem } from "@/lib/utils";
import { updateSkillOrderValidator } from "@/lib/validators/skillValidator";
import Skill from "@/models/skillModel";
import User from "@/models/userModel";
import { z } from "zod";

export async function PUT(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { index, type } = updateSkillOrderValidator.parse(body);

    const user = await User.findById(session.user._id).populate("skills")

    if (!user) return new Response("Unauthorized", { status: 401 });

    const userSkills = moveItem(
      user.skills,
      type === "UP" ? index - 1 : index + 1,
      index
    );

    console.log(userSkills);
    

    await User.findByIdAndUpdate(session.user._id, {
      skills: userSkills.map((skill) => skill._id),
    });

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
