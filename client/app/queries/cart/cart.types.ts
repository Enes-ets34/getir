import { Product } from '../products/product.types';

export interface CartProduct extends Product {
  quantity: number;
  _id: string;
  product: CartProduct;
}

export interface GetCartResponse {
  _id: string;
  userId: string;
  products: CartProduct[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}
export interface UpdateCartRequest {
  products: {
    product: string;
    quantity: number;
  }[];
}
export interface CreateCartRequest {
  products: {
    product: string;
    quantity: number;
  }[];
}
export interface CartResponse {
  status?: string;
  data?: GetCartResponse;
}
export interface UpdateCartResponse extends CartResponse {}
export interface CreateCartResponse extends CartResponse {}
export interface DeleteCartResponse {
  message?: string;
}
