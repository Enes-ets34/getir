'use client';

import { useCampaignsQuery } from '@/queries/campaigns/campaign.query';
import { useAuthStore } from '@/store/auth';
import { useCampaignStore } from '@/store/campaigns';
import CategoriesView from '@/views/categories/CategoriesView';
import { useEffect } from 'react';

export default function CategoriesScreen() {
  const { setCampaigns, campaigns } = useCampaignStore();
  const { user } = useAuthStore();
  const {
    data: campaignsQueryData,
    isSuccess,
    isError,
    refetch,
  } = useCampaignsQuery();
  useEffect(() => {
    if (user) {
      refetch();
      if (isSuccess) {
        setCampaigns(campaignsQueryData.data);
      }
    } else {
      setCampaigns([]);
    }
  }, [isSuccess, isError, user]);
  return <CategoriesView campaigns={campaigns} />;
}
