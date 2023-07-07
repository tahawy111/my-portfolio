"use client";
import { Image as skillImageType, Skill } from "@prisma/client";
import { useState } from "react";
import Image from "next/image";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

type ExtendedSkill = Skill & { skillIcon: skillImageType };

interface SkillsTableProps {
  skills: ExtendedSkill[];
}

export default function SkillsTable({ skills }: SkillsTableProps) {
  console.log(skills);
  const [skillsList, setSkillsList] = useState<ExtendedSkill[]>(skills);

  const handleChangeIndex = (index: number, type: "UP" | "DOWN") => {
    
    let arr = [...skillsList]
    const element = arr[index];
    delete arr[index];

    if (type === "UP" && index - 1 > 0) {
      arr[index - 1] = element;
    } else if (type === "DOWN" && index + 1 < arr.length - 1) {
      arr[index + 1] = element;
    }

    console.log(arr);
    

    setSkillsList(arr);
    // console.log(skillsList);
  };

  

  return (
    <div>
      {skillsList &&
        skillsList.length > 0 &&
        skillsList.map((skill: ExtendedSkill, index: number) => (
          <div
            key={skill.id}
            className="border flex items-center px-3 gap-3 my-3 py-1 justify-between"
          >
            <div className="flex items-center gap-3">
              <span>{skill.skillName}</span>
              <Image
                src={skill.skillIcon.url}
                alt={skill.skillName}
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <ArrowBigUp
                onClick={() => handleChangeIndex(index, "UP")}
                className="hover:fill-black transition-colors"
              />
              <ArrowBigDown
                onClick={() => handleChangeIndex(index, "DOWN")}
                className="hover:fill-black transition-colors"
              />
            </div>
          </div>
        ))}
    </div>
  );
}
