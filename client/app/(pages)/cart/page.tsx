'use client';
import React, { useEffect } from 'react';
import { useAuthStore } from '@/store/auth';
import SkeletonLoader from '@/components/skeleton-loader/SkeletonLoader';
import CartView from '@/views/cart/CartView';
import { useCartStore } from '@/store/cart';
import useNavigation from '@/utils/handleNavigation';
import {
  useDeleteCartMutation,
  useUpdateCartMutation,
} from '@/queries/cart/cart.mutation';
import { RoutePaths } from '@/types/RoutePaths.enum';
import useMediaQuery, { ScreenSizes } from '@/hooks/useMediaQuery';

const CartScreen: React.FC = () => {
  const navigate = useNavigation();

  const { increment, decrement } = useUpdateCartMutation();
  const { deleteCart } = useDeleteCartMutation();

  const { user } = useAuthStore();
  const { products, totalPrice } = useCartStore();

  const isMobileScreen = useMediaQuery(ScreenSizes.Small);
  useEffect(() => {
    document.title = 'Sepetim';
    if (!products || products?.length === 0) {
      navigate(RoutePaths.Home);
    }
  }, [products]);
  if (!user) return <SkeletonLoader />;
  return (
    <CartView
      user={user}
      products={products}
      increment={increment}
      decrement={decrement}
      deleteCart={deleteCart}
      isMobileScreen={isMobileScreen}
      totalPrice={Number(JSON?.stringify(totalPrice)?.slice(0, 6))}
    />
  );
};

export default CartScreen;
