'use client';

import React from 'react';
import Slider from 'react-slick';
import { CampaignProps } from './campaignBanner.types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon from '../icon/Icon';
import Image from '../image/Image';
import { sliderSettings } from './slider.settings';
import { campaignBannerStyles } from './campaignBanner.styles';
import { useModalStore } from '@/store/modal';
import CampaignDetail from '../campaign-detail-modal/CampaignDetail';

const CampaignBanner: React.FC<CampaignProps> = ({ campaigns }) => {
  const { openModal,setContent } = useModalStore();
  const handleOnClick = (campaignId: string): void => {
    openModal()
    setContent(<CampaignDetail campaignId={campaignId} />);
  };
  if (campaigns?.length === 0) return null;

  return (
    <Slider
      className={campaignBannerStyles.slider}
      {...sliderSettings}
      {...{
        nextArrow: (
          <button className={campaignBannerStyles.button}>
            <Icon
              source={'chevron'}
              className='hidden sm:block'
              size={{ width: 16, height: 16 }}
            />
          </button>
        ),
        prevArrow: (
          <button className={campaignBannerStyles.button}>
            <Icon
              source={'chevron'}
              size={{ width: 16, height: 16 }}
              className='transform hidden sm:block rotate-180'
            />
          </button>
        ),
      }}
    >
      {campaigns.concat(campaigns).map(campaign => (
        <div
          onClick={() => handleOnClick(campaign._id)}
          key={campaign?._id}
          className={campaignBannerStyles.campaignItem}
        >
          <Image
            objectFit={'contain'}
            src={campaign?.imageUrl || ''}
            className='rounded-borderRadiusL'
          />
        </div>
      ))}
    </Slider>
  );
};

export default CampaignBanner;
