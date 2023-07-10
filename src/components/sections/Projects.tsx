"use client";
import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import { IProject } from "@/models/projectModel";
import axios from "axios";

interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    axios
      .get(`/api/project?id=${process.env.NEXT_PUBLIC_USER_ID}`)
      .then(({ data }) => {
        setProjects(data);
      });
  }, []);

  return (
    <div className={`flex flex-col w-full pt-5 bg-gradient-to-r from-violet-500 to-sky-500`}>
      <h1 id="projects" className="text-5xl font-bold text-center text-white">
      🛠💻  Projects <span className="text-rose-800">Made</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-x-3">
        {projects &&
          projects.length > 0 &&
          projects.map((project) => (
            <div className="w-fit">
              <ProjectCard key={project._id} project={project} />
            </div>
          ))}

        {/* <div className="w-fit">
        <ProjectCard />
      </div>
      <div className="w-fit">
        <ProjectCard />
      </div>
      <div className="w-fit">
        <ProjectCard />
      </div>
      <div className="w-fit">
        <ProjectCard />
      </div>
      <div className="w-fit">
        <ProjectCard />
      </div>
      <div className="w-fit">
        <ProjectCard />
      </div>
      <div className="w-fit">
        <ProjectCard />
      </div>
      <div className="w-fit">
        <ProjectCard />
      </div>
      <div className="w-fit">
        <ProjectCard />
      </div> */}
      </div>
    </div>
  );
}
