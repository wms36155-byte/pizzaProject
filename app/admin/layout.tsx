import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-zinc-900 text-white p-6">

        <h1 className="text-2xl font-black mb-8">
          Pizza Admin
        </h1>

        <nav className="flex flex-col gap-4">

          <Link href="/admin">
            Dashboard
          </Link>

          <Link href="/admin/categories">
            Categories
          </Link>

          <Link href="/admin/foods">
            Foods
          </Link>

          <Link href="/admin/orders">
            Orders
          </Link>

        </nav>

      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>

    </div>
  );
}