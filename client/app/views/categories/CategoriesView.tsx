'use client'

import React from 'react';
import CampaignBanner from '@/components/campaign-banner/CampaignBanner';
import Categories from '@/components/categories-widget/Categories';
import { CategoriesViewProps } from './categoriesView.types';

export default function CategoriesView({
  campaigns,
  categories,
  openCategory,
  selectedSubCategory,
  setOpenCategory,
  setSelectedSubCategory,
  categoryIsLoading
}: CategoriesViewProps) {
  return (
    <div className='flex flex-col sm:gap-8'>
      <CampaignBanner campaigns={campaigns} />
      <div className='flex sm:flex-row flex-col items-start gap-4'>
        <Categories
          categories={categories}
          openCategory={openCategory}
          selectedSubCategory={selectedSubCategory as string}
          setOpenCategory={setOpenCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          categoryIsLoading={categoryIsLoading}
        />
        <div className='w-1/2'>
          {Array.from({ length: 128 })?.map((item, index) => (
            <p key={index} className='p-5 bg-sky-200'>
              product item
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
