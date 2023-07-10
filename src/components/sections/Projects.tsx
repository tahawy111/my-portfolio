import {} from "react";
import ProjectCard from "../ProjectCard";

interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
  return (
    <div
      className={`flex flex-col w-full pt-20 mainGradiant`}
    >
      <h1 id="projects" className="text-5xl font-bold text-center text-white">
        Projects <span className="text-rose-800">Made</span>
      </h1>

    <div className="flex flex-wrap justify-center gap-x-3">
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
      </div>
      <div className="w-fit">
        <ProjectCard />
      </div>
    </div>
    </div>
  );
}
