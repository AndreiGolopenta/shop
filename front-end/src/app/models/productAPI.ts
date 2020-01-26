import { Product } from './product.interface';

export interface ProductAPI {
  stock: number;
  data: Product[]
}