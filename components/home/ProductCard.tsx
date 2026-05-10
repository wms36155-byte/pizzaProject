"use client";

import { useState, useMemo, useRef } from "react";
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

  const imgRef = useRef<HTMLImageElement>(null);

  const count = useCartStore((state) =>
    state.items.find(
      (i) =>
        i.id === `${product.id}-${activeSize}-${activeDough}`
    )?.quantity || 0
  );

  const imageSrc =
    product.image?.trim() !== ""
      ? product.image
      : "/placeholder.png";

  const price = useMemo(() => {
    let p = product.price;

    if (activeSize === 30) p *= 1.2;
    if (activeSize === 40) p *= 1.4;

    if (activeDough === "Тонкое") p += 100;

    return Math.round(p);
  }, [activeSize, activeDough, product.price]);

  const flyToCart = () => {
    const cart = document.getElementById("cart-icon");
    const img = imgRef.current;

    if (!cart || !img) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    const clone = img.cloneNode(true) as HTMLImageElement;

    clone.style.position = "fixed";
    clone.style.left = imgRect.left + "px";
    clone.style.top = imgRect.top + "px";
    clone.style.width = "80px";
    clone.style.zIndex = "9999";
    clone.style.transition = "all 0.8s ease";

    document.body.appendChild(clone);

    setTimeout(() => {
      clone.style.left = cartRect.left + "px";
      clone.style.top = cartRect.top + "px";
      clone.style.opacity = "0";
      clone.style.transform = "scale(0.3)";
    }, 50);

    setTimeout(() => clone.remove(), 900);
  };

  const handleAdd = () => {
    addToCart({
      id: `${product.id}-${activeSize}-${activeDough}`,
      title: `${product.title} ${activeSize}см`,
      image: imageSrc,
      price,
      quantity: 1,
    });

    flyToCart();

    toast.success("Добавлено в корзину 🍕");
  };

  return (
    <div className="bg-white rounded-[32px] p-5 border border-zinc-100 flex flex-col">

      {/* IMAGE */}
      <div className="flex justify-center pt-2">
        <Image
          ref={imgRef}
          src={imageSrc}
          alt={product.title}
          width={260}
          height={260}
          className="object-contain hover:scale-105 transition"
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

        <div>
          <p className="text-3xl font-black">{price} ₽</p>
        </div>

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