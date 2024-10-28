export interface Campaign {
  _id: string;
  title: string;
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
export interface GetSingleCampaignResponse {
  status: string;
  data: Campaign;
}
