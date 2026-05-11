"use client";

import { useState } from "react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    "Pizza",
    "Burger",
    "Drinks",
  ]);

  return (
    <div>

      <h1 className="text-3xl font-black mb-6">
        Categories 🍔
      </h1>

      <div className="space-y-3">

        {categories.map((category) => (
          <div
            key={category}
            className="bg-white p-4 rounded-xl shadow flex justify-between"
          >

            <h2 className="font-bold">
              {category}
            </h2>

            <button
              onClick={() =>
                setCategories((prev) =>
                  prev.filter((c) => c !== category)
                )
              }
              className="text-red-500"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}