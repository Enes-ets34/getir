'use client';

import ProfileView from '@/views/profile/ProfileView';
import React from 'react';

interface ProfileViewProps {
  path: ProfileRouteEnum;
}
export enum ProfileRouteEnum {
  Address = 'address',
  Contact = 'contact',
  Orders = 'orders',
}

const ProfileScreen: React.FC<ProfileViewProps> = ({path}) => {
  const renderContent = () => {
    switch (path) {
      case ProfileRouteEnum.Address:
        return <div>Adreslerim İçeriği</div>;
      case ProfileRouteEnum.Contact:
        return <div>İletişim Tercihlerim İçeriği</div>;
      case ProfileRouteEnum.Orders:
        return <div>Geçmiş Siparişlerim İçeriği</div>;
      default:
        return <ProfileView />;
    }
  };

  return (
    <div>
      <h1 className="font-bold">profil sayfası</h1>
      <div>siderbar</div>
      {renderContent()}
    </div>
  );
};

export default ProfileScreen;
