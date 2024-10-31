import { SubCategoryProducts } from "@/store/product/productStore.types";

export interface ProductsProps {
  products: SubCategoryProducts[];
  selectedSubCategory?: string

}
