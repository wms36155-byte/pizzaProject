"use client";

interface Props {
  categories: any[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex gap-3 flex-wrap">

      <button
        onClick={() => onSelect("")}
        className={`
          px-6 py-3 rounded-full font-semibold transition
          ${
            selected === ""
              ? "bg-black text-white"
              : "bg-zinc-100 hover:bg-zinc-200"
          }
        `}
      >
        Все
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`
            px-6 py-3 rounded-full font-semibold transition
            ${
              selected === category.id
                ? "bg-black text-white"
                : "bg-zinc-100 hover:bg-zinc-200"
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}