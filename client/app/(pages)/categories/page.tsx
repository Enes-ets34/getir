'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { useCampaignsQuery } from '@/queries/campaigns/campaign.query';
import { useCategoriesQuery } from '@/queries/categories/category.query';
import { useFilterProductsQuery } from '@/queries/products/product.query';

import { SubCategoryProducts } from '@/store/product/productStore.types';
import { Category } from '@/queries/categories/category.types';

import { useAuthStore } from '@/store/auth';
import { useCampaignStore } from '@/store/campaigns';
import { useProductStore } from '@/store/product';
import { useCategoryStore } from '@/store/categories';
import { useLoadingStore } from '@/store/loading';
import { useCartStore } from '@/store/cart';

import CategoriesView from '@/views/categories/CategoriesView';

export default function CategoriesScreen() {
  const searchParams = useSearchParams();
  const key = searchParams?.get('key');
  const [openCategory, setOpenCategory] = useState<Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );

  const { setCampaigns, campaigns } = useCampaignStore();
  const { setCategories, categories } = useCategoryStore();
  const { setProducts, products } = useProductStore();
  const { showLoading, hideLoading } = useLoadingStore();
  const { totalPrice } = useCartStore();
  const cartProducts = useCartStore(state => state.products);

  const { user } = useAuthStore();

  const {
    data: campaignsQueryData,
    isSuccess: campaignQueryIsSuccess,
    isError: campaignQueryIsError,
    refetch: campaignRefetch,
    isLoading: campaignQueryIsLoading,
  } = useCampaignsQuery();
  const {
    data: productsQueryData,
    isSuccess: productQueryIsSuccess,
    isLoading: productIsLoading,
    refetch: productQueryRefetch,
  } = useFilterProductsQuery(openCategory?._id as string);
  const {
    data: categoriesQueryData,
    isSuccess: categoryQueryIsSuccess,
    isLoading: categoryIsLoading,
  } = useCategoriesQuery();

  useEffect(() => {
    if (openCategory?.subCategories && setSelectedSubCategory) {
      setSelectedSubCategory(openCategory?.subCategories[0]?._id || null);
      productQueryRefetch();
      if (Array.isArray(productsQueryData?.data)) {
        setProducts(productsQueryData?.data);
      }
    }
  }, [openCategory, setSelectedSubCategory, key]);
  useEffect(() => {
    if (key && categories) {
      if (key) {
        setOpenCategory(
          categories?.find(
            (category: Category) => category?.slug === key
          ) as Category
        );
      }
      setSelectedSubCategory(
        categories?.find((category: Category) => category?.slug === key)
          ?.subCategories?.[0]?._id || null
      );
    } else {
      setOpenCategory(categories[0]);
    }
  }, [key, categories]);

  useEffect(() => {
    if (user) {
      campaignRefetch();
      if (campaignQueryIsSuccess) {
        setCampaigns(campaignsQueryData.data);
      }
    } else {
      setCampaigns([]);
    }
    if (categoryQueryIsSuccess) {
      setCategories(categoriesQueryData.data);
    }
    if (productQueryIsSuccess && Array.isArray(productsQueryData?.data)) {
      setProducts(productsQueryData.data);
    }
  }, [
    campaignQueryIsSuccess,
    campaignQueryIsError,
    categoryQueryIsSuccess,
    productQueryIsSuccess,
    user,
  ]);
  useEffect(() => {
    if (
      (user && campaignQueryIsLoading) ||
      productIsLoading ||
      categoryIsLoading
    ) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [categoryIsLoading, campaignQueryIsLoading, productIsLoading]);

  return (
    <CategoriesView
      campaigns={campaigns}
      categories={categories}
      products={(products as SubCategoryProducts[]) || []}
      categoryIsLoading={categoryIsLoading}
      openCategory={openCategory as Category}
      selectedSubCategory={(selectedSubCategory as string) || ''}
      setOpenCategory={setOpenCategory}
      setSelectedSubCategory={setSelectedSubCategory}
      cartProducts={cartProducts}
      totalPrice={totalPrice}
    />
  );
}
