import { model, Schema, models, Document, Model } from "mongoose";
import { ISkill } from "./skillModel";

export interface ImgType {
  public_id: string;
  url: string;
}

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
  _doc?: object;
  skills: ISkill[];
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
  },
  {
    timestamps: true,
  }
);

const User = models.User ? (models.User as Model<UserDocument>) : model<UserDocument>("user", UserSchema);

export default User;
