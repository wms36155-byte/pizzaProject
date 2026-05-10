import { api } from "./axios";
import { API } from "@/constants/api";

export const createOrder = async (
  data: any
) => {
  const res = await api.post(
    API.ORDERS,
    data
  );

  return res.data;
};