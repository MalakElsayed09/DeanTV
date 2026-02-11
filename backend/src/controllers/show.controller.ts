import { Request, Response } from "express";
import Show from "../models/Show";

export const getShows = async (_: Request, res: Response) => {
  try {
    const shows = await Show.find().sort({ createdAt: -1 });
    res.json(shows);
  } catch (error) {
    res.status(500).json({ message: "Error fetching shows" });
  }
};

export const getShow = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const show = await Show.findById(id);
    
    if (!show) {
      return res.status(404).json({ message: "Show not found" });
    }
    
    res.json(show);
  } catch (error) {
    res.status(500).json({ message: "Error fetching show" });
  }
};

export const createShow = async (req: Request, res: Response) => {
  try {
    const show = await Show.create(req.body);
    res.status(201).json(show);
  } catch (error) {
    res.status(500).json({ message: "Error creating show" });
  }
};