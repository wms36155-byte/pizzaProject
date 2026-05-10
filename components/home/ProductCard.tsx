"use client";

import Image from "next/image";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-5 transition hover:shadow-xl">

      <div className="flex justify-center">

        <Image
          src={product.image}
          alt={product.title}
          width={260}
          height={260}
          className="object-contain hover:scale-105 transition duration-300"
        />

      </div>

      <h3 className="text-2xl font-bold text-center mt-4">
        {product.title}
      </h3>

      <div className="bg-zinc-100 rounded-2xl p-2 mt-5">

        <div className="grid grid-cols-2 gap-2">

          <button className="bg-white rounded-xl py-2 text-sm font-medium">
            тонкое
          </button>

          <button className="rounded-xl py-2 text-sm text-zinc-500">
            традиционное
          </button>

        </div>

        <div className="grid grid-cols-3 gap-2 mt-2">

          <button className="bg-white rounded-xl py-2 text-sm">
            26 см.
          </button>

          <button className="rounded-xl py-2 text-sm">
            30 см.
          </button>

          <button className="rounded-xl py-2 text-sm">
            40 см.
          </button>

        </div>

      </div>

      <div className="flex items-center justify-between mt-6">

        <p className="text-2xl font-bold">
          от {product.price} ₽
        </p>

        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition rounded-full px-5 py-3 font-semibold">
          + Добавить
        </button>

      </div>

    </div>
  );
}