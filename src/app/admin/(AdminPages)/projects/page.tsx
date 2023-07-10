"use client";
import AdminLayout from "@/components/AdminLayout";
import ProjectsTable from "@/components/ProjectsTable";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { IProject } from "@/models/projectModel";
import axios from "axios";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectsColumn } from "./columns";
import { format } from "date-fns";
import { Separator } from "@/components/ui/Separator";

interface pageProps {}

export default function page({}: pageProps) {
  const [projects, setProjects] = useState<IProject[]>([]);
  useEffect(() => {
    axios
      .get(`/api/project?id=${process.env.NEXT_PUBLIC_USER_ID}`)
      .then(({ data }) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  const formattedProjects: ProjectsColumn[] = projects.map((project) => ({
    id: project._id,
    title: project.title,
    codeLink: project.codeLink,
    viewLink: project.viewLink,
    description: project.description,
    createdAt: format(new Date(project.createdAt!),"MMMM do, yyyy"),
    image: project.image,
  }));



  return (
    <AdminLayout>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-bold my-3">Projects</h1>
          <Link
            href={`/admin/projects/add`}
            className={cn(buttonVariants({ variant: "outline" }), "font-bold")}
          >
            Add New Project <PlusCircle className="mx-1" />
          </Link>
        </div>

        <Separator className="my-3" />

        <ProjectsTable projects={formattedProjects} />
      </div>
    </AdminLayout>
  );
}
