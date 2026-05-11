import {
  Package,
  Clock,
  CheckCircle,
  Truck,
} from "lucide-react";

const orders = [
  {
    id: "#1001",
    customer: "John Doe",
    total: "$24",
    status: "Pending",
    items: 2,
  },
  {
    id: "#1002",
    customer: "Alex Smith",
    total: "$18",
    status: "Delivered",
    items: 1,
  },
  {
    id: "#1003",
    customer: "Michael",
    total: "$31",
    status: "Shipping",
    items: 3,
  },
];

const statusStyle = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-600";
    case "Shipping":
      return "bg-blue-100 text-blue-600";
    default:
      return "bg-orange-100 text-orange-600";
  }
};

const statusIcon = (status: string) => {
  switch (status) {
    case "Delivered":
      return <CheckCircle size={16} />;
    case "Shipping":
      return <Truck size={16} />;
    default:
      return <Clock size={16} />;
  }
};

export default function OrdersPage() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-black text-gray-900">
          Orders
        </h1>

        <p className="text-gray-500 mt-2">
          Track and manage all customer orders
        </p>
      </div>

      {/* TABLE CARD */}
      <div className="
        bg-white
        rounded-3xl
        border
        border-gray-100
        shadow-sm
        overflow-hidden
      ">

        {/* TOP BAR */}
        <div className="
          p-6
          border-b
          border-gray-100
          flex
          items-center
          gap-3
        ">

          <div className="
            w-12
            h-12
            rounded-2xl
            bg-orange-100
            text-orange-500
            flex
            items-center
            justify-center
          ">
            <Package size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              All Orders
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Total {orders.length} orders
            </p>
          </div>

        </div>

        {/* TABLE */}
        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="p-5 text-left text-gray-500">
                Order ID
              </th>

              <th className="p-5 text-left text-gray-500">
                Customer
              </th>

              <th className="p-5 text-left text-gray-500">
                Items
              </th>

              <th className="p-5 text-left text-gray-500">
                Total
              </th>

              <th className="p-5 text-left text-gray-500">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.id}
                className="
                  border-t
                  border-gray-100
                  hover:bg-gray-50
                  transition
                "
              >

                <td className="p-5 font-semibold">
                  {order.id}
                </td>

                <td className="p-5 font-medium">
                  {order.customer}
                </td>

                <td className="p-5">
                  {order.items}
                </td>

                <td className="p-5 font-bold text-gray-900">
                  {order.total}
                </td>

                <td className="p-5">

                  <span className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                    flex
                    items-center
                    gap-2
                    w-fit
                    ${statusStyle(order.status)}
                  `}>

                    {statusIcon(order.status)}
                    {order.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}