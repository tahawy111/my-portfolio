"use client";
import AddSkillForm from "@/components/AddSkillForm";
import AdminLayout from "@/components/AdminLayout";
import SkillsTable from "@/components/SkillsTable";
import { ISkill } from "@/models/skillModel";
import axios from "axios";
import { useEffect, useState } from "react";
// import User from "@/models/userModel";

export default function Page() {
  const [skills, setSkills] = useState<ISkill[]>([]);
  useEffect(() => {
    axios
      .get(`/api/skill?id=${process.env.NEXT_PUBLIC_USER_ID}`)
      .then(({ data }) => {
        console.log(data);
        setSkills(data);
      });
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold my-3">Skills</h1>
      <AddSkillForm
        CLOUDINARY_CLOUD_NAME={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`}
        CLOUDINARY_UPLOAD_PRESET={`${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`}
      />
      {skills && skills.length > 0 && (
        <SkillsTable skills={skills as ISkill[]} />
      )}
    </AdminLayout>
  );
}
