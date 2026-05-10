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

  // ✅ REAL COUNT FROM CART (NO LOCAL STATE)
  const count = useCartStore((state) =>
    state.items.find(
      (i) =>
        i.id === `${product.id}-${activeSize}-${activeDough}`
    )?.quantity || 0
  );

  // ✅ SAFE IMAGE
  const imageSrc =
    product.image?.trim() !== ""
      ? product.image
      : "/placeholder.png";

  // 🔥 DYNAMIC PRICE (REAL SHOP LOGIC)
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
    <div className="bg-white rounded-[32px] p-5 border border-zinc-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full">

      {/* IMAGE */}
      <div className="flex justify-center pt-2">
        <Image
          src={imageSrc}
          alt={product.title}
          width={260}
          height={260}
          priority
          className="object-contain hover:scale-105 transition-transform duration-300 select-none"
          draggable={false}
        />
      </div>

      {/* TITLE */}
      <h3 className="text-[28px] font-black leading-[120%] text-center mt-3 min-h-[72px]">
        {product.title}
      </h3>

      {/* SELECTORS */}
      <div className="bg-[#F3F3F3] rounded-2xl p-2 mt-5">

        {/* DOUGH */}
        <div className="grid grid-cols-2 gap-2">
          {doughs.map((dough) => (
            <button
              key={dough}
              onClick={() => setActiveDough(dough)}
              className={`h-[40px] rounded-xl text-[14px] font-bold transition-all duration-200 ${
                activeDough === dough
                  ? "bg-white shadow-sm text-black"
                  : "text-zinc-500 hover:text-black"
              }`}
            >
              {dough}
            </button>
          ))}
        </div>

        {/* SIZES */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`h-[40px] rounded-xl text-[14px] font-bold transition-all duration-200 ${
                activeSize === size
                  ? "bg-white shadow-sm text-black"
                  : "text-zinc-500 hover:text-black"
              }`}
            >
              {size} см
            </button>
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <div className="flex items-end justify-between mt-8">

        {/* PRICE */}
        <div className="flex flex-col">
          <span className="text-xs text-zinc-400 font-medium uppercase">
            price
          </span>

          <div className="flex items-end gap-1">
            <p className="text-[34px] font-black leading-none">
              {price}
            </p>
            <span className="text-2xl font-bold mb-1">₽</span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleAdd}
          className="group relative overflow-hidden h-[54px] px-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-200 flex items-center gap-3"
        >
          {/* glow */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />

          {/* plus */}
          <div className="relative z-10 w-7 h-7 rounded-full bg-white flex items-center justify-center text-orange-500 text-lg font-black">
            +
          </div>

          {/* text */}
          <span className="relative z-10 text-white font-bold text-[15px]">
            Добавить
          </span>

          {/* count */}
          {count > 0 && (
            <div className="relative z-10 min-w-[24px] h-6 px-1 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-sm font-bold">
              {count}
            </div>
          )}
        </button>

      </div>

    </div>
  );
}