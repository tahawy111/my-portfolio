import { ProjectsColumn, columns } from "@/app/admin/(AdminPages)/projects/columns";
import { IProject } from "@/models/projectModel";
import {} from "react";
import { DataTable } from "./ui/DataTable";

interface ProjectsTableProps {
  projects: ProjectsColumn[];
}

export default function ProjectsTable({projects}: ProjectsTableProps) {
  return <>
  
  <DataTable columns={columns} data={projects}  />

  </>
}
