"use client";

import { useOrderStore } from "@/store/order.store";

import OrderTable from "@/components/admin/OrderTable";

export default function OrdersPage() {
  const {
    orders,
    updateOrderStatus,
  } = useOrderStore();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-black">
          Orders
        </h1>

        <p className="text-gray-500 mt-2">
          All pizza orders 🍕
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white border rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold">
            No orders yet
          </h2>
        </div>
      ) : (
        <OrderTable
          orders={orders}
          onUpdateStatus={
            updateOrderStatus
          }
        />
      )}
    </div>
  );
}