"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createFood } from "@/services/product.service";

export default function CreateFoodPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    await createFood(form);

    setLoading(false);
    router.push("/admin/foods");
  };

  return (
    <div className="max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Create Food
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl border space-y-4"
      >

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Food name"
          className="w-full border p-3 rounded-xl"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price (e.g $20)"
          className="w-full border p-3 rounded-xl"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category (Pizza, Burger...)"
          className="w-full border p-3 rounded-xl"
        />

        <button
          disabled={loading}
          className="bg-orange-500 text-white w-full py-3 rounded-xl"
        >
          {loading ? "Saving..." : "Create Food"}
        </button>

      </form>

    </div>
  );
}