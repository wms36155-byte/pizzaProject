"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (data: {
    name: string;
    email: string;
    address: string;
    notes: string;
  }) => void;
}

export default function CheckoutModal({
  open,
  onClose,
  onConfirm,
}: CheckoutModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    notes: "",
  });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onConfirm(form);

    setForm({
      name: "",
      email: "",
      address: "",
      notes: "",
    });
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      />

      {/* MODAL */}
      <div className="fixed top-1/2 left-1/2 z-50 w-[95%] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Checkout
          </h2>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="w-full h-12 px-4 rounded-xl border outline-none focus:border-orange-500"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="w-full h-12 px-4 rounded-xl border outline-none focus:border-orange-500"
            required
          />

          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            type="text"
            placeholder="Delivery Address"
            className="w-full h-12 px-4 rounded-xl border outline-none focus:border-orange-500"
            required
          />

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Order Notes..."
            rows={4}
            className="w-full p-4 rounded-xl border outline-none focus:border-orange-500 resize-none"
          />

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
          >
            Confirm Order
          </button>

        </form>
      </div>
    </>
  );
}