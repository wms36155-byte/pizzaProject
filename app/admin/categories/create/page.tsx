"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FolderKanban, Loader2 } from "lucide-react";

export default function CreateCategoryPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    setLoading(true);

    try {
      // 👉 API ga yuborasan (keyin backend ulaymiz)
      await new Promise((res) => setTimeout(res, 800));

      console.log("New Category:", name);

      router.push("/admin/categories");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">

      {/* HEADER */}
      <div className="mb-8">

        <h1 className="text-4xl font-black text-gray-900">
          Add Category
        </h1>

        <p className="text-gray-500 mt-2">
          Create new food category
        </p>

      </div>

      {/* FORM CARD */}
      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          rounded-3xl
          border
          border-gray-100
          shadow-sm
          p-8
          space-y-6
        "
      >

        {/* ICON */}
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

        {/* INPUT */}
        <div>

          <label className="text-sm text-gray-600">
            Category name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="e.g Pizza, Burger..."
            className="
              w-full
              mt-2
              px-4
              py-3
              border
              border-gray-200
              rounded-2xl
              outline-none
              focus:ring-2
              focus:ring-purple-300
              transition
            "
          />

        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">

          <button
            type="button"
            onClick={() => router.back()}
            className="
              flex-1
              py-3
              rounded-2xl
              border
              border-gray-200
              hover:bg-gray-50
              transition
            "
          >
            Cancel
          </button>

          <button
            disabled={loading}
            className="
              flex-1
              py-3
              rounded-2xl
              bg-purple-600
              text-white
              hover:bg-purple-700
              transition
              flex
              items-center
              justify-center
              gap-2
              disabled:opacity-60
            "
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Saving...
              </>
            ) : (
              "Save Category"
            )}
          </button>

        </div>

      </form>

    </div>
  );
}