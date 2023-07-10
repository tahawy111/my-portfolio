import { ImgType } from "@/types/types";
import { model, Schema, models, Document, Model } from "mongoose";

export interface IProject {
  _id: string;
  title: string;
  image: ImgType;
  description: string;
  codeLink: string;
  viewLink: string;
  createdAt?: string;
  updatedAt?: string;
  _doc?: object;
}

type ProjectDocument = Document & IProject;

const ProjectSchema = new Schema<ProjectDocument>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    codeLink: { type: String, required: true },
    viewLink: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Project =
  (models.project as Model<ProjectDocument>) ||
  model<ProjectDocument>("project", ProjectSchema);

export default Project;
