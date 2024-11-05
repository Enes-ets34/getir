import { CartProduct } from '@/queries/cart/cart.types';

export interface CartProps {
  products: CartProduct[];
  totalPrice: number;
}
