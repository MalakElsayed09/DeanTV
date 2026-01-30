import { Router } from "express";
import { getShows, createShow } from "../controllers/show.controller";

const router = Router();

router.get("/", getShows);
router.post("/", createShow); // admin later

export default router;
