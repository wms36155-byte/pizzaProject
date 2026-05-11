"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FolderKanban,
  Pizza,
  ShoppingCart,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: FolderKanban,
  },
  {
    title: "Foods",
    href: "/admin/foods",
    icon: Pizza,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-280px min-h-screen bg-[#0F172A] text-white border-r border-white/10 flex flex-col justify-between">

      <div>

        {/* LOGO */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-3xl font-black tracking-wide">
            🍕 Pizza Admin
          </h1>

          <p className="text-sm text-gray-400 mt-2">
            Restaurant Management Panel
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="p-4 space-y-2">

          {links.map((link) => {

            const Icon = link.icon;

            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 font-medium group
                  
                  ${
                    active
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }
                `}
              >

                <Icon
                  size={20}
                  className={`
                    transition
                    ${
                      active
                        ? "scale-110"
                        : "group-hover:scale-110"
                    }
                  `}
                />

                <span>{link.title}</span>

              </Link>
            );
          })}
        </nav>
      </div>

      {/* USER CARD */}
      <div className="p-4 border-t border-white/10">

        <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">

          <p className="text-sm text-gray-400">
            Logged in as
          </p>

          <h3 className="font-semibold mt-1">
            Admin User
          </h3>

          <button className="w-full mt-4 bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl font-medium">
            Logout
          </button>

        </div>
      </div>

    </aside>
  );
}