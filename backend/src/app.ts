import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ---------- Middleware ---------- */
app.use(cors());
app.use(express.json());

/* ---------- Health Check ---------- */
app.get("/", (_req, res) => {
  res.status(200).send("DeanTV API is running 🚀");
});

/* ---------- API Routes (placeholder) ---------- */
// app.use("/api/auth", authRoutes);
// app.use("/api/shows", showRoutes);
// app.use("/api/episodes", episodeRoutes);

export default app;
