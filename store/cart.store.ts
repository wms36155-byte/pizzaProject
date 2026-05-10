import { create } from "zustand";

type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],

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
        items: [...state.items, item],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),

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
}));