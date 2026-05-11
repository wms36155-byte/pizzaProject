import Link from "next/link";

import {
  FolderKanban,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Pizza",
    totalFoods: 24,
  },
  {
    id: 2,
    name: "Burger",
    totalFoods: 12,
  },
  {
    id: 3,
    name: "Drinks",
    totalFoods: 8,
  },
];

export default function CategoriesPage() {
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
            Categories
          </h1>

          <p className="text-gray-500 mt-2">
            Manage restaurant categories
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
          Add Category
        </button>

      </div>

      {/* TABLE */}
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

          <div className="flex items-center gap-3">

            <div className="
              w-12
              h-12
              rounded-2xl
              bg-purple-100
              text-purple-500
              flex
              items-center
              justify-center
            ">
              <FolderKanban size={24} />
            </div>

            <div>

              <h2 className="
                text-2xl
                font-bold
                text-gray-900
              ">
                All Categories
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Total {categories.length} categories
              </p>

            </div>

          </div>

        </div>

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left p-5 text-gray-500">
                ID
              </th>

              <th className="text-left p-5 text-gray-500">
                Category
              </th>

              <th className="text-left p-5 text-gray-500">
                Foods
              </th>

              <th className="text-left p-5 text-gray-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {categories.map((category) => (

              <tr
                key={category.id}
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
                  #{category.id}
                </td>

                <td className="p-5">

                  <div className="flex items-center gap-3">

                    <div className="
                      w-10
                      h-10
                      rounded-xl
                      bg-purple-100
                      text-purple-500
                      flex
                      items-center
                      justify-center
                    ">
                      <FolderKanban size={18} />
                    </div>

                    <div>

                      <h3 className="
                        font-semibold
                        text-gray-900
                      ">
                        {category.name}
                      </h3>

                      <p className="
                        text-sm
                        text-gray-500
                      ">
                        Food category
                      </p>

                    </div>

                  </div>

                </td>

                <td className="
                  p-5
                  font-semibold
                  text-gray-700
                ">
                  {category.totalFoods} Foods
                </td>

                <td className="p-5">

                  <div className="flex items-center gap-3">

                    <Link
                      href={`/admin/categories/${category.id}`}
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-blue-100
                        text-blue-600
                        flex
                        items-center
                        justify-center
                        hover:bg-blue-600
                        hover:text-white
                        transition
                      "
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      className="
                        w-11
                        h-11
                        rounded-xl
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

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}