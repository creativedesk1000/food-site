export type Category = {
  id: string;
  name: string;
  image: string;
  slug: string;
};

export type FoodItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isPopular: boolean;
  ingredients?: string[];
  sizes?: { name: string; price: number }[];
  extras?: { name: string; price: number }[];
};

export type CartItem = FoodItem & {
  quantity: number;
  selectedSize?: string;
  selectedExtras?: string[];
  totalPrice: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
};

export type Address = {
  id: string;
  label: string; // Home, Office, etc.
  addressLine: string;
  lat: number;
  lng: number;
};

export type OrderStatus = 'received' | 'preparing' | 'on-the-way' | 'delivered';

export type Order = {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
  address: Address;
};
