import { Response } from "express";
import WatchHistory from "../models/WatchHistory";
import { AuthRequest } from "../middleware/auth.middleware";

export const updateProgress = async (req: AuthRequest, res: Response) => {
  const { episodeId, progress, completed } = req.body;

  const record = await WatchHistory.findOneAndUpdate(
    { user: req.userId, episode: episodeId },
    { progress, completed },
    { upsert: true, new: true }
  );

  res.json(record);
};

export const getContinueWatching = async (
  req: AuthRequest,
  res: Response
) => {
  const history = await WatchHistory.find({
    user: req.userId,
    completed: false,
  }).populate("episode");

  res.json(history);
};
