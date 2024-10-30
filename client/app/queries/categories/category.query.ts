import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import httpRequest from '@api/httpRequest';
import { CategoryResponse } from './category.types';

export const useCategoriesQuery = () => {
  return useQuery<CategoryResponse, Error>({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await httpRequest.get<CategoryResponse>('/categories');
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  } as UseQueryOptions<CategoryResponse, Error>);
};
