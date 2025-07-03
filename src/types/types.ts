interface Product {
  id: number;
  name: string;
  code: string; 
  price: number;
  image: string[];
  alt: string;
  colors: string[];
  size?: string[];
  gender?: string;
  category?: string;
  subCategory?: string;
  description?: string;

  isFeatured?: boolean;
  isBestSeller?: boolean;
  createdAt?: Date;
}

interface CartItem {
  id: number;
  code: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  image: string;
  size: string;
  color: string;
}

export type { Product , CartItem};
