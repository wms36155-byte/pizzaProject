import { api } from "./axios";

export const createCategory = async (data: { name: string }) => {
  const res = await api.post("/categories", data);
  return res.data;
};