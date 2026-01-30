import mongoose, { Schema, Document } from "mongoose";

export interface IWatchHistory extends Document {
  user: mongoose.Types.ObjectId;
  episode: mongoose.Types.ObjectId;
  progress: number; // seconds watched
  completed: boolean;
  updatedAt: Date;
}

const WatchHistorySchema = new Schema<IWatchHistory>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    episode: {
      type: Schema.Types.ObjectId,
      ref: "Episode",
      required: true,
    },
    progress: {
      type: Number,
      default: 0,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Prevent duplicate records
WatchHistorySchema.index({ user: 1, episode: 1 }, { unique: true });

export default mongoose.model<IWatchHistory>(
  "WatchHistory",
  WatchHistorySchema
);
