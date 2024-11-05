import { CartProduct, GetCartResponse } from "@/queries/cart/cart.types";

export interface CartState {
  products: CartProduct[];
  totalPrice: number;
  setCart: (cartResponse: GetCartResponse) => void;
}