import api from "./axios";

export const getContinueWatching = async () => {
  const res = await api.get("/watch");
  return res.data;
};

export const saveProgress = async (
  episodeId: string,
  progress: number,
  completed: boolean
) => {
  await api.post("/watch", {
    episodeId,
    progress,
    completed,
  });
};
