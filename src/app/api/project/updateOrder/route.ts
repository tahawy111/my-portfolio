import { getAuthSession } from "@/lib/auth";
import { moveItem } from "@/lib/utils";
import { updateProjectOrderValidator } from "@/lib/validators/projectValidator";
import User from "@/models/userModel";
import { z } from "zod";

export async function PUT(req: Request) {
    try {
      const session = await getAuthSession();
  
      if (!session?.user) {
        return new Response("Unauthorized", { status: 401 });
      }
  
      const body = await req.json();
      const { index, type } = updateProjectOrderValidator.parse(body);
  
      const user = await User.findById(session.user._id).populate("projects")
  
      if (!user) return new Response("Unauthorized", { status: 401 });
  
      const userProjects = moveItem(
        user.projects,
        type === "UP" ? index - 1 : index + 1,
        index
      );
  
      console.log(userProjects);
      
  
      await User.findByIdAndUpdate(session.user._id, {
        projects: userProjects.map((skill) => skill._id),
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
  