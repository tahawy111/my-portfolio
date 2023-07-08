"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import axios from "axios";
import { moveItem, wait } from "@/lib/utils";
import { ISkill } from "@/models/skillModel";

interface SkillsTableProps {
  skills: ISkill[];
}

export default function SkillsTable({ skills }: SkillsTableProps) {
  const [skillsList, setSkillsList] = useState<ISkill[]>(skills);
  const [time, setTime] = useState<number>(0)

  const handleChangeIndex = async (index: number, type: "UP" | "DOWN") => {
    let arr = [...skillsList];
    const movedArray = moveItem(
      arr,
      type === "UP" ? index - 1 : index + 1,
      index
    );
    setSkillsList(movedArray);

   await wait(3000)

    if (index > 0 || index < arr.length - 1)
      await axios.put("/api/skill/updateOrder", { type, index });
  };

  return (
    <div>
      {skillsList &&
        skillsList.length > 0 &&
        skillsList.map((skill: ISkill, index: number) => (
          <div
            key={skill._id}
            className="border flex items-center px-3 gap-3 my-3 py-1 justify-between"
          >
            <div className="flex items-center gap-3">
              <span>{skill.skillName}</span>
              {skill.skillIcon?.url && (
                <Image
                  src={skill.skillIcon.url}
                  alt={skill.skillName}
                  width={50}
                  height={50}
                />
              )}
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
