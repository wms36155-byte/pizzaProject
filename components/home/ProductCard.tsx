"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cart.store";

interface Props {
  product: Product;
}

const doughs = ["Традиционное", "Тонкое"];
const sizes = [26, 30, 40];

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  const [activeDough, setActiveDough] = useState("Традиционное");
  const [activeSize, setActiveSize] = useState(26);

  const count = useCartStore((state) =>
    state.items.find(
      (i) => i.id === `${product.id}-${activeSize}-${activeDough}`
    )?.quantity || 0
  );

  // 🔥 SAFE IMAGE
  const imageSrc =
    product.image && product.image.trim().length > 0
      ? product.image
      : "/placeholder.png";

  // 🔥 SAFE ALT (FIX ERROR HERE)
  const imageAlt =
    product.title?.trim() || "Pizza image";

  const price = useMemo(() => {
    let p = product.price;

    if (activeSize === 30) p *= 1.2;
    if (activeSize === 40) p *= 1.4;

    if (activeDough === "Тонкое") p += 100;

    return Math.round(p);
  }, [activeSize, activeDough, product.price]);

  const handleAdd = () => {
    addToCart({
      id: `${product.id}-${activeSize}-${activeDough}`,
      title: `${product.title} ${activeSize}см`,
      image: imageSrc,
      price,
      quantity: 1,
    });

    toast.success("Добавлено в корзину 🍕");
  };

  return (
    <div className="bg-white rounded-[32px] p-5 border border-zinc-100 flex flex-col">

      {/* IMAGE */}
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={imageAlt}   // 🔥 FIXED HERE
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain"
          priority={false}
        />
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-black text-center mt-3">
        {product.title}
      </h3>

      {/* OPTIONS */}
      <div className="bg-[#F3F3F3] rounded-2xl p-2 mt-4">

        {/* DOUGH */}
        <div className="grid grid-cols-2 gap-2">
          {doughs.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDough(d)}
              className={`h-10 rounded-xl font-bold ${
                activeDough === d
                  ? "bg-white text-black"
                  : "text-zinc-500"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* SIZE */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSize(s)}
              className={`h-10 rounded-xl font-bold ${
                activeSize === s
                  ? "bg-white text-black"
                  : "text-zinc-500"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-end mt-6">

        <p className="text-3xl font-black">{price} ₽</p>

        <button
          onClick={handleAdd}
          className="bg-orange-500 text-white px-5 py-3 rounded-full"
        >
          Добавить {count > 0 && `(${count})`}
        </button>

      </div>

    </div>
  );
}