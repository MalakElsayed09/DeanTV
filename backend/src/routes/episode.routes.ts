import { Router } from "express";
import {
  getEpisodesByShow,
  createEpisode,
} from "../controllers/episode.controller";

const router = Router();

router.get("/:showId", getEpisodesByShow);
router.post("/", createEpisode);

export default router;
