"use client";

interface OrderItem {
  id: number;
  title: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  customer: string;
  address: string;
  total: number;
  status: string;
  createdAt: string;
  items: OrderItem[];
}

interface Props {
  orders: Order[];
  onUpdateStatus: (
    id: number,
    status: string
  ) => void;
}

export default function OrderTable({
  orders,
  onUpdateStatus,
}: Props) {
  return (
    <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">
                Customer
              </th>

              <th className="text-left p-4">
                Address
              </th>

              <th className="text-left p-4">
                Items
              </th>

              <th className="text-left p-4">
                Total
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t"
              >
                <td className="p-4 font-bold">
                  {order.customer}
                </td>

                <td className="p-4">
                  {order.address}
                </td>

                <td className="p-4">
                  <div className="space-y-1">
                    {order.items.map((item) => (
                      <p key={item.id}>
                        {item.title} ×{" "}
                        {item.quantity}
                      </p>
                    ))}
                  </div>
                </td>

                <td className="p-4 font-bold text-orange-500">
                  {order.total} ₽
                </td>

                <td className="p-4">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      onUpdateStatus(
                        order.id,
                        e.target.value
                      )
                    }
                    className="border rounded-xl px-3 py-2"
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Cooking">
                      Cooking
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>
                  </select>
                </td>

                <td className="p-4 text-gray-500">
                  {order.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}