import {} from "react";

interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
  return (
    <div className={`flex flex-col w-full h-[calc(100vh-63px)] mt-20`}>
      <h1 className="text-5xl font-bold">Projects</h1>
    </div>
  );
}
