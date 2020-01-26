import { User } from './user.interface';
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

export interface Order {
  _id: string;
  orderBy: User;
  orderContent: ProductFromOrder[];
  date: number;
  total: number;
}

export interface OrderResponse {
  message: string;
}
