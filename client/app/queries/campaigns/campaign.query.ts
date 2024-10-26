import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import httpRequest from '@api/httpRequest';
import { CampaignResponse } from './campaign.types';

export const useCampaignsQuery = () => {
  return useQuery<CampaignResponse, Error>({
    queryKey: ['campaigns'],
    queryFn: async () => {
      const response = await httpRequest.get<CampaignResponse>('/campaigns');
      return response.data;
    },
    staleTime: 1000 * 60 * 5, 
  } as UseQueryOptions<CampaignResponse, Error>);
};
