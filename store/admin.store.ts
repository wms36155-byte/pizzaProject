import { create } from "zustand";

type AdminState = {
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

export const useAdminStore = create<AdminState>((set) => ({
  isAdmin: false,

  login: (username, password) => {
    if (username === "admin" && password === "1234") {
      set({ isAdmin: true });
      return true;
    }
    return false;
  },

  logout: () => set({ isAdmin: false }),
}));