import AddSkillForm from "@/components/AddSkillForm";
import AdminLayout from "@/components/AdminLayout";
import SkillsTable from "@/components/SkillsTable";
import { getAuthSession } from "@/lib/auth";
import connectDB from "@/lib/database";
import Skill, { ISkill } from "@/models/skillModel";
import User from "@/models/userModel";
// import User from "@/models/userModel";


export default async function page() {
//  await  ;
  const session = await getAuthSession();

  if(!session) return

  const user = JSON.parse(JSON.stringify(await User?.findById(session?.user._id).populate("skills")))

  if (!user) return;

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold my-3">Skills</h1>
      <AddSkillForm
        CLOUDINARY_CLOUD_NAME={`${process.env.CLOUDINARY_CLOUD_NAME}`}
        CLOUDINARY_UPLOAD_PRESET={`${process.env.CLOUDINARY_UPLOAD_PRESET}`}
      />
      <SkillsTable skills={user.skills} />
    </AdminLayout>
  );
}
