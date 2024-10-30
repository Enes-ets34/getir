'use client';

import React from 'react';
import { CategoriesProps } from './categories.types';
import Image from '../image/Image';
import Icon from '../icon/Icon';
import { Category, SubCategory } from '@/queries/categories/category.types';
import { categoriesStyles } from './categories.styles';
import { useRouter } from 'next/navigation';

const Categories: React.FC<CategoriesProps> = ({
  categories,
  openCategory,
  selectedSubCategory,
  setOpenCategory,
  setSelectedSubCategory,
}) => {
  const router = useRouter();
  const toggleCategory = (category: Category) => {
    if (openCategory?._id === category?._id) {
      setOpenCategory && setOpenCategory(null);
    } else {
      setOpenCategory && setOpenCategory(category);
      router?.replace(`/categories?key=${category?.slug}`);
    }
  };
  if (categories?.length === 0) return null;

  return (
    <div className={categoriesStyles.wrapper}>
      <h3 className='font-semibold hidden sm:block text-black'>Kategoriler</h3>
      <ul className={categoriesStyles.list}>
        {categories?.map((category: Category) => (
          <React.Fragment key={category?._id}>
            <li
              className={`flex group cursor-pointer ${
                openCategory?._id === category?._id
                  ? 'bg-primaryLight'
                  : 'bg-white'
              } ${categoriesStyles.categoryItem}`}
              onClick={() => toggleCategory(category)}
            >
              <div className='flex gap-2 items-center'>
                <Image
                  src={category?.imageUrl || ''}
                  className={categoriesStyles.image}
                  objectFit='contain'
                />
                <span className='font-semibold'>{category?.title}</span>
              </div>
              <Icon
                source={'chevron'}
                size={{ width: 10, height: 10 }}
                className={`transform  ${
                  openCategory?._id === category?._id
                    ? '-rotate-90 fill-primary'
                    : 'rotate-90'
                }`}
                color='gray'
              />
            </li>
            {openCategory?._id === category?._id && (
              <ul>
                {category.subCategories?.map((subCategory: SubCategory) => (
                  <li
                    key={subCategory?._id}
                    onClick={() =>
                      setSelectedSubCategory &&
                      setSelectedSubCategory(subCategory?._id || null)
                    }
                    className={categoriesStyles.subCategory}
                  >
                    <span className='font-semibold text-grayMid '>
                      {subCategory?.title}
                    </span>
                    {selectedSubCategory === subCategory?._id && (
                      <Icon
                        source={'chevron'}
                        size={{ width: 10, height: 10 }}
                        className='fill-primary'
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
