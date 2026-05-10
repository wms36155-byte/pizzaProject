"use client";

import Image from "next/image";

import Navbar from "@/components/shared/Navbar";
import Container from "@/components/shared/Container";

import { useCartStore } from "@/store/cart.store";

export default function CartPage() {

  const {
    items,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCartStore();

  return (
    <main className="min-h-screen bg-zinc-50">

      <Navbar />

      <Container>

        <div className="py-10">

          <h1 className="text-4xl font-bold mb-10">
            Cart
          </h1>

          {items.length === 0 ? (

            <div className="bg-white rounded-3xl p-10 text-center">
              Cart is empty
            </div>

          ) : (

            <div className="space-y-5">

              {items.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-5 flex flex-col md:flex-row items-center justify-between gap-5"
                >

                  <div className="flex items-center gap-5">

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                    />

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-zinc-500">
                        {item.price} ₽
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="w-10 h-10 rounded-full border"
                    >
                      -
                    </button>

                    <span className="font-bold text-xl">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        addToCart(item)
                      }
                      className="w-10 h-10 rounded-full border"
                    >
                      +
                    </button>

                  </div>

                  <div className="flex items-center gap-5">

                    <p className="text-2xl font-bold">
                      {item.price * item.quantity} ₽
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="text-red-500"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

              <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-5">

                <h2 className="text-3xl font-bold">
                  Total: {totalPrice()} ₽
                </h2>

                <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-full font-semibold">
                  Checkout
                </button>

              </div>

            </div>

          )}

        </div>

      </Container>

    </main>
  );
}