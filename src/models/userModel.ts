import { model, Schema, models, Document, Model } from "mongoose";
import { ISkill } from "./skillModel";
import { IProject } from "./projectModel";


export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
  provider: string;
  projects: IProject[] | string[];
  _doc?: object;
  skills: ISkill[] | string[];
}

type UserDocument = Document & IUser;

const UserSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: String,
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
    role: { type: String, default: "user" },
    provider: { type: String, default: "credentials" },
    skills: [{ type: String, required: true, ref: "skill" }],
    projects: [{ type: String, required: true, ref: "project" }],
  },
  {
    timestamps: true,
  }
);

const User =
  (models.user as Model<UserDocument>) ||
  model<UserDocument>("user", UserSchema);

export default User;
