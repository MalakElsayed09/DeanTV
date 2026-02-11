import { Router } from "express";
import { updateProgress, getContinueWatching } from "../controllers/watch.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

// All watch routes require authentication
router.use(authMiddleware);

router.post("/progress", updateProgress);
router.get("/continue", getContinueWatching);

export default router;