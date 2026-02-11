import { Response } from "express";
import WatchHistory from "../models/WatchHistory";
import { AuthRequest } from "../middleware/auth.middleware";

export const updateProgress = async (req: AuthRequest, res: Response) => {
  try {
    const { episodeId, progress, completed } = req.body;

    const record = await WatchHistory.findOneAndUpdate(
      { user: req.userId, episode: episodeId },
      { progress, completed },
      { upsert: true, new: true }
    );

    res.json(record);
  } catch (error) {
    res.status(500).json({ message: "Error updating watch progress" });
  }
};

export const getContinueWatching = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const history = await WatchHistory.find({
      user: req.userId,
      completed: false,
    })
      .populate("episode")
      .sort({ updatedAt: -1 })
      .limit(10);

    res.json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching watch history" });
  }
};