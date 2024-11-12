import { Address } from '@/queries/address/address.types';
import { CartProduct } from '@/queries/cart/cart.types';
import { User } from '@/queries/users/user.types';

export interface CartProps {
  user?: User;
  products?: CartProduct[];
  increment?: (productId: string) => void;
  decrement?: (productId: string) => void;
  deleteCart?: () => void;
  isMobileScreen?: boolean;
  totalPrice?: number;
  selectedAddress: Address;
}
