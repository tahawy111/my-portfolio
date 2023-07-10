"use client";
import AdminLayout from "@/components/AdminLayout";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { toast } from "@/hooks/use-toast";
import { imageUpload } from "@/lib/ImageUpload";
import { cn } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

interface pageProps {}

export default function page({}: pageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    title: string;
    image: null | File;
    codeLink: string;
    viewLink: string;
    description: string;
  }>({
    title: "",
    image: null,
    codeLink: "",
    viewLink: "",
    description: "",
  });

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

      const imgRes = await imageUpload(payload.image as File, {
        CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
        CLOUDINARY_UPLOAD_PRESET:
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
      });

      await axios.post(`/api/project`, {
        ...payload,
        image: imgRes,
      });
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
    <AdminLayout>
      <div className="flex flex-col justify-center w-full">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold my-3">Adding a new Project</h1>

          <Link
            href={`/admin/projects/add`}
            className={cn(
              buttonVariants({ variant: "destructive" }),
              "font-bold group"
            )}
          >
            <ArrowLeftCircle className="group-hover:-translate-x-1 mr-1 transition-transform" />{" "}
            Cancel
          </Link>
        </div>

        <form className="w-full max-w-sm mx-auto border p-5 rounded-sm">
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
            <label>Project Screenshot</label>
            <Input
              type="file"
              placeholder="Project Screenshot"
              name="image"
              onChange={handleImageInputChange}
            />
          </div>
          <div className="flex w-full flex-col my-3">
            <label>Project description</label>
            <Input
              placeholder="Title"
              name="title"
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

          <Button
            isLoading={isLoading}
            disabled={isLoading}
            className="w-full mb-3"
          >
            Add New Skill
          </Button>
        </form>
      </div>
    </AdminLayout>
  );
}
