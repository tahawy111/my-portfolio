"use client";
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useId,
  useRef,
  useState,
} from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { SkillRequest, skillValidator } from "@/lib/validators/skillValidator";
import axios, { AxiosError } from "axios";
import { toast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { imageUpload } from "@/lib/ImageUpload";

interface AddSkillFormProps {
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_UPLOAD_PRESET: string;
}

export default function AddSkillForm({
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
}: AddSkillFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const imageInputId = useId();
  const [formData, setFormData] = useState<{
    skillName: string;
    skillIcon: File | null;
  }>({
    skillName: "",
    skillIcon: null,
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
      
      console.log(formData);
      if (formData.skillName === "" || !formData.skillIcon)
        return toast({
          title: "Please Enter Your Skill",
          variant: "destructive",
        });
      const payload: SkillRequest = formData;

      const imgRes = await imageUpload(payload.skillIcon, {
        CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_UPLOAD_PRESET,
      });

      await axios.post(`/api/skill`, {
        ...payload,
        skillIcon: imgRes,
      });
      setFormData((prev) => {
        return { ...prev, skillIcon: null, skillName: "" };
      });
      (document.getElementById(imageInputId) as HTMLInputElement).value = "";
      router.refresh();
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
        description: "Skill wasn't created successfully. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border pt-8 px-3 flex w-full gap-5 justify-between flex-col sm:flex-row"
    >
      <div className="flex w-full sm:w-[30%] flex-col -translate-y-6">
        <label htmlFor="">Skill Name</label>
        <Input
          placeholder="Skill Name"
          name="skillName"
          value={formData.skillName}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full sm:w-[30%] flex-col -translate-y-6">
        <label htmlFor="">Skill Icon</label>
        <Input
          id={imageInputId}
          type="file"
          placeholder="Skill Icon"
          name="skillIcon"
          onChange={handleImageInputChange}
        />
      </div>
      <Button isLoading={isLoading} disabled={isLoading} className="w-full sm:w-[30%] mb-3">
        Add New Skill
      </Button>
    </form>
  );
}
