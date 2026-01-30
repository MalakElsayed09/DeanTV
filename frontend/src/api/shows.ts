import api from "./axios";

export const getShows = () => api.get("/shows");
