import { getAuthSession } from "@/lib/auth";
import connectDB from "@/lib/database";
import { skillValidator } from "@/lib/validators/skillValidator";
import Skill from "@/models/skillModel";
import User from "@/models/userModel";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    console.log(session.user);

    const body = await req.json();
    const { skillName, skillIcon } = skillValidator.parse(body);

    const newSkill = await Skill.create({
      skillName,
      skillIcon,
      user: session.user._id,
    });

    await User.findByIdAndUpdate(session.user._id, {
      $push: {
        skills: newSkill._id,
      },
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
export async function DELETE(req: Request) {
  try {
    const session = await getAuthSession();
    const id = new URL(req.url).searchParams.get("id");

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    await Skill.findByIdAndDelete(id);

    await User.findByIdAndUpdate(session.user._id, {
      $pull: {
        skills: id,
      },
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
export async function GET(req: Request) {
  try {
    const id = new URL(req.url).searchParams.get("id");

    const checkuser = await User.findById(id)
    await Skill.findById(checkuser?.skills[0])
    const user = await User.findById(id).populate("skills")

    if (!user) return new Response("Unauthorized", { status: 401 });
    

    return new Response(JSON.stringify(user.skills));
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
