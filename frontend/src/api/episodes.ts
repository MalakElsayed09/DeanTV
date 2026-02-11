import api from "./axios";

export const getEpisodesByShow = async (showId: string) => {
  const res = await api.get(`/episodes/show/${showId}`);
  return res.data;
};

export const getEpisode = async (episodeId: string) => {
  const res = await api.get(`/episodes/${episodeId}`);
  return res.data;
};
