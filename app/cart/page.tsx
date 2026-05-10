"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cart.store";

export default function CartPage() {
  const {
    items,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-black mb-6">
        Your Cart 🛒
      </h1>

      {/* EMPTY STATE */}
      {items.length === 0 ? (
        <p className="text-gray-500">
          Cart is empty
        </p>
      ) : (
        <div className="space-y-4">

          {/* ITEMS */}
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border"
            >

              {/* IMAGE + TITLE */}
              <div className="flex items-center gap-4">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="rounded-xl"
                />

                <div>
                  <h2 className="font-bold">
                    {item.title}
                  </h2>

                  <p className="text-gray-500">
                    {item.price} ₽
                  </p>
                </div>

              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-3">

                <button
                  onClick={() =>
                    decreaseQty(item.id)
                  }
                  className="w-8 h-8 bg-gray-200 rounded-full"
                >
                  -
                </button>

                <span className="font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQty(item.id)
                  }
                  className="w-8 h-8 bg-gray-200 rounded-full"
                >
                  +
                </button>

              </div>

              {/* REMOVE */}
              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="text-red-500 font-bold"
              >
                Delete
              </button>

            </div>
          ))}

          {/* TOTAL */}
          <div className="text-right mt-6 text-2xl font-black">
            Total: {total} ₽
          </div>

          {/* CHECKOUT BUTTON */}
          <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-bold">
            Checkout
          </button>

        </div>
      )}

    </div>
  );
}