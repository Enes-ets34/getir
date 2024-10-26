export interface Campaign {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  imageUrl?: string;
  url?: string;
}

export interface CampaignResponse {
  status: string;
  data: Campaign[];
}
