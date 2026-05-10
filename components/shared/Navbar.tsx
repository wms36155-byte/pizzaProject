"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { useCartStore } from "@/store/cart.store";

export default function Navbar() {
  // ✅ total items ni store items dan hisoblaymiz
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-black text-orange-600"
        >
          Pizza Shop
        </Link>

        {/* CART */}
        <Link
          href="/cart"
          className="relative bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full flex items-center gap-3"
        >
          <ShoppingCart size={20} />

          {/* COUNT */}
          {totalItems > 0 && (
            <span className="bg-white text-orange-600 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

      </div>
    </header>
  );
}