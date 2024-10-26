import { Campaign } from '@/queries/campaigns/campaign.types';

export interface CampaignState {
  campaigns: Campaign[];
  setCampaigns: (campaigns: Campaign[]) => void;
}
