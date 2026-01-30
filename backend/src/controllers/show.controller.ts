import { Request, Response } from "express";
import Show from "../models/Show";

export const getShows = async (_: Request, res: Response) => {
  const shows = await Show.find().sort({ createdAt: -1 });
  res.json(shows);
};

export const createShow = async (req: Request, res: Response) => {
  const show = await Show.create(req.body);
  res.status(201).json(show);
};
