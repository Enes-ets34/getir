'use client';

import { useCampaignsQuery } from '@/queries/campaigns/campaign.query';
import { useCategoriesQuery } from '@/queries/categories/category.query';
import { Category } from '@/queries/categories/category.types';
import { useAuthStore } from '@/store/auth';
import { useCampaignStore } from '@/store/campaigns';
import { useCategoryStore } from '@/store/categories';
import CategoriesView from '@/views/categories/CategoriesView';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CategoriesScreen() {
  const searchParams = useSearchParams();
  const key = searchParams?.get('key');
  const [openCategory, setOpenCategory] = useState<Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );
  const { setCampaigns, campaigns } = useCampaignStore();
  const { setCategories, categories } = useCategoryStore();
  const { user } = useAuthStore();
  const {
    data: campaignsQueryData,
    isSuccess: campaignQueryIsSuccess,
    isError: campaignQueryIsError,
    refetch: campaignRefetch,
  } = useCampaignsQuery();
  const {
    data: categoriesQueryData,
    isSuccess: categoryQueryIsSuccess,
    isLoading: categoryIsLoading,
  } = useCategoriesQuery();

  useEffect(() => {
    if (openCategory?.subCategories && setSelectedSubCategory) {
      setSelectedSubCategory(openCategory?.subCategories[0]?._id || null);
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
  }, [
    campaignQueryIsSuccess,
    campaignQueryIsError,
    categoryQueryIsSuccess,
    user,
  ]);
  return (
    <CategoriesView
      campaigns={campaigns}
      categories={categories}
      categoryIsLoading={categoryIsLoading}
      openCategory={openCategory as Category}
      selectedSubCategory={(selectedSubCategory as string) || ''}
      setOpenCategory={setOpenCategory}
      setSelectedSubCategory={setSelectedSubCategory}
    />
  );
}
