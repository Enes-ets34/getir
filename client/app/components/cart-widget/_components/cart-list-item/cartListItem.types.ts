import { CartProduct } from '@/queries/cart/cart.types';

export interface CartItemProps {
  item?: CartProduct;
  className?:string;
  deleteCart?:()=>void;
  products?:CartProduct[]
}
