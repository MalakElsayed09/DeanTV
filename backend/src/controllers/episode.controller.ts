import { Request, Response } from "express";
import Episode from "../models/Episode";

export const getEpisodesByShow = async (req: Request, res: Response) => {
  const { showId } = req.params;
  const episodes = await Episode.find({ show: showId }).sort({
    episodeNumber: 1,
  });
  res.json(episodes);
};

export const createEpisode = async (req: Request, res: Response) => {
  const episode = await Episode.create(req.body);
  res.status(201).json(episode);
};
