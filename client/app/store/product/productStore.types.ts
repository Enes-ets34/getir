import { Product } from "@/queries/products/product.types";

export interface SubCategoryProducts {
  subCategoryId: string;
  subCategory: string;
  products: Product[];
}

export interface ProductState {
  products: SubCategoryProducts[];
  setProducts: (products: SubCategoryProducts[]) => void;
}