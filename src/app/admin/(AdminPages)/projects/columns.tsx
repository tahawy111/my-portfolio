"use client";

import { handleDeleteImage } from "@/lib/ImageUpload";
import { cn, moveItem } from "@/lib/utils";
import { ImgType } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { ArrowBigDown, ArrowBigUp, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <Image
          alt="project Image"
          src={data.image.url}
          width={200}
          height={200}
          className="border border-neutral-300 rounded-lg"
        />
      );
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
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const data = row.original;
      const [isDisabled, setIsDisabled] = useState<boolean>(false);

      const handleChangeIndex = async (type: "UP" | "DOWN") => {
        setIsDisabled(true);
        await axios.put("/api/project/updateOrder", { type, index: row.index });
        window.location.reload();
      };

      const handleDeleteSkill = async (id: string, public_id: string) => {
        setIsDisabled(true);
        await axios.delete(`/api/skill?id=${id}`);
        await handleDeleteImage(public_id, {
          CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
          CLOUDINARY_API_SECRET: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET!,
          CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
        });
        window.location.reload();
      };

      return (
        <>
          <div className="flex items-center gap-x-3">
            <Trash
              className={cn(
                "text-red-500 hover:fill-red-500",
                isDisabled && "pointer-events-none"
              )}
              onClick={() => handleDeleteSkill(data.id, data.image.public_id)}
            />
            <div className="">
              <ArrowBigUp
                onClick={() => handleChangeIndex("UP")}
                className={cn(
                  "hover:fill-black transition-colors",
                  isDisabled && "pointer-events-none"
                )}
              />
              <ArrowBigDown
                onClick={() => handleChangeIndex("DOWN")}
                className={cn(
                  "hover:fill-black transition-colors",
                  isDisabled && "pointer-events-none"
                )}
              />
            </div>
          </div>
        </>
      );
    },
  },
];
