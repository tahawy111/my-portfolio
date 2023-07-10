"use client";
import {} from "react";
import { Button, buttonVariants } from "./ui/Button";
import { Eye, Code2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Tilt } from "react-tilt";
import { defaultTiltOptions } from "@/lib/config";

interface ProjectCardProps {}

export default function ProjectCard({}: ProjectCardProps) {
  return (
    <Tilt className="w-fit text-center mx-auto shadow-2xl" options={defaultTiltOptions}>
      <div className="w-[400px] h-80 mx-auto my-4 group relative overflow-hidden transition-transform rounded-lg">
        <Image
          className="object-cover h-full w-full absolute"
          src={`https://res.cloudinary.com/dzdqy3wfg/image/upload/v1688974798/Screenshot_2023-07-10_102248_ov1a0x.png`}
          width={9999}
          height={9999}
          alt="Project image"
        />
        <div className="duration-300 group-hover:block group-hover:translate-y-0 absolute -bottom-[43%] group-hover:bottom-0 bg-white/80">
          <h1 className="text-2xl text-center font-extrabold bg-neutral-900 text-white py-3">
            Cool Blog
          </h1>
          <p className="py-3 px-1">
            A nice blog application to show your blogs,and
            add,delete,update,also a completly autenticaion services
          </p>
          <div className="flex justify-between px-1 py-3">
            <a
              href="https://github.com/tahawy111/BLOG_APP_TYPESCRIPT"
              target="_blank" rel="noopener noreferrer"
              className={cn(buttonVariants(), "group/btn text-center")}
            >
              Code
              <Code2 className="mx-1 transition-transform group-hover/btn:translate-x-1" />
            </a>
            <a
              href="https://blog-application-tahawy111.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className={cn(buttonVariants(), "group/btn text-center")}
            >
              View
              <Eye className="mx-1 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
