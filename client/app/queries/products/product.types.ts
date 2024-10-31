export interface Product {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  imageUrl?: string;
  category: string;
  subCategory: string;
  slug: string;
  price?: number;
  discountedPrice?: number;
}

export interface ProductResponse {
  status: string;
  data: Product[];
}
export interface GetSingleProductResponse {
  status: string;
  data: Product;
}
export interface FilterProductResponse {
  status: string;
  data: {
    subCategoryId: string;
    subCategory: string;
    products: Product[];
  };
}
