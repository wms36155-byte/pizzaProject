const ORDER_URL =
  "https://691c54f83aaeed735c906ecf.mockapi.io/orders";

export const createOrder = async (data: any) => {
  const res = await fetch(ORDER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getOrders = async () => {
  const res = await fetch(ORDER_URL);
  return res.json();
};