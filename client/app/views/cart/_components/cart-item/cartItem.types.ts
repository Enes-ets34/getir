import { CartProduct } from '@/queries/cart/cart.types';

export interface CartItemProps {
  item?: CartProduct;
  increment?: (productId: string) => void;
  decrement?: (productId: string) => void;
  deleteCart?: () => void
}
