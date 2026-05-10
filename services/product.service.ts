import { api } from "./axios";
import { API } from "@/constants/api";

export const getProducts = async () => {
  const res = await api.get(API.PRODUCTS);

  return res.data;
};

export const getProductsByCategory = async (
  categoryId: string
) => {
  const res = await api.get(
    `${API.PRODUCTS}?categoryId=${categoryId}`
  );

  return res.data;
};