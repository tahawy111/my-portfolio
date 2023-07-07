import { Image as skillImageType, Skill } from "@prisma/client";
import {} from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import Image from "next/image";

type ExtendedSkill = Skill & { skillIcon: skillImageType };

interface SkillsTableProps {
  skills: ExtendedSkill[];
}

export default function SkillsTable({ skills }: SkillsTableProps) {
    console.log(skills);
    
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="flex justify-between">
          <TableHead className="translate-y-3">Skill Name</TableHead>
          <TableHead className="translate-y-3">Skill Icon</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {skills && skills.length > 0 && skills.map((skill: ExtendedSkill) => (
          <TableRow className="flex justify-between items-center" key={skill.id}>
            <TableCell className="font-medium">{skill.skillName}</TableCell>
            <TableCell className="">
              <Image src={skill.skillIcon.url} alt={skill.skillName} width={50} height={50} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
