import mongoose, { Schema, Document } from "mongoose";

export interface IEpisode extends Document {
  show: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  episodeNumber: number;
  duration: number; // seconds
  createdAt: Date;
}

const EpisodeSchema = new Schema<IEpisode>(
  {
    show: {
      type: Schema.Types.ObjectId,
      ref: "Show",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    episodeNumber: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IEpisode>("Episode", EpisodeSchema);
