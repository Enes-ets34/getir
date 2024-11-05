'use client';

import React from 'react';
import CampaignBanner from '@/components/campaign-banner/CampaignBanner';
import Categories from '@/components/categories-widget/Categories';
import { CategoriesViewProps } from './categoriesView.types';
import Products from '@/components/products-widget/Products';
import { SubCategoryProducts } from '@/store/product/productStore.types';
import Cart from '@/components/cart-widget/Cart';

export default function CategoriesView({
  campaigns,
  categories,
  openCategory,
  selectedSubCategory,
  setOpenCategory,
  setSelectedSubCategory,
  categoryIsLoading,
  products,
  cartProducts,
  totalPrice,
}: CategoriesViewProps) {
  return (
    <div className='flex flex-col sm:gap-8'>
      <CampaignBanner campaigns={campaigns} />
      <div className='flex sm:flex-row justify-start flex-col items-start sm:gap-12 lg:gap-4'>
        <Categories
          categories={categories}
          openCategory={openCategory}
          selectedSubCategory={selectedSubCategory as string}
          setOpenCategory={setOpenCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          categoryIsLoading={categoryIsLoading}
        />
        <Products
          products={products as SubCategoryProducts[]}
          selectedSubCategory={(selectedSubCategory as string) || ''}
        />
        <Cart
          products={cartProducts || []}
          totalPrice={totalPrice || 0}
        />
      </div>
    </div>
  );
}
