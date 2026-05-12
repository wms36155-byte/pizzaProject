"use client";

import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

export default function OrdersPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-[40px] border shadow-xl p-10 text-center relative overflow-hidden">
        {/* TOP GRADIENT */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient from-orange-500 to-yellow-400" />

        {/* ICON */}
        <div className="w-28 h-28 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-8">
          <CheckCircle2
            size={60}
            className="text-green-500"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-black text-gray-900 mb-4">
          Order Confirmed 🎉
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-500 text-lg leading-8 max-w-xl mx-auto">
          Your delicious pizza order has been
          placed successfully 🍕
          <br />
          Our chefs are already preparing your
          meal.
        </p>

        {/* INFO CARDS */}
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500 text-white flex items-center justify-center mb-4">
              <ShoppingBag size={28} />
            </div>

            <h3 className="font-black text-xl mb-2">
              Fast Delivery
            </h3>

            <p className="text-gray-500 text-sm">
              Your order will arrive hot and
              fresh.
            </p>
          </div>

          <div className="bg-green-50 rounded-3xl p-6 border border-green-100">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-green-500 text-white flex items-center justify-center mb-4">
              <CheckCircle2 size={28} />
            </div>

            <h3 className="font-black text-xl mb-2">
              Payment Success
            </h3>

            <p className="text-gray-500 text-sm">
              Your order has been accepted.
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            onClick={() => router.push("/")}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-lg transition shadow-lg"
          >
            Continue Shopping
          </button>

          <button
            onClick={() =>
              router.push("/admin/orders")
            }
            className="flex-1 border border-gray-300 hover:bg-gray-100 py-4 rounded-2xl font-black text-lg transition flex items-center justify-center gap-2"
          >
            View Orders
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}