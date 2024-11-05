'use client';

import React, { useEffect } from 'react';
import { ProductProps } from './product.types';
import Icon from '../icon/Icon';
import Colors from '@/theme/Colors';
import Image from '../image/Image';
import { productCardStyles } from './product.styles';
import Link from 'next/link';
import { useCartStore } from '@/store/cart';
import Counter from '../counter/Counter';
import {
  useCreateCartMutation,
  useDeleteCartMutation,
  useUpdateCartMutation,
} from '@/queries/cart/cart.mutation';
import { useIsDeleteCart } from '@/hooks/useIsDeleteCart';

const ProductCard: React.FC<ProductProps> = ({
  product,
  user,
}) => {
  const { products } = useCartStore();
  const { increment, decrement } = useUpdateCartMutation();
  const createCartMutation = useCreateCartMutation();
  const { deleteCart } = useDeleteCartMutation();
  const isDeleteCart = useIsDeleteCart(products, product._id);
  const avaliableProduct = products?.find(
    item => item?.product?._id === product?._id
  );
  const handleIncrease = () => {
    if (avaliableProduct) {
      increment(avaliableProduct.product._id);
    } else {
      increment(product._id);
    }
  };

  const handleDecrease = () => {
    if (avaliableProduct) {
      decrement(avaliableProduct.product._id);
      if (isDeleteCart) {
        deleteCart();
      }
    }
  };

  return (
    <div className={productCardStyles.wrapper}>
      {!!avaliableProduct && user ? (
        <div className='absolute top-1 right-1'>
          <Counter
            quantity={avaliableProduct?.quantity}
            direction='vertical'
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </div>
      ) : (
        <button
          onClick={() => {
            if (products?.length > 0) {

              handleIncrease();
            } else {
              createCartMutation.mutate({
                products: [
                  {
                    product: product?._id,
                    quantity: 1,
                  },
                ],
              });
            }
          }}
          className={productCardStyles.addToCartButton}
        >
          <Icon
            size={{ width: 10 }}
            color={Colors.primary}
            className=''
            source={'plus'}
          />
        </button>
      )}
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
          <p className={productCardStyles.price}>₺{product?.price}</p>
        </div>
        <p className={productCardStyles.title}>{product?.title}</p>
        <p className={productCardStyles.description}>{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
