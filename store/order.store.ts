"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OrderItem {
  id: number;
  title: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  customer: string;
  address: string;
  total: number;
  status: string;
  createdAt: string;
  items: OrderItem[];
}

interface OrderStore {
  orders: Order[];

  addOrder: (order: Order) => void;

  updateOrderStatus: (
    id: number,
    status: string
  ) => void;
}

export const useOrderStore =
  create<OrderStore>()(
    persist(
      (set) => ({
        orders: [],

        addOrder: (order) =>
          set((state) => ({
            orders: [
              order,
              ...state.orders,
            ],
          })),

        updateOrderStatus: (
          id,
          status
        ) =>
          set((state) => ({
            orders: state.orders.map(
              (order) =>
                order.id === id
                  ? {
                      ...order,
                      status,
                    }
                  : order
            ),
          })),
      }),

      {
        name: "pizza-orders",
      }
    )
  );