import Image from "next/image";
import { ReactNode } from "react";

interface SkillCardProps {
  image: string;
  name: string;
}

export default function SkillCard({ image, name }: SkillCardProps) {
  return (
    <div className="bg-slate-900 w-full text-center text-white p-5 rounded-2xl hover:bg-slate-950 transition-all hover:scale-105 hover:shadow-2xl h-fit">
      <div className="justify-center flex my-3 w-10 h-10 mx-auto">
      <Image width={50} height={50} src={image} alt="Skill Image"/>
      </div>
      <h2 className="text-3xl">{name}</h2>
    </div>
  );
}
