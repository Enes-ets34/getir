import { create } from 'zustand';
import { CartState } from './cartStore.types';

export const useCartStore = create<CartState>(set => ({
  products: [],
  totalPrice: 0,

  setCart: cartResponse => {
    set({
      products: cartResponse?.products,
      totalPrice: cartResponse?.totalPrice,
    });
  },
}));
