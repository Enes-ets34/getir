import { create } from 'zustand';
import { ProductState } from './productStore.types';

export const useProductStore = create<ProductState>(set => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
