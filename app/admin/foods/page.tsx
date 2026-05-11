"use client";

import { useState } from "react";

type Food = {
  id: number;
  title: string;
  price: number;
};

export default function FoodsPage() {
  const [foods, setFoods] = useState<Food[]>([
    {
      id: 1,
      title: "Pepperoni",
      price: 120,
    },
    {
      id: 2,
      title: "Cheese Pizza",
      price: 100,
    },
  ]);

  return (
    <div>

      <h1 className="text-3xl font-black mb-6">
        Foods 🍕
      </h1>

      <div className="space-y-4">

        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
          >

            <div>
              <h2 className="font-bold">
                {food.title}
              </h2>

              <p className="text-gray-500">
                {food.price} ₽
              </p>
            </div>

            <button
              onClick={() =>
                setFoods((prev) =>
                  prev.filter((f) => f.id !== food.id)
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