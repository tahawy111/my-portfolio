"use client";
import SkillCard from "../SkillCard";
import { ISkill } from "@/models/skillModel";
import axios from "axios";
import { useEffect, useState } from "react";

interface SkillsProps {}

export default function Skills({}: SkillsProps) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/skill?id=${process.env.NEXT_PUBLIC_USER_ID}`)
      .then(({ data }) => {
        setSkills(data);
      });
  }, []);

  return (
    <div
      id="skills"
      className={`flex flex-col w-full bg-gradient-to-r from-sky-500 to-violet-500 space-y-14 py-20 mt-10`}
    >
      <h1 id="about" className="text-5xl font-bold mx-auto my-3 text-white text-center">
        💻💪 Skills & <span className="text-rose-800">Tools</span>
      </h1>

      <div className="bg-black/50 h-full w-full my-4 rounded-2xl py-5 flex flex-wrap gap-4 justify-center">
        {skills &&
          (skills as ISkill[]).map((skill) => (
            <SkillCard
              key={skill._id}
              name={skill.skillName}
              image={skill.skillIcon!.url}
            />
          ))}
      </div>
    </div>
  );
}
