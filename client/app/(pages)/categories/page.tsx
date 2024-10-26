'use client';

import { useCampaignsQuery } from '@/queries/campaigns/campaign.query';
import { useCampaignStore } from '@/store/campaigns';
import CategoriesView from '@/views/categories/CategoriesView';
import { useEffect } from 'react';

export default function CategoriesScreen() {
  const { setCampaigns } = useCampaignStore();
  const { data: campaignsQueryData, isSuccess, isError } = useCampaignsQuery();
  useEffect(() => {
    if (isSuccess) {
      setCampaigns(campaignsQueryData.data);
    }
    if (isError) {
      console.error('error');
    }
  }, [isSuccess, isError]);
  return <CategoriesView />;
}
