'use client';
import { Product } from '@/queries/products/product.types';
import { useGetSingleProductQuery } from '@/queries/products/product.query';
import ProductDetailView from '@/views/product-detail/ProductDetailView';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useLoadingStore } from '@/store/loading';

export default function ProductDetailScreen() {
  const params = useParams();
  const { showLoading, hideLoading } = useLoadingStore();
  const { slug } = params;
  const { data: product, isLoading } = useGetSingleProductQuery(
    (slug as string)
  );
  useEffect(() => {
    if (isLoading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isLoading]);
  if (!product?.data ) return <>ürün bulunamadı</>
  return <ProductDetailView product={product?.data as Product} />;
}
