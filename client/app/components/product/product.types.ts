import { Product } from '@/queries/products/product.types';
import { User } from '@/queries/users/user.types';

export interface ProductProps {
  product: Product;
  user?:User
}
