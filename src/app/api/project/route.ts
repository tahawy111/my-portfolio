import { getAuthSession } from "@/lib/auth";
import { projectValidator } from "@/lib/validators/projectValidator";
import Project from "@/models/projectModel";
import User from "@/models/userModel";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { codeLink, image, title, viewLink, description } =
      projectValidator.parse(body);

    const newProject = await Project.create({
      codeLink,
      image,
      title,
      viewLink,
      description,
      user: session.user._id,
    });

    await User.findByIdAndUpdate(session.user._id, {
      $push: {
        projects: newProject._id,
      },
    });

    return new Response("OK");
  } catch (error) {
    console.log(error);

    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed.", { status: 422 });
    }
    return new Response(
      "Could not add project at this time, please try again later.",
      {
        status: 500,
      }
    );
  }
}
