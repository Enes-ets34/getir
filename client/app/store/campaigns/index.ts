import { create } from 'zustand';
import { CampaignState } from './campaignStore.types';

export const useCampaignStore = create<CampaignState>(set => ({
  campaigns: [],
  setCampaigns: campaigns => set({ campaigns }),
}));
