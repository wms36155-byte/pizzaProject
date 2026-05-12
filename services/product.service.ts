const BASE_URL =
  "https://68f11ffe0b966ad50035753d.mockapi.io/products";

// Barcha mahsulotlar
export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

// Category bo‘yicha
export const getProductsByCategory = async (categoryId: string) => {
  const res = await fetch(`${BASE_URL}?categoryId=${categoryId}`);
  return res.json();
};

// CREATE
export const createFood = async (data: {
  name: string;
  price: string | number;
  category: string;
}) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: data.name,
      price: String(data.price),
      category: data.category,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to create product");
  }

  return res.json();
};