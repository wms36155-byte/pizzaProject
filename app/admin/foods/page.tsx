import Link from "next/link";

import {
  Pizza,
  Plus,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

const foods = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: "$24",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    id: 2,
    name: "Cheese Burger",
    category: "Burger",
    price: "$18",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 3,
    name: "Italian Pizza",
    category: "Pizza",
    price: "$31",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1548365328-9f547fb0953b",
  },
];

export default function FoodsPage() {
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
            Foods
          </h1>

          <p className="text-gray-500 mt-2">
            Manage restaurant food products 🍕
          </p>

        </div>

        <button className="
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
        ">
          <Plus size={20} />
          Add Food
        </button>

      </div>

      {/* FOOD GRID */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      ">

        {foods.map((food) => (

          <div
            key={food.id}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              border
              border-gray-100
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={food.image}
                alt={food.name}
                className="
                  w-full
                  h-240px
                  object-cover
                "
              />

              <div className="
                absolute
                top-4
                right-4
                bg-white/90
                backdrop-blur-sm
                px-3
                py-1
                rounded-full
                flex
                items-center
                gap-1
                text-sm
                font-semibold
              ">
                <Star
                  size={16}
                  className="text-yellow-500 fill-yellow-500"
                />
                {food.rating}
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <div className="
                flex
                items-start
                justify-between
                gap-4
              ">

                <div>

                  <span className="
                    bg-orange-100
                    text-orange-600
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                  ">
                    {food.category}
                  </span>

                  <h2 className="
                    text-2xl
                    font-bold
                    text-gray-900
                    mt-4
                  ">
                    {food.name}
                  </h2>

                </div>

                <h3 className="
                  text-2xl
                  font-black
                  text-orange-500
                ">
                  {food.price}
                </h3>

              </div>

              {/* ACTIONS */}
              <div className="
                flex
                items-center
                gap-3
                mt-6
              ">

                <Link
                  href={`/admin/foods/${food.id}`}
                  className="
                    flex-1
                    h-12
                    rounded-2xl
                    bg-blue-100
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-semibold
                    hover:bg-blue-600
                    hover:text-white
                    transition
                  "
                >
                  <Pencil size={18} />
                  Edit
                </Link>

                <button
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-red-100
                    text-red-600
                    flex
                    items-center
                    justify-center
                    hover:bg-red-600
                    hover:text-white
                    transition
                  "
                >
                  <Trash2 size={18} />
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}