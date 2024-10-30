import { create } from 'zustand';
import { CategoryState } from './categoryStore.types';

export const useCategoryStore = create<CategoryState>(set => ({
  categories: [],
  setCategories: categories => set({ categories }),
}));
