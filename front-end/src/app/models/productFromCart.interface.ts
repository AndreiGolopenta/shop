import { Product } from './product.interface';

export interface ProductFromCart {
  [id: string]: {
    product: Product;
    size: string;
    quantity: number;
  };
}

export interface TableData {
  product: Product;
  size: string;
  quantity: number;
}
