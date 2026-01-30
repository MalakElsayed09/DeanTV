import { Router } from "express";
import {
  updateProgress,
  getContinueWatching,
} from "../controllers/watch.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/progress", authMiddleware, updateProgress);
router.get("/continue", authMiddleware, getContinueWatching);

export default router;
