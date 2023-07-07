import AddSkillForm from "@/components/AddSkillForm";
import AdminLayout from "@/components/AdminLayout";
import SkillsTable from "@/components/SkillsTable";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function page() {
  const session = await getAuthSession();
  const skills = await db.skill.findMany({
    where: { userId: session?.user.id },
    include: { skillIcon: true },
  });

  // await db.image.deleteMany()
  
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold my-3">Skills</h1>
      <AddSkillForm
        CLOUDINARY_CLOUD_NAME={`${process.env.CLOUDINARY_CLOUD_NAME}`}
        CLOUDINARY_UPLOAD_PRESET={`${process.env.CLOUDINARY_UPLOAD_PRESET}`}
      />
      {/* @ts-expect-error Server component */}
      <SkillsTable skills={skills} />
    </AdminLayout>
  );
}
