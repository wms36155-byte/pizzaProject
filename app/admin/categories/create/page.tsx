"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/store/category.store";

export default function CreateCategoryPage() {
  const router = useRouter();
  const { addCategory } = useCategoryStore();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    setLoading(true);

    const slug = name.toLowerCase().trim().replace(/\s+/g, "-");

    // addCategory expects { name, slug? }
    addCategory({
      name: name.trim(),
      slug,
    });

    setName("");
    setLoading(false);

    router.push("/admin/categories");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Create Category
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl border space-y-4"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category name"
          className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-300"
        />

        <button
          disabled={loading}
          type="submit"
          className="bg-purple-600 text-white w-full py-3 rounded-xl"
        >
          {loading ? "Saving..." : "Create Category"}
        </button>
      </form>
    </div>
  );
}