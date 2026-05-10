import { create } from "zustand";

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

  removeFromCart: (id: string) => void;

  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (item) => {
    const existing = get().items.find((i) => i.id === item.id);

    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      });
    } else {
      set({
        items: [...get().items, { ...item, quantity: 1 }],
      });
    }
  },

  removeFromCart: (id) => {
    set({
      items: get().items.filter((i) => i.id !== id),
    });
  },

  clearCart: () => set({ items: [] }),
}));