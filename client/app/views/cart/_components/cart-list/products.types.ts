import { CartProduct } from '@/queries/cart/cart.types';
import { User } from '@/queries/users/user.types';

export interface ProductsProps {
  user?: User;
  products?: CartProduct[];
  increment?: (productId: string) => void;
  decrement?: (productId: string) => void;
  deleteCart?: () => void
  isMobileScreen?: boolean;
}
