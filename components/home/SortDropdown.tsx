"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const sortItems = [
  "популярности",
  "по цене",
  "по алфавиту",
];

export default function SortDropdown() {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] =
    useState("популярности");

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleClickOutside = (
      event: MouseEvent
    ) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
    >

      {/* TOP */}

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          flex
          items-center
          gap-2
          font-bold
          text-[18px]
        "
      >

        <span>
          Сортировка по:
        </span>

        <span
          className="
            text-orange-500
            border-b
            border-dashed
            border-orange-500
            leading-none
          "
        >
          {selected}
        </span>

        <ChevronDown
          size={18}
          className={`
            text-orange-500
            transition
            ${
              open
                ? "rotate-180"
                : ""
            }
          `}
        />

      </button>

      {/* DROPDOWN */}

      {open && (

        <div
          className="
            absolute
            right-0
            top-10
            w-220px
            bg-white
            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
            rounded-xl
            overflow-hidden
            z-50
            animate-in
            fade-in
            zoom-in-95
          "
        >

          {sortItems.map((item) => (

            <button
              key={item}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className={`
                w-full
                text-left
                px-5
                py-4
                text-[17px]
                transition

                ${
                  selected === item
                    ? `
                      bg-zinc-700
                      text-white
                      font-semibold
                    `
                    : `
                      hover:bg-zinc-100
                    `
                }
              `}
            >
              {item}
            </button>

          ))}

        </div>

      )}

    </div>
  );
}