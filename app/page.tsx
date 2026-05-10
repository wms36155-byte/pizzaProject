"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/shared/Navbar";
import Container from "@/components/shared/Container";

import CategoryFilter from "@/components/home/CategoryFilter";
import ProductList from "@/components/home/ProductList";

import { getCategories } from "@/services/category.servise";

import {
  getProducts,
  getProductsByCategory,
} from "@/services/product.service";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [loading, setLoading] = useState(false);

  const fetchProducts = async (
    categoryId?: string
  ) => {
    try {
      setLoading(true);

      const data = categoryId
        ? await getProductsByCategory(categoryId)
        : await getProducts();

      setProducts(data);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();

      setCategories(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();

  }, []);

  const handleCategory = (id: string) => {
    setSelectedCategory(id);

    fetchProducts(id);
  };

  return (
    <main className="min-h-screen bg-[#F8F8F8]">

      <Navbar />

      <Container>

        <div className="py-10">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onSelect={handleCategory}
            />

            <div className="font-semibold">
              Сортировка:{" "}
              <span className="text-orange-500">
                популярности
              </span>
            </div>

          </div>

          <h1 className="text-4xl font-bold mt-12 mb-10">
            Все пиццы
          </h1>

          {loading ? (
            <div className="text-center py-20">
              Loading...
            </div>
          ) : (
            <ProductList products={products} />
          )}

        </div>

      </Container>

    </main>
  );
}