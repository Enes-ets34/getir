'use client';

import React, { useEffect } from 'react';

import { useModalStore } from '@/store/modal';
import { CampaignDetailProps } from './campaignDetail.types';
import { campaignDetailStyles } from './campaignDetail.styles';
import Image from '../image/Image';
import { getSingleCampaignQuery } from '@/queries/campaigns/campaign.query';
import { useLoadingStore } from '@/store/loading';
import { useToastStore } from '@/store/toast';
import { ToastEnum } from '../toast/toast.types';
import Button from '../button/Button';

const CampaignDetail: React.FC<CampaignDetailProps> = ({ campaignId }) => {
  const { showLoading, hideLoading } = useLoadingStore();
  const { addToast } = useToastStore();
  const {
    data: campaignData,
    isSuccess,
    isError,
    isLoading,
    error,
  } = getSingleCampaignQuery(campaignId);
  useEffect(() => {
    if (isLoading) {
      showLoading();
    } else {
      hideLoading();
    }
    if (isError) {
      addToast(error?.message, ToastEnum.ERROR);
    }
  }, [isSuccess, isError, isLoading]);
  const { setTitle } = useModalStore();
  useEffect(() => {
    setTitle('');
  }, []);
  return (
    <div className={campaignDetailStyles.wrapper}>
      <Image
        src={campaignData?.data?.imageUrl || ''}
        objectFit='contain'
        className='rounded-md'
      />
      <h1 className={campaignDetailStyles.title}>
        {campaignData?.data?.title}
      </h1>
      <p>
        Kampanyadan faydalanabilmek için seçili ürünlerden sepetine eklemelisin.
      </p>
      <p className='font-semibold text-grayMid'>Kampanya Koşulları</p>
      <p>{campaignData?.data?.description}</p>
      <div className='flex justify-center mt-4'>
        <Button
          text='Ürünleri Göster'
          color='primary'
          className='w-full sm:w-64'
          onClick={() => console.log('onClick')}
        />
      </div>
    </div>
  );
};

export default CampaignDetail;
