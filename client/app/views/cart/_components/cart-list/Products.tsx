'use client';

import React from 'react';
import { ProductsProps } from './products.types';

import Icon from '@/components/icon/Icon';
import { CartProduct } from '@/queries/cart/cart.types';
import CartItem from '../cart-item/CartItem';
import { productsViewStyles } from './products.styles';
const Products: React.FC<ProductsProps> = ({
  products,
  increment,
  decrement,
  deleteCart,
}) => {
  return (
      <div className={productsViewStyles.container}>
        <div className={productsViewStyles?.cardTitle}>
          <p className='font-semibold  text-black'>Sepetim</p>
          <div
            onClick={deleteCart}
            className={productsViewStyles.deleteButtonWrapper}
          >
            <Icon source={'delete_1'} size={{ width: 18 }} />
            <p className={productsViewStyles.deleteText}>Sepeti temizle</p>
          </div>
        </div>
        <div className={productsViewStyles.productListWrapper}>
          {products &&
            products.map((item: CartProduct) => (
              <CartItem
                key={item._id}
                item={item}
                increment={increment}
                decrement={decrement}
                deleteCart={deleteCart}
              />
            ))}
        </div>
      </div>
  );
};

export default Products;
