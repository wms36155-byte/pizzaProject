export default function AdminDashboard() {
  return (
    <div>

      <h1 className="text-3xl font-black mb-6">
        Dashboard 📊
      </h1>

      <div className="grid grid-cols-3 gap-5">

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Foods</p>
          <h2 className="text-3xl font-bold">12</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Categories</p>
          <h2 className="text-3xl font-bold">5</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Orders</p>
          <h2 className="text-3xl font-bold">20</h2>
        </div>

      </div>

    </div>
  );
}