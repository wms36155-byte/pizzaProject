import { create } from "zustand";

export type CartItem = {
  id: string | number;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string | number) => void;
  increaseQty: (id: string | number) => void;
  decreaseQty: (id: string | number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  // 🚀 FIXED ADD TO CART (NO DUPLICATE)
  addToCart: (item) =>
    set((state) => {
      const exists = state.items.find((i) => i.id === item.id);

      if (exists) {
        return {
          items: state.items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1 }],
      };
    }),

  // REMOVE
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  // INCREASE
  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),

  // DECREASE
  decreaseQty: (id) =>
    set((state) => ({
      items: state.items
        .map((i) =>
          i.id === id
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0),
    })),

  // CLEAR
  clearCart: () => set({ items: [] }),
}));