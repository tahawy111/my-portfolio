"use client";
import SkillCard from "../SkillCard";
import User, { IUser } from "@/models/userModel";
import Skill, { ISkill } from "@/models/skillModel";
import axios from "axios";
import { useEffect, useState } from "react";

interface SkillsProps {}

export default function Skills({}: SkillsProps) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/skill?id=${process.env.NEXT_PUBLIC_USER_ID}`)
      .then(({ data }) => {
        console.log(data);
        setSkills(data);
      });
  }, []);

  return (
    <div
      id="skills"
      className={`flex flex-col w-full mt-20 bg-gradient-to-r from-sky-500 to-violet-500 `}
    >
      <h1 id="about" className="text-5xl font-bold mx-auto my-3 text-white">
        💻 Skills & <span className="text-rose-800">Abilities</span>
      </h1>

      <div className="bg-black/50 h-full my-4 mx-28 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3">
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
