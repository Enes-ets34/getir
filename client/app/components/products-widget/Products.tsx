'use client';

import React, { useEffect, useRef } from 'react';
import { ProductsProps } from './products.types';
import ProductCard from '../product/ProductCard';
import { productsStyles } from './products.styles';

const Products: React.FC<ProductsProps> = ({
  products,
  selectedSubCategory,
}) => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (selectedSubCategory && sectionRefs.current[selectedSubCategory]) {
      const element = sectionRefs.current[selectedSubCategory];
      const yOffset = -140;
      const yPosition =
        element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  }, [selectedSubCategory]);

  return (
    <div className={productsStyles.wrapper}>
      {products?.map((item, index) => (
        <div
          key={index}
          ref={el => {
            sectionRefs.current[item.subCategoryId] = el;
          }}
          className={productsStyles.section}
        >
          <span className={productsStyles.subCategoryTitle}>
            {item?.subCategory}
          </span>
          <div className={productsStyles.flexWrap}>
            {item?.products?.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
