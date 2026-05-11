import Link from "next/link";

import {
  DollarSign,
  FolderKanban,
  Pizza,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    title: "Revenue",
    value: "$12.5K",
    icon: DollarSign,
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "Orders",
    value: "1,248",
    icon: ShoppingBag,
    color: "bg-blue-100 text-blue-500",
  },
  {
    title: "Products",
    value: "84",
    icon: Pizza,
    color: "bg-green-100 text-green-500",
  },
  {
    title: "Categories",
    value: "12",
    icon: FolderKanban,
    color: "bg-purple-100 text-purple-500",
  },
];

const orders = [
  {
    id: "#1201",
    customer: "John Doe",
    product: "Pepperoni Pizza",
    total: "$24",
    status: "Delivered",
  },
  {
    id: "#1202",
    customer: "Alex Smith",
    product: "Cheese Burger",
    total: "$18",
    status: "Pending",
  },
  {
    id: "#1203",
    customer: "Michael",
    product: "Italian Pizza",
    total: "$31",
    status: "Preparing",
  },
];

export default function AdminPage() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="
        flex
        items-center
        justify-between
        flex-wrap
        gap-5
      ">

        <div>

          <h1 className="
            text-4xl
            font-black
            text-gray-900
          ">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your restaurant system easily 🍕
          </p>

        </div>

        <Link
          href="/admin/foods"
          className="
            bg-orange-500
            hover:bg-orange-600
            transition
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
            flex
            items-center
            gap-2
            shadow-lg
            shadow-orange-500/20
          "
        >
          Manage Foods
          <ArrowRight size={18} />
        </Link>

      </div>

      {/* STATS */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-5
      ">

        {stats.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-6
                border
                border-gray-100
                shadow-sm
                hover:shadow-lg
                transition
              "
            >

              <div className="
                flex
                items-center
                justify-between
              ">

                <div>

                  <p className="text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="
                    text-4xl
                    font-black
                    mt-2
                    text-gray-900
                  ">
                    {item.value}
                  </h2>

                </div>

                <div className={`
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  ${item.color}
                `}>
                  <Icon size={28} />
                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* QUICK ACTIONS */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-5
      ">

        <Link
          href="/admin/categories"
          className="
            bg-white
            p-6
            rounded-3xl
            border
            border-gray-100
            shadow-sm
            hover:shadow-lg
            transition
          "
        >

          <div className="
            w-14
            h-14
            rounded-2xl
            bg-purple-100
            text-purple-500
            flex
            items-center
            justify-center
          ">
            <FolderKanban size={28} />
          </div>

          <h2 className="
            text-2xl
            font-bold
            mt-5
            text-gray-900
          ">
            Categories
          </h2>

          <p className="text-gray-500 mt-2">
            Manage food categories
          </p>

        </Link>

        <Link
          href="/admin/foods"
          className="
            bg-white
            p-6
            rounded-3xl
            border
            border-gray-100
            shadow-sm
            hover:shadow-lg
            transition
          "
        >

          <div className="
            w-14
            h-14
            rounded-2xl
            bg-green-100
            text-green-500
            flex
            items-center
            justify-center
          ">
            <Pizza size={28} />
          </div>

          <h2 className="
            text-2xl
            font-bold
            mt-5
            text-gray-900
          ">
            Foods
          </h2>

          <p className="text-gray-500 mt-2">
            Add & edit food items
          </p>

        </Link>

        <Link
          href="/admin/orders"
          className="
            bg-white
            p-6
            rounded-3xl
            border
            border-gray-100
            shadow-sm
            hover:shadow-lg
            transition
          "
        >

          <div className="
            w-14
            h-14
            rounded-2xl
            bg-blue-100
            text-blue-500
            flex
            items-center
            justify-center
          ">
            <ShoppingBag size={28} />
          </div>

          <h2 className="
            text-2xl
            font-bold
            mt-5
            text-gray-900
          ">
            Orders
          </h2>

          <p className="text-gray-500 mt-2">
            View customer orders
          </p>

        </Link>

      </div>

      {/* RECENT ORDERS */}
      <div className="
        bg-white
        rounded-3xl
        border
        border-gray-100
        shadow-sm
        overflow-hidden
      ">

        <div className="
          p-6
          border-b
          border-gray-100
          flex
          items-center
          justify-between
        ">

          <div>

            <h2 className="
              text-2xl
              font-bold
              text-gray-900
            ">
              Recent Orders
            </h2>

            <p className="text-gray-500 mt-1">
              Latest customer purchases
            </p>

          </div>

          <Link
            href="/admin/orders"
            className="
              text-orange-500
              font-semibold
              hover:underline
            "
          >
            View All
          </Link>

        </div>

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left p-5">
                Order ID
              </th>

              <th className="text-left p-5">
                Customer
              </th>

              <th className="text-left p-5">
                Product
              </th>

              <th className="text-left p-5">
                Total
              </th>

              <th className="text-left p-5">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order, index) => (

              <tr
                key={index}
                className="
                  border-t
                  border-gray-100
                  hover:bg-gray-50
                  transition
                "
              >

                <td className="
                  p-5
                  font-semibold
                  text-gray-900
                ">
                  {order.id}
                </td>

                <td className="p-5">
                  {order.customer}
                </td>

                <td className="p-5">
                  {order.product}
                </td>

                <td className="
                  p-5
                  font-bold
                ">
                  {order.total}
                </td>

                <td className="p-5">

                  <span className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium

                    ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                    }
                  `}>
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