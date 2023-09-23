import Project from "@/models/projectModel";
import { z } from "zod";

export async function GET(req: Request) {
    try {
      const id = new URL(req.url).searchParams.get("id");
  

      const project = await Project.findById(id)
  
      
  
      return new Response(JSON.stringify(project));
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
  