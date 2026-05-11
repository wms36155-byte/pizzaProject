import { api } from "./axios";

// CREATE FOOD
export const createFood = async (data: {
  name: string;
  price: string;
  category: string;
}) => {
  const res = await api.post("/foods", data);
  return res.data;
};