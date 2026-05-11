"use client";

import Image from "next/image";
import { useState, useMemo, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

import CheckoutModal from "@/components/cart/CheckoutModal";

import { useCartStore } from "@/store/cart.store";
import { useOrderStore } from "@/store/order.store";

type CheckoutData = {
  name: string;
  address: string;
};

export default function CartPage() {
  const router = useRouter();

  const {
    items,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCartStore();

  const { addOrder } = useOrderStore();

  const [openCheckout, setOpenCheckout] = useState(false);
  const [loading, setLoading] = useState(false);

  const isEmpty = items.length === 0;

  // TOTAL PRICE
  const total = useMemo(() => {
    return items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [items]);

  // LOCK SCROLL WHEN MODAL OPEN
  useEffect(() => {
    document.body.style.overflow = openCheckout ? "hidden" : "auto";
  }, [openCheckout]);

  // CHECKOUT HANDLER (SAFE + CLEAN)
  const handleCheckout = useCallback(
    async (data: CheckoutData) => {
      if (isEmpty || loading) return;

      setLoading(true);

      try {
        addOrder({
          id: Date.now(),
          customer: data.name,
          address: data.address,
          total,
          status: "Pending",
          createdAt: new Date().toLocaleDateString(),
          items,
        });

        clearCart();
        setOpenCheckout(false);

        router.push("/admin/orders");
      } finally {
        setLoading(false);
      }
    },
    [items, total, isEmpty, loading, addOrder, clearCart, router]
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg">
            <ShoppingBag size={30} />
          </div>

          <div>
            <h1 className="text-5xl font-black">Your Cart</h1>
            <p className="text-gray-500 mt-2 text-lg">
              Fresh pizza is waiting 🍕
            </p>
          </div>
        </div>

        {/* EMPTY */}
        {isEmpty ? (
          <div className="bg-white rounded-[30px] border shadow-sm p-16 text-center">
            <h2 className="text-4xl font-black mb-4">
              Cart is empty 🛒
            </h2>

            <p className="text-gray-500 text-lg">
              Add your favorite pizzas
            </p>

            <button
              onClick={() => router.push("/")}
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-black text-lg transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-8">

            {/* ITEMS */}
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[30px] border p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5"
                >
                  <div className="flex items-center gap-5 w-full">
                    <div className="relative w-28 h-28 rounded-3xl overflow-hidden bg-gray-100 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-black select-none">
                        {item.title}
                      </h2>

                      <p className="text-orange-500 font-black text-xl mt-2">
                        {item.price} ₽
                      </p>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-6">

                    {/* QTY */}
                    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-9 h-9 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="font-black text-lg min-w-[20px] text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* DELETE */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-11 h-11 rounded-full bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="h-fit sticky top-10">
              <div className="bg-white rounded-[30px] border p-7 shadow-sm">

                <h2 className="text-3xl font-black mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5">
                  <div className="flex justify-between text-gray-500">
                    <span>Products</span>
                    <span>{items.length}</span>
                  </div>

                  <div className="flex justify-between text-gray-500">
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>

                  <div className="border-t pt-5 flex justify-between">
                    <span className="text-2xl font-black">Total</span>
                    <span className="text-4xl font-black text-orange-500">
                      {total} ₽
                    </span>
                  </div>
                </div>

                {/* CHECKOUT */}
                <button
                  disabled={isEmpty || loading}
                  onClick={() => setOpenCheckout(true)}
                  className={`w-full mt-8 py-5 rounded-2xl font-black text-lg shadow-lg transition
                    ${
                      isEmpty || loading
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                    }`}
                >
                  {loading ? "Processing..." : "Checkout"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL */}
        <CheckoutModal
          open={openCheckout}
          onClose={() => setOpenCheckout(false)}
          onConfirm={handleCheckout}
        />
      </div>
    </div>
  );
}