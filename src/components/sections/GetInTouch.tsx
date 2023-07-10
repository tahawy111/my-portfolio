"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import Image from "next/image";
import { Textarea } from "../ui/Textarea";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

interface GetInTouchProps {}

export default function GetInTouch({}: GetInTouchProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    name: string;
    phone: string;
    message: string;
    email: string;
  }>({
    name: "",
    phone: "",
    message: "",
    email: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      if (
        !formData.email ||
        !formData.message ||
        !formData.name ||
        !formData.phone
      ) {
        return toast({
          title: "Please fill in all fields to send a message.",
          variant: "destructive",
        });
      }

      await axios.post(`/api/contact`, formData);
      setFormData({ name: "", phone: "", message: "", email: "" });
      toast({
        title: "✔Message has been sended.",
      });
    } catch (error) {
      toast({
        title:
          "❌Could not send a message at this time, please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="skills" className={`flex flex-col w-full py-40 bg-blue-100`}>
      <h1 id="contact" className="text-5xl font-bold mx-auto my-3">
        Get In <span className="text-rose-800">Touch</span>
      </h1>

      <div className="flex items-center justify-center gap-10">
        <Image
          className="-translate-y-6"
          width={500}
          height={500}
          alt="ContactImage"
          src={`https://res.cloudinary.com/dzdqy3wfg/image/upload/v1689017436/recruitment-img5_dh2d1y.png`}
        />
        <form
          onSubmit={handleSubmit}
          className="max-w-sm w-full p-5"
        >
          <div className="flex w-full flex-col my-3">
            <label htmlFor="">Name</label>
            <Input
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full flex-col my-3">
            <label>Email</label>
            <Input
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full flex-col my-3">
            <label>Phone</label>
            <Input
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full flex-col my-3">
            <label></label>
            <Textarea
              className="bg-white resize-none"
              placeholder="Enter your message"
              value={formData.message}
              name="message"
              onChange={handleChange}
            />
          </div>

          <Button isLoading={isLoading} disabled={isLoading} className="w-full mb-3">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
