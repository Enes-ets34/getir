import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import httpRequest from '@api/httpRequest';
import {
  ProductResponse,
  GetSingleProductResponse,
  FilterProductResponse,
} from './product.types';

export const useProductsQuery = () => {
  return useQuery<ProductResponse, Error>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await httpRequest.get<ProductResponse>('/products');
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  } as UseQueryOptions<ProductResponse, Error>);
};
export const useFilterProductsQuery = (categoryId: string) => {
  return useQuery<FilterProductResponse, Error>({
    queryKey: ['products', categoryId],
    queryFn: async () => {
      const response = await httpRequest.get<FilterProductResponse>(
        `/products/filter?categoryId=${categoryId}`
      );
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  } as UseQueryOptions<FilterProductResponse, Error>);
};

export const useGetSingleProductQuery = (slug: string) => {
  return useQuery<GetSingleProductResponse, Error>({
    queryKey: ['product', slug],
    queryFn: async () => {
      const response = await httpRequest.get<GetSingleProductResponse>(
        `/products/${slug}`
      );
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  } as UseQueryOptions<GetSingleProductResponse, Error>);
};
