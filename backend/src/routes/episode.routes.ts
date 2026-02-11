import { Router } from "express";
import { getEpisodesByShow, getEpisode, createEpisode } from "../controllers/episode.controller";

const router = Router();

router.get("/show/:showId", getEpisodesByShow);
router.get("/:id", getEpisode);
router.post("/", createEpisode);

export default router;