import {} from "react";

interface EditProjectProps {
  params: {
    projectId: string;
  };
}

export default function EditProject({
  params: { projectId },
}: EditProjectProps) {


  return <div>{projectId}</div>;
}
