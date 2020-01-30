import { Product } from './product.interface';

export interface OrderRequest {
  orderContent: ProductFromOrderId[];
  date: number;
  total: number;
}

export interface ProductFromOrderId {
  product: string;
  size: string;
  quantity: number;
}

export interface ProductFromOrder {
  product: Product;
  size: string;
  quantity: number;
}

export interface OrderResponse {
  message: string;
}


export interface OrderContent {
  _id: string;
  product: {
    _id: string;
    name: string;
    image: string;
  },
  size: string;
  quantity: number;
}

export interface Order {
  _id: string;
  orderBy: string;
  orderContent: OrderContent[],
  date: number;
  total: number;
}