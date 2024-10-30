import { Campaign } from '@/queries/campaigns/campaign.types';
import { Category } from '@/queries/categories/category.types';

export interface CategoriesViewProps {
  campaigns: Campaign[];
  categories: Category[];
  openCategory?: Category;
  selectedSubCategory?: string;
  setOpenCategory?: (category: Category | null) => void;
  setSelectedSubCategory?: (subCategoryId: string | null) => void;
  categoryIsLoading?:boolean
}
