import mongoose, { model, Schema, models, Document, Model } from "mongoose";
import { IUser } from "./userModel";
import { ImgType } from "@/types/types";



export interface ISkill {
  _id: string;
  skillName: string;
  skillIcon: ImgType;
  createdAt?: string;
  updatedAt?: string;
  _doc?: object;
  user: IUser;
}

type SkillDocument = Document & ISkill;

const SkillSchema = new Schema<SkillDocument>(
  {
    skillName: { type: String, required: true, unique: true },
    skillIcon: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    user: { type: String, required: true, ref: "user" },
  },
  {
    timestamps: true,
  }
);

const Skill = (models.skill as Model<SkillDocument>) || model<SkillDocument>("skill", SkillSchema);

export default Skill;
