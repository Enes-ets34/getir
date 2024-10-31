'use client';

import React from 'react';
import { ProductProps } from './product.types';
import Icon from '../icon/Icon';
import Colors from '@/theme/Colors';
import Image from '../image/Image';
import { productCardStyles } from './product.styles';
import Link from 'next/link';

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className={productCardStyles.wrapper}>
      <button className={productCardStyles.addToCartButton}>
        <Icon
          size={{ width: 10 }}
          color={Colors.primary}
          className=''
          source={'plus'}
        />
      </button>
      <div className={productCardStyles.body}>
        <Link href={`products/${product?.slug}`}>
          <Image src={product?.imageUrl as string} className='w-28 h-28' />
        </Link>
        <div className='flex items-center gap-2'>
          {product?.discountedPrice && (
            <p className='text-grayStorm line-through'>
              ₺{product?.discountedPrice}
            </p>
          )}
          <p className='text-primary font-semibold'>₺{product?.price}</p>
        </div>
        <p className='text-black font-semibold text-center'>{product?.title}</p>
        <p className='text-grayStorm '>{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
