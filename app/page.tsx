"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/shared/Navbar";
import Container from "@/components/shared/Container";

import CategoryFilter from "@/components/home/CategoryFilter";
import ProductList from "@/components/home/ProductList";
import SortDropdown from "@/components/home/SortDropdown";

import { getCategories } from "@/services/category.servise";
import {
  getProducts,
  getProductsByCategory,
} from "@/services/product.service";

export default function HomePage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 PRODUCTS
  const fetchProducts = async (categoryId?: string) => {
    try {
      setLoading(true);

      const res = categoryId
        ? await getProductsByCategory(categoryId)
        : await getProducts();

      const data = res?.data || res;

      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 CATEGORIES
  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      const data = res?.data || res;

      setCategories(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
      setCategories([]);
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

          {/* TOP BAR */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onSelect={handleCategory}
            />

            <SortDropdown />

          </div>

          {/* TITLE */}
          <h1 className="text-5xl font-black mt-10 mb-8">
            Все пиццы 🍕
          </h1>

          {/* CONTENT */}
          {loading ? (
            <div className="flex justify-center py-20 text-gray-500">
              Loading pizzas...
            </div>
          ) : products.length === 0 ? (
            <div className="flex justify-center py-20 text-gray-400">
              No pizzas found 😢
            </div>
          ) : (
            <ProductList products={products} />
          )}

        </div>

      </Container>

    </main>
  );
}