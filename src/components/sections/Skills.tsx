import {} from "react";
import SkillCard from "../SkillCard";
import { getAuthSession } from "@/lib/auth";
import User from "@/models/userModel";
import { ISkill } from "@/models/skillModel";

interface SkillsProps {}

export default async function Skills({}: SkillsProps) {
  const session = await getAuthSession();

  const user = JSON.parse(
    JSON.stringify(await User?.findById(session?.user._id).populate("skills"))
  );

  if (!user) return;

  return (
    <div
      id="skills"
      className={`flex flex-col w-full mt-20 bg-gradient-to-r from-sky-500 to-violet-500 `}
    >
      <h1 id="about" className="text-5xl font-bold mx-auto my-3 text-white">
        💻 Skills & <span className="text-rose-800">Abilities</span>
      </h1>

      <div className="bg-black/50 h-full my-4 mx-28 rounded-2xl p-5 grid grid-cols-6 justify-items-center gap-3 justify-center">
        {user.skills &&
          user.skills.length > 0 &&
          user.skills.map((skill: ISkill) => (
            <SkillCard name={skill.skillName} image={skill.skillIcon!.url} />
          ))}
      </div>
    </div>
  );
}
