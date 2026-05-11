import { api } from "./axios";

// GET ALL PRODUCTS
export const getProducts = async () => {
  const res = await api.get("/foods");
  return res.data;
};

// GET BY CATEGORY (SHU MUHIM)
export const getProductsByCategory = async (category: string) => {
  const res = await api.get(`/foods?category=${category}`);
  return res.data;
};

// CREATE FOOD
export const createFood = async (data: any) => {
  const res = await api.post("/foods", data);
  return res.data;
};

// UPDATE FOOD
export const updateFood = async (id: number, data: any) => {
  const res = await api.put(`/foods/${id}`, data);
  return res.data;
};

// DELETE FOOD
export const deleteFood = async (id: number) => {
  const res = await api.delete(`/foods/${id}`);
  return res.data;
};