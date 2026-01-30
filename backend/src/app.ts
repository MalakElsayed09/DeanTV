import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import showRoutes from "./routes/show.routes";
import episodeRoutes from "./routes/episode.routes";
import watchRoutes from "./routes/watch.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/episodes", episodeRoutes);
app.use("/api/watch", watchRoutes);

export default app;
