export interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  categoryId: string;
  sizes?: number[];
  doughTypes?: string[];
}