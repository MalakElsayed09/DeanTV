import mongoose, { Schema, Document } from "mongoose";

export interface IShow extends Document {
  title: string;
  description: string;
  thumbnailUrl: string;
  createdAt: Date;
}

const ShowSchema = new Schema<IShow>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IShow>("Show", ShowSchema);
