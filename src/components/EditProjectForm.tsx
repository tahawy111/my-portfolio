"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/Button";
import { ArrowLeftCircle } from "lucide-react";
import { Separator } from "./ui/Separator";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { handleDeleteImage, imageUpload } from "@/lib/ImageUpload";
import { toast } from "@/hooks/use-toast";
import AdminLayout from "./AdminLayout";
import { Input } from "./ui/Input";
import { IProject } from "@/models/projectModel";
import Image from "next/image";

interface EditProjectFormProps {
  project: IProject;
}

export default function EditProjectForm({ project }: EditProjectFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    title: string;
    image: null | File;
    codeLink: string;
    viewLink: string;
    description: string;
  }>({
    title: project.title,
    image: null,
    codeLink: project.codeLink,
    viewLink: project.viewLink,
    description: project.description,
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setFormData((prev) => {
      return { ...prev, [e.target.name]: file };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const payload = formData;

      if (formData.image) {
        await handleDeleteImage(project.image.public_id, {
          CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
          CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
          CLOUDINARY_API_SECRET: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET!,
        });
        const imgRes = await imageUpload(payload.image as File, {
          CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
          CLOUDINARY_UPLOAD_PRESET:
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
        });

        await axios.put(`/api/project?id=${project._id}`, {
          ...payload,
          image: imgRes,
        });

        toast({
            title: "Project Updated Succesfully ✅✅✅",
          });

      } else {
        await axios.put(`/api/project?id=${project._id}`, payload);
      }

      router.back();
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return toast({
            title: "Login required.",
            description: "You need to be logged in to do that.",
            variant: "destructive",
          });
        }
      }

      return toast({
        title: "Something went wrong.",
        description: "Projec wasn't added successfully. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-3xl font-bold my-3">Edit Project</h1>

        <Button
          onClick={() => router.back()}
          variant={"destructive"}
          className="font-bold group"
        >
          <ArrowLeftCircle className="group-hover:-translate-x-1 mr-1 transition-transform" />{" "}
          Cancel
        </Button>
      </div>
      <Separator className="my-3" />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto border p-5 rounded-sm"
      >
        <div className="flex w-full flex-col my-3">
          <label htmlFor="">Project Title</label>
          <Input
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="flex w-full flex-col my-3">
          <label>Project Description</label>
          <Input
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full flex-col my-3">
          <label>Code Link</label>
          <Input
            placeholder="Code Link"
            name="codeLink"
            value={formData.codeLink}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full flex-col my-3">
          <label>View Link</label>
          <Input
            placeholder="View Link"
            name="viewLink"
            value={formData.viewLink}
            onChange={handleChange}
          />
        </div>

        <div className="flex w-full flex-col my-3">
          <label>Project Screenshot</label>
          <div className="flex">
            <Input
              type="file"
              placeholder="Project Screenshot"
              name="image"
              onChange={handleImageInputChange}
            />
          </div>
          <Image
            className="my-3 mx-auto"
            src={project.image.url}
            alt="ScreenShot"
            width={200}
            height={200}
          />
        </div>

        <Button
          isLoading={isLoading}
          disabled={isLoading}
          className="w-full mb-3"
        >
          Update Project
        </Button>
      </form>
    </div>
  );
}
