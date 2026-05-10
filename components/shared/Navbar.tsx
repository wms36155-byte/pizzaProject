"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart.store";

export default function Navbar() {
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        <Link href="/" className="text-3xl font-black text-orange-600">
          Pizza Shop
        </Link>

        <Link
          href="/cart"
          id="cart-icon"
          className="relative bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full flex items-center gap-3"
        >
          <ShoppingCart size={20} />

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