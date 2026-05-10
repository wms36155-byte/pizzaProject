import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];

  addToCart: (item: CartItem) => void;

  decreaseQuantity: (id: string) => void;

  removeFromCart: (id: string) => void;

  clearCart: () => void;

  totalPrice: () => number;

  totalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) => {
        const existing = get().items.find(
          (i) => i.id === item.id
        );

        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id
                ? {
                    ...i,
                    quantity: i.quantity + 1,
                  }
                : i
            ),
          });
        } else {
          set({
            items: [
              ...get().items,
              {
                ...item,
                quantity: 1,
              },
            ],
          });
        }
      },

      decreaseQuantity: (id) => {
        const existing = get().items.find(
          (i) => i.id === id
        );

        if (
          existing &&
          existing.quantity === 1
        ) {
          set({
            items: get().items.filter(
              (i) => i.id !== id
            ),
          });

          return;
        }

        set({
          items: get().items.map((i) =>
            i.id === id
              ? {
                  ...i,
                  quantity: i.quantity - 1,
                }
              : i
          ),
        });
      },

      removeFromCart: (id) => {
        set({
          items: get().items.filter(
            (i) => i.id !== id
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      totalPrice: () =>
        get().items.reduce(
          (acc, item) =>
            acc + item.price * item.quantity,
          0
        ),

      totalItems: () =>
        get().items.reduce(
          (acc, item) => acc + item.quantity,
          0
        ),
    }),
    {
      name: "pizza-cart",
    }
  )
);