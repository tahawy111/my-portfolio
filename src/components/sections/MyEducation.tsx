import { GraduationCap } from "lucide-react";
import {} from "react";
import EducationCard from "../EducationCard";

interface MyEducationProps {}

export default function MyEducation({}: MyEducationProps) {
  return (
    <div id="skills" className={`flex flex-col w-full my-5 items-center`}>
      <h1
        id="about"
        className="text-5xl font-bold mx-auto my-3 flex gap-x-1 items-center"
      >
        <GraduationCap size={60} className="text-neutral-500" />
        <span>📅 My</span>
        <span className="text-sky-500 underline underline-offset-8">
          Education
        </span>
      </h1>

      <EducationCard />
    </div>
  );
}
