export interface SubCategory {
  _id?: string | null;
  title: string;
}

export interface Category {
  _id?: string;
  title: string;
  imageUrl?: string;
  slug: string;
  subCategories?: SubCategory[];
}

export interface CategoryResponse {
  status: string;
  data: Category[];
}
