import { Category } from '@/queries/categories/category.types';

export interface CategoriesProps {
  categories: Category[];
  openCategory?: Category;
  selectedSubCategory?: string | null;
  setOpenCategory?: (category: Category | null) => void;
  setSelectedSubCategory?: (subCategoryId: string | null) => void;
  categoryIsLoading?:boolean
}
