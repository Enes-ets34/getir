import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import httpRequest from '@api/httpRequest';
import { GetCartResponse } from './cart.types';

export const useGetCartQuery = () => {
  return useQuery<GetCartResponse, Error>({
    queryKey: ['cart'],
    queryFn: async () => {
      const response = await httpRequest.get<{
        status: string;
        data: GetCartResponse;
      }>('/cart');
      return response.data.data;
    },
    staleTime: 0,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnReconnect: false,
  } as UseQueryOptions<GetCartResponse, Error>);
};
