"use client";
import AdminLayout from "@/components/AdminLayout";
import EditProjectForm from "@/components/EditProjectForm";
import Loading from "@/components/Loading";
import Project, { IProject } from "@/models/projectModel";
import axios from "axios";
import { useEffect, useState } from "react";

interface EditProjectProps {
  params: {
    projectId: string;
  };
}

export default function EditProject({
  params: { projectId },
}: EditProjectProps) {
  const [project, setProject] = useState<IProject>();
  useEffect(() => {
    axios
      .get(`/api/project/getSingleProject?id=${projectId}`)
      .then(({ data }) => {
        console.log(data);
        setProject(data);
      });
  }, []);
  return (
    <AdminLayout>
      {project ? <EditProjectForm project={project} /> : <Loading />}
    </AdminLayout>
  );
}
