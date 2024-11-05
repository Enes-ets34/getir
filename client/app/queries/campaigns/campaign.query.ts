import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import httpRequest from '@api/httpRequest';
import { CampaignResponse, GetSingleCampaignResponse } from './campaign.types';

export const useCampaignsQuery = () => {
  return useQuery<CampaignResponse, Error>({
    queryKey: ['campaigns'],
    queryFn: async () => {
      const response = await httpRequest.get<CampaignResponse>('/campaigns');
      return response.data;
    },
    staleTime: 1000 * 60 * 5, 
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchInterval: false, 
    refetchOnReconnect: false,
  } as UseQueryOptions<CampaignResponse, Error>);
};
export const useGetSingleCampaignQuery = (id: string) => {
  return useQuery<GetSingleCampaignResponse, Error>({
    queryKey: ['campaign', id],
    queryFn: async () => {
      const response = await httpRequest.get<GetSingleCampaignResponse>(
        `/campaigns/${id}`
      );
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  } as UseQueryOptions<GetSingleCampaignResponse, Error>);
};
