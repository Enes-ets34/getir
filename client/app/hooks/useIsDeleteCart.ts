import { CartProduct } from '@/queries/cart/cart.types';
import { Product } from '@/queries/products/product.types';
import { useMemo } from 'react';

export const useIsDeleteCart = (products: (CartProduct | Product)[] | undefined, itemId: string) => {
  return useMemo(() => {
    return (
      products?.length === 1 &&
      products?.some((item) => {
        if ('product' in item) {
          return item.product?._id === itemId && item.quantity === 1;
        }
        return item._id === itemId && (item as CartProduct).quantity === 1;
      })
    );
  }, [products, itemId]);
};
