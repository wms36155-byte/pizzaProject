"use client";

import { Trash2, Pencil } from "lucide-react";
import { useState } from "react";
import { useCategoryStore } from "@/store/category.store";

export default function CategoryTable() {
  const { categories, deleteCategory, editCategory } =
    useCategoryStore();

  const [editId, setEditId] = useState<
    string | number | null
  >(null);

  const [value, setValue] = useState("");

  const startEdit = (id: string | number, name: string) => {
    setEditId(id);
    setValue(name);
  };

  const saveEdit = () => {
    if (!editId) return;

    editCategory(editId, value);

    setEditId(null);
    setValue("");
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <h2 className="text-2xl font-black mb-6">
        Categories
      </h2>

      {categories.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No categories yet
        </p>
      ) : (
        <div className="space-y-3">

          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex items-center justify-between p-4 border rounded-xl"
            >

              {/* LEFT */}
              <div className="flex-1">

                {editId === cat.id ? (
                  <input
                    value={value}
                    onChange={(e) =>
                      setValue(e.target.value)
                    }
                    className="border p-2 rounded w-full"
                  />
                ) : (
                  <>
                    <h3 className="font-bold text-lg">
                      {cat.name}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {cat.slug}
                    </p>
                  </>
                )}

              </div>

              {/* ACTIONS */}
              <div className="flex gap-2">

                {editId === cat.id ? (
                  <button
                    onClick={saveEdit}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      startEdit(cat.id, cat.name)
                    }
                    className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full"
                  >
                    <Pencil size={16} />
                  </button>
                )}

                <button
                  onClick={() =>
                    deleteCategory(cat.id)
                  }
                  className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full"
                >
                  <Trash2 size={16} />
                </button>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}