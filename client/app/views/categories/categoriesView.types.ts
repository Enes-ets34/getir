import { Campaign } from '@/queries/campaigns/campaign.types';
import { CartProduct } from '@/queries/cart/cart.types';
import { Category } from '@/queries/categories/category.types';
import { SubCategoryProducts } from '@/store/product/productStore.types';

export interface CategoriesViewProps {
  campaigns: Campaign[];
  categories: Category[];
  products?: SubCategoryProducts[];
  openCategory?: Category;
  selectedSubCategory?: string;
  setOpenCategory?: (category: Category | null) => void;
  setSelectedSubCategory?: (subCategoryId: string | null) => void;
  categoryIsLoading?: boolean;
  cartProducts?: CartProduct[];
  totalPrice?: number;
}
