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
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [loading, setLoading] = useState(false);

  const fetchProducts = async (categoryId?: string) => {
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

          {/* TOP BAR */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* CATEGORY FILTER */}
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onSelect={handleCategory}
            />

            {/* SORT DROPDOWN */}
            <SortDropdown />

          </div>

          {/* TITLE + COUNT ROW */}
          <div className="flex items-center justify-between mt-10 mb-8">

            <h1 className="text-5xl font-black">
              Все пиццы
            </h1>

          </div>

          {/* PRODUCTS */}
          {loading ? (
            <div className="text-center py-20 text-lg text-zinc-500">
              Loading pizzas...
            </div>
          ) : (
            <ProductList products={products} />
          )}

        </div>

      </Container>

    </main>
  );
}