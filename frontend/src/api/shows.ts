import api from "./axios";

export interface Show {
  _id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  createdAt: string;
}

export const getShows = async (): Promise<Show[]> => {
  const res = await api.get("/shows");
  return res.data;
};

export const getShow = async (showId: string): Promise<Show> => {
  const res = await api.get(`/shows/${showId}`);
  return res.data;
};