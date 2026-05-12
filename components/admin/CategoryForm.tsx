"use client";

import { useEffect, useState } from "react";
import { useCategoryStore } from "@/store/category.store";

type Props = {
  editId?: number | null;
  onFinish?: () => void;
};

export default function CategoryForm({
  editId,
  onFinish,
}: Props) {
  const { categories, addCategory, editCategory } =
    useCategoryStore();

  const [form, setForm] = useState({
    name: "",
    slug: "",
  });

  // LOAD DATA FOR EDIT
  useEffect(() => {
    if (editId === null || editId === undefined) return;

    const cat = categories.find(
      // compare as strings so number/string ids both match
      (c) => String(c.id) === String(editId)
    );

    if (cat) {
      setForm({
        name: cat.name,
        slug: cat.slug,
      });
    }
  }, [editId, categories]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.slug.trim()) return;

    // EDIT MODE
    if (editId !== null && editId !== undefined) {
      // call the store's edit function
      editCategory(editId, {
        name: form.name.trim(),
        slug: form.slug.trim(),
      });
    } else {
      // ADD MODE
      // the store's addCategory expects only name and optional slug
      addCategory({
        name: form.name.trim(),
        slug: form.slug.trim(),
      });
    }

    setForm({ name: "", slug: "" });
    onFinish?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border p-6 space-y-4"
    >
      <h2 className="text-2xl font-black">
        {editId != null ? "Edit Category" : "Add Category"}
      </h2>

      {/* NAME */}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Category name"
        className="w-full h-12 px-4 border rounded-xl outline-none focus:border-orange-500"
      />

      {/* SLUG */}
      <input
        name="slug"
        value={form.slug}
        onChange={handleChange}
        placeholder="Slug"
        className="w-full h-12 px-4 border rounded-xl outline-none focus:border-orange-500"
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-xl"
      >
        {editId != null ? "Update Category" : "Add Category"}
      </button>
    </form>
  );
}