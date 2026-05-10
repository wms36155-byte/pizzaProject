"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold text-orange-600"
        >
          PizzaShop
        </Link>

        <nav className="flex items-center gap-5">

          <Link href="/">
            Home
          </Link>

          <Link
            href="/cart"
            className="relative"
          >
            <ShoppingCart />

            <span className="absolute -top-2 -right-2 text-xs bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>

        </nav>
      </div>
    </header>
  );
}