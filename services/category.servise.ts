import { api } from "./axios";
import { API } from "@/constants/api";

export const getCategories = async () => {
  const res = await api.get(API.CATEGORIES);
  return res.data;
};

export const createCategory = async (data: any) => {
  const res = await api.post(API.CATEGORIES, data);
  return res.data;
};

export const deleteCategory = async (id: string) => {
  const res = await api.delete(`${API.CATEGORIES}/${id}`);
  return res.data;
};