"use client";
import { IProject } from "@/models/projectModel";
import { useState } from "react";
import { DataTable } from "./ui/DataTable";
import Image from "next/image";
import { buttonVariants } from "./ui/Button";
import { ArrowBigDown, Code2, Edit, Edit2, Eye } from "lucide-react";
import { Trash } from "lucide-react";
import { ArrowBigUp } from "lucide-react";
import axios from "axios";
import { handleDeleteImage } from "@/lib/ImageUpload";
import { cn, moveItem, wait } from "@/lib/utils";
import Link from "next/link";

interface ProjectsTableProps {
  projectsList: IProject[];
}

export default function ProjectsTable({ projectsList }: ProjectsTableProps) {
  const [projects, setProjects] = useState<IProject[]>(projectsList);
  // Table acions

  const handleChangeIndex = async (type: "UP" | "DOWN", index: number) => {
    let arr = [...projects];
    const movedArray = moveItem(
      arr,
      type === "UP" ? index - 1 : index + 1,
      index
    );
    setProjects(movedArray);

    await wait(300);

    if (index > 0 || index < arr.length - 1)
      await axios.put("/api/project/updateOrder", { type, index: index });
  };

  const handleDeleteSkill = async (id: string, public_id: string) => {
    setProjects((projects) => {
      const newProjects = projects.filter((project) => project._id !== id);
      return newProjects;
    });
    await axios.delete(`/api/project?id=${id}`);
    await handleDeleteImage(public_id, {
      CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
      CLOUDINARY_API_SECRET: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET!,
      CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
    });
  };

  return (
    <div className="w-full overflow-auto">
      {/* <DataTable columns={columns} data={projects} /> */}

      <table className="basic">
        <thead className="">
          <tr>
            <th>Project Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>View</th>
            <th>Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {projects.map((project: IProject, index) => (
            <tr key={project._id}>
              <td>{project.title}</td>
              <td className="">
                <Image
                  alt="project Image"
                  src={project.image.url}
                  width={200}
                  height={200}
                  className="border border-neutral-300 rounded-lg w-40"
                />
              </td>
              <td>{project.description}</td>
              <td>
                <a
                  href={project.viewLink}
                  className={buttonVariants({ size: "sm" })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye /> View
                </a>
              </td>
              <td>
                <a
                  href={project.codeLink}
                  className={buttonVariants({ size: "sm" })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 /> Show
                </a>
              </td>
              <td>
                <div className="flex items-center gap-x-3">
                  <Trash
                    className={cn("text-red-500 hover:fill-red-500")}
                    onClick={() =>
                      handleDeleteSkill(project._id, project.image.public_id)
                    }
                  />
                  <Link href={`/admin/projects/${project._id}`}>
                  <Edit className="text-yellow-500" />
                  </Link>
                  <div className="">
                    <ArrowBigUp
                      onClick={() => handleChangeIndex("UP", index)}
                      className={cn("hover:fill-black transition-colors")}
                    />
                    <ArrowBigDown
                      onClick={() => handleChangeIndex("DOWN", index)}
                      className={cn("hover:fill-black transition-colors")}
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
