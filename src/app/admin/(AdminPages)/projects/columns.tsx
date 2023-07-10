"use client";

import { ImgType } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProjectsColumn = {
  id: string;
  title: string;
  image: ImgType;
  description: string;
  codeLink: string;
  viewLink: string;
  createdAt: string;
};

export const columns: ColumnDef<ProjectsColumn>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original
 
      return (
        <Image alt="project Image" src={data.image.url} width={200} height={200} className="border border-neutral-300 rounded-lg" />
      )
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "codeLink",
    header: "Code Link",
  },
  {
    accessorKey: "viewLink",
    header: "View Link",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
