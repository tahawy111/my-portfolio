import {} from "react";
import ProjectCard from "../ProjectCard";

interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
  return (
    <div
      className={`flex flex-col w-full h-[calc(100vh-63px)] pt-20 mainGradiant`}
    >
      <h1 id="projects" className="text-5xl font-bold text-center text-white">
        Projects <span className="text-rose-800">Made</span>
      </h1>

      <div className="w-full justify-center">
        <ProjectCard />
      </div>
    </div>
  );
}
