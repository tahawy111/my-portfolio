import AdminLayout from "@/components/AdminLayout";
import EditProjectForm from "@/components/EditProjectForm";
import Project, { IProject } from "@/models/projectModel";
import {} from "react";

interface EditProjectProps {
  params: {
    projectId: string;
  };
}

export default async function EditProject({
  params: { projectId },
}: EditProjectProps) {
  const project: IProject = JSON.parse(JSON.stringify(await Project.findById(projectId)));
  if(!project) return
  return (
    <AdminLayout>
      <EditProjectForm project={project} />
    </AdminLayout>
  );
}
