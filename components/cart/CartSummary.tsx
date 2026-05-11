"use client";

import { useCartStore } from "@/store/cart.store";

export default function CartSummary() {
  const items = useCartStore((state) => state.items);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 0 ? 5 : 0;

  const total = subtotal + deliveryFee;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-gray-600">
        <span>Subtotal</span>

        <span className="font-semibold">
          ${subtotal.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center justify-between text-gray-600">
        <span>Delivery</span>

        <span className="font-semibold">
          ${deliveryFee.toFixed(2)}
        </span>
      </div>

      <div className="border-t pt-4 flex items-center justify-between">
        <span className="text-lg font-bold">
          Total
        </span>

        <span className="text-2xl font-bold text-orange-500">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}