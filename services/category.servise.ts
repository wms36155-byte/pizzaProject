import { api } from "./axios";
import { API } from "@/constants/api";

export const getCategories = async () => {
  const res = await api.get(API.CATEGORIES);

  return res.data;
};