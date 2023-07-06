import AddSkillForm from "@/components/AddSkillForm";
import AdminLayout from "@/components/AdminLayout";
import {} from "react";

export default function page() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold my-3">Skills</h1>
      <AddSkillForm />
    </AdminLayout>
  );
}
