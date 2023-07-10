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
import { Separator } from "@/components/ui/Separator";

interface PageProps {}

export default function Page({}: PageProps) {
  const [projects, setProjects] = useState<IProject[]>([]);
  useEffect(() => {
    axios
      .get(`/api/project?id=${process.env.NEXT_PUBLIC_USER_ID}`)
      .then(({ data }) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

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

        {projects && projects.length > 0 && (
          <ProjectsTable projectsList={projects} />
        )}
      </div>
    </AdminLayout>
  );
}
