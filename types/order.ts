export interface Order {
  id?: string;

  customerName: string;
  phone: string;
  address: string;

  items: any[];

  totalPrice: number;

  status: "pending" | "preparing" | "delivered";
}