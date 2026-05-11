import { create } from "zustand";

export type Category = {
  id: string | number;
  name: string;
  slug: string;
  createdAt: string;
};

type CreateCategoryInput = {
  name: string;
  slug?: string;
};

type UpdateCategoryInput = {
  name: string;
  slug?: string;
};

type CategoryStore = {
  categories: Category[];

  addCategory: (data: CreateCategoryInput) => void;

  deleteCategory: (id: string | number) => void;

  editCategory: (
    id: string | number,
    data: UpdateCategoryInput
  ) => void;

  clearCategories: () => void;
};

export const useCategoryStore = create<CategoryStore>(
  (set) => ({
    categories: [],

    // ➕ ADD
    addCategory: (data) =>
      set((state) => ({
        categories: [
          ...state.categories,
          {
            id: Date.now(),
            name: data.name.trim(),
            slug: (
              data.slug ||
              data.name
            )
              .toLowerCase()
              .trim(),
            createdAt: new Date().toLocaleDateString(),
          },
        ],
      })),

    // ❌ DELETE
    deleteCategory: (id) =>
      set((state) => ({
        categories: state.categories.filter(
          (c) => c.id !== id
        ),
      })),

    // ✏️ EDIT (FIXED)
    editCategory: (id, data) =>
      set((state) => ({
        categories: state.categories.map((c) =>
          c.id === id
            ? {
                ...c,
                name: data.name.trim(),
                slug: (
                  data.slug ||
                  data.name
                )
                  .toLowerCase()
                  .trim(),
              }
            : c
        ),
      })),

    // 🧹 CLEAR
    clearCategories: () =>
      set({ categories: [] }),
  })
);