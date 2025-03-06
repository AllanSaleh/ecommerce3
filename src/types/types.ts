export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  createAt: Date;
  updatedAt: Date;
  quantity?: number;
}

export type Category = string;