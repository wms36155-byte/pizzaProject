"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import { useCartStore } from "@/store/cart.store";

interface CartItemProps {
  item: {
    id: string | number;
    title: string;
    image: string;
    price: number;
    quantity: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const {
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCartStore();

  return (
    <div className="flex gap-4 p-4 border rounded-2xl bg-white shadow-sm">
      {/* IMAGE */}
      <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* INFO */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">
              {item.title}
            </h3>

            <p className="text-orange-500 font-bold mt-1">
              {item.price} ₽
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-600 transition"
          >
            <Trash2 size={18} />
          </button>
        </div>

        {/* QUANTITY */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => decreaseQty(item.id)}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
          >
            <Minus size={16} />
          </button>

          <span className="font-bold text-lg">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQty(item.id)}
            className="w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}