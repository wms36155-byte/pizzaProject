"use client";

import Link from "next/link";
import { ShoppingCart, Shield, LogOut } from "lucide-react";
import { useState } from "react";

import { useCartStore } from "@/store/cart.store";
import { useAdminStore } from "@/store/admin.store";

export default function Navbar() {
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const { isAdmin, login, logout } = useAdminStore();

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    const ok = login(form.username, form.password);

    if (!ok) {
      alert("Wrong admin credentials!");
      return;
    }

    setOpen(false);
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-3xl font-black text-orange-600">
          Pizza Shop
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* ADMIN BUTTON */}
          {!isAdmin ? (
            <button
              onClick={() => setOpen(true)}
              className="
                flex
                items-center
                gap-2
                bg-black
                text-white
                px-4
                py-2
                rounded-full
                hover:bg-gray-800
                transition
              "
            >
              <Shield size={18} />
              Admin
            </button>
          ) : (
            <>
              <Link
                href="/admin"
                className="
                  bg-green-600
                  text-white
                  px-4
                  py-2
                  rounded-full
                  hover:bg-green-700
                  transition
                  flex
                  items-center
                  gap-2
                "
              >
                <Shield size={18} />
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  rounded-full
                  hover:bg-red-600
                  transition
                  flex
                  items-center
                  gap-2
                "
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}

          {/* CART */}
          <Link
            href="/cart"
            className="
              relative
              bg-orange-500
              hover:bg-orange-600
              transition
              text-white
              px-6
              py-3
              rounded-full
              flex
              items-center
              gap-3
            "
          >
            <ShoppingCart size={20} />

            {totalItems > 0 && (
              <span className="
                bg-white
                text-orange-600
                text-xs
                font-bold
                w-5
                h-5
                flex
                items-center
                justify-center
                rounded-full
              ">
                {totalItems}
              </span>
            )}
          </Link>

        </div>
      </div>

      {/* LOGIN MODAL */}
      {open && (
        <div className="
          fixed
          inset-0
          bg-black/50
          flex
          items-center
          justify-center
        ">

          <div className="
            bg-white
            p-6
            rounded-2xl
            w-[320px]
            space-y-3
          ">

            <h2 className="text-xl font-bold">
              Admin Login
            </h2>

            <input
              placeholder="username"
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
            />
            <p>username: admin</p>

            <input
              placeholder="password"
              type="password"
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            <p>password: 1234</p>
            <div className="flex gap-2">

              <button
                onClick={handleLogin}
                className="bg-green-500 text-white w-full py-2 rounded"
              >
                Login
              </button>

              <button
                onClick={() => setOpen(false)}
                className="bg-gray-200 w-full py-2 rounded"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </header>
  );
}