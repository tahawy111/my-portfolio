import {} from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

interface AddSkillFormProps {}

export default function AddSkillForm({}: AddSkillFormProps) {
  return (
    <form className="border p-10 flex w-full gap-5 justify-between">
      <Input placeholder="Skill Name"  className="w-[30%]" />
      <div className="flex w-[30%] flex-col -translate-y-6">
        <label htmlFor="">Skill Icon</label>
        <Input type="file" placeholder="Skill Icon" />
      </div>
      <Button className="w-[30%]">Add New Skill</Button>
    </form>
  );
}
