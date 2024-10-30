import { Category } from '@/queries/categories/category.types';

export interface CategoryState {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}
