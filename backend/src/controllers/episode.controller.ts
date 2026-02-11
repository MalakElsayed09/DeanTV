import { Request, Response } from "express";
import Episode from "../models/Episode";

export const getEpisodesByShow = async (req: Request, res: Response) => {
  try {
    const { showId } = req.params;
    const episodes = await Episode.find({ show: showId }).sort({
      episodeNumber: 1,
    });
    res.json(episodes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching episodes" });
  }
};

export const getEpisode = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const episode = await Episode.findById(id);
    
    if (!episode) {
      return res.status(404).json({ message: "Episode not found" });
    }
    
    res.json(episode);
  } catch (error) {
    res.status(500).json({ message: "Error fetching episode" });
  }
};

export const createEpisode = async (req: Request, res: Response) => {
  try {
    const episode = await Episode.create(req.body);
    res.status(201).json(episode);
  } catch (error) {
    res.status(500).json({ message: "Error creating episode" });
  }
};