const BASE_URL =
  "https://68f11ffe0b966ad50035753d.mockapi.io/categories";

export const getCategories = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};