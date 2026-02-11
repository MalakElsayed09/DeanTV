import { Router } from "express";
import { getShows, getShow, createShow } from "../controllers/show.controller";

const router = Router();

router.get("/", getShows);
router.get("/:id", getShow);
router.post("/", createShow);

export default router;