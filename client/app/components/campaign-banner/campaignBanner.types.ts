import { Campaign } from '@/queries/campaigns/campaign.types';

export interface CampaignProps extends React.HTMLAttributes<HTMLDivElement> {
  campaigns: Campaign[];
}
