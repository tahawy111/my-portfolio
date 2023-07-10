"use client";
import {} from "react";
import { Button, buttonVariants } from "./ui/Button";
import { Eye, Code2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Tilt } from "react-tilt";
import { defaultTiltOptions } from "@/lib/config";
import { IProject } from "@/models/projectModel";

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Tilt
      className="w-fit text-center mx-auto shadow-2xl"
      options={defaultTiltOptions}
    >
      <div className="w-[400px] h-80 mx-auto my-4 group relative overflow-hidden transition-transform rounded-lg">
        <Image
          className="object-cover h-full w-full absolute"
          src={project.image.url}
          width={9999}
          height={9999}
          alt="Project image"
        />
        <div className="duration-300 group-hover:block group-hover:translate-y-0 absolute -bottom-[43%] group-hover:bottom-0 bg-white/80">
          <h1 className="text-2xl text-center font-extrabold bg-neutral-900 text-white py-3">
            {project.title}
          </h1>
          <p className="py-3 px-1">
            {project.description}
          </p>
          <div className="flex justify-between px-1 py-3">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "group/btn text-center")}
            >
              Code
              <Code2 className="mx-1 transition-transform group-hover/btn:translate-x-1" />
            </a>
            <a
              href={project.viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "group/btn text-center")}
            >
              View
              <Eye className="mx-1 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
