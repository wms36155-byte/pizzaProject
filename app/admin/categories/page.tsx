"use client";

import Link from "next/link";
import { FolderKanban, Pencil, Trash2, Plus } from "lucide-react";
import { useCategoryStore } from "@/store/category.store";

export default function CategoriesPage() {
  const { categories, deleteCategory } = useCategoryStore();

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between flex-wrap gap-5">

        <div>
          <h1 className="text-4xl font-black text-gray-900">
            Categories
          </h1>

          <p className="text-gray-500 mt-2">
            Manage restaurant categories
          </p>
        </div>

        {/* ADD BUTTON */}
        <Link
          href="/admin/categories/create"
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
          <Plus size={20} />
          Add Category
        </Link>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">

        <div className="p-6 border-b flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-500 flex items-center justify-center">
            <FolderKanban size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              All Categories
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Total {categories.length} categories
            </p>
          </div>

        </div>

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>
              <th className="text-left p-5 text-gray-500">ID</th>
              <th className="text-left p-5 text-gray-500">Category</th>
              <th className="text-left p-5 text-gray-500">Foods</th>
              <th className="text-left p-5 text-gray-500">Actions</th>
            </tr>

          </thead>

          <tbody>

            {categories.map((category) => (
              <tr
                key={category.id}
                className="border-t hover:bg-gray-50 transition"
              >

                {/* ID */}
                <td className="p-5 font-semibold">
                  #{String(category.id)}
                </td>

                {/* NAME */}
                <td className="p-5">
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-500 flex items-center justify-center">
                      <FolderKanban size={18} />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {category.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Food category
                      </p>
                    </div>

                  </div>
                </td>

                {/* FOODS */}
                <td className="p-5 font-semibold text-gray-700">
                  {Number((category as any)?.totalFoods ?? 0)} Foods
                </td>

                {/* ACTIONS */}
                <td className="p-5">

                  <div className="flex items-center gap-3">

                    <Link
                      href={`/admin/categories/${String(category.id)}`}
                      className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      onClick={() => {
                        if (confirm("Delete this category?")) {
                          deleteCategory(category.id);
                        }
                      }}
                      className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
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