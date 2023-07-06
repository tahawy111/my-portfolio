"use client";
import { useId, useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { SkillRequest } from "@/lib/validators/skillValidator";
import axios from "axios";

interface AddSkillFormProps {}

export default function AddSkillForm({}: AddSkillFormProps) {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const inputCommentId = useId();
  const { mutate: comment, isLoading } = useMutation({
    mutationFn: async ({ skillName, skillIcon }: SkillRequest) => {
      const payload: SkillRequest = { skillName, skillIcon };

      const { data } = await axios.patch(
        `/api/subreddit/post/comment/`,
        payload
      );
      return data;
    },

    onError: (err) => {
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
        description: "Comment wasn't created successfully. Please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      router.refresh();
      setInput("");
    },
  });
  return (
    <form className="border pt-8 px-3 flex w-full gap-5 justify-between">
      <div className="flex w-[30%] flex-col -translate-y-6">
        <label htmlFor="">Skill Name</label>
        <Input placeholder="Skill Name" />
      </div>
      <div className="flex w-[30%] flex-col -translate-y-6">
        <label htmlFor="">Skill Icon</label>
        <Input type="file" placeholder="Skill Icon" />
      </div>
      <Button className="w-[30%]">Add New Skill</Button>
    </form>
  );
}
