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