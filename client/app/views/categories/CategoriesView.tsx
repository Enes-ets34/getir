import CampaignBanner from '@/components/campaign-banner/CampaignBanner';
import { CategoriesViewProps } from './categoriesView.types';
import Categories from '@/components/categories-widget/Categories';
import React, { useState } from 'react';

export default function CategoriesView({
  campaigns,
  categories,
  openCategory,
  selectedSubCategory,
  setOpenCategory,
  setSelectedSubCategory,
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
