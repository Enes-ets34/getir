'use client';
import React from 'react';
import ProfileSidebar from '@/components/profile-sidebar/ProfileSidebar';
import ContactView from '@/views/contact/ContactView';
import FavoritesView from '@/views/favorites/FavoritesView';
import InvoiceView from '@/views/invoice/InvoiceView';
import OrdersView from '@/views/orders/OrdersView';
import PaymentMethodsView from '@/views/payment-methods/PaymentMethodsView';
import AddressView from '@/views/address/AddressView';
import ProfileView from '@/views/profile/ProfileView';
import {ProfileRouteEnum} from '../../views/profile/profile.types';
import {useAuthStore} from '@/store/auth';
import SkeletonLoader from '@/components/skeleton-loader/SkeletonLoader';

const ProfileScreen: React.FC<any> = ({path}) => {
  const {user} = useAuthStore();
  const renderContent = () => {
    switch (path) {
      case ProfileRouteEnum.Address:
        return <AddressView />;
      case ProfileRouteEnum.Contact:
        return <ContactView />;
      case ProfileRouteEnum.Orders:
        return <OrdersView />;
      case ProfileRouteEnum.Favorites:
        return <FavoritesView />;
      case ProfileRouteEnum.PaymentMethods:
        return <PaymentMethodsView />;
      case ProfileRouteEnum.Invoice:
        return <InvoiceView />;
      default:
        return <ProfileView />;
    }
  };
  if (!user) return <SkeletonLoader />;
  return (
    <>
      {user && (
        <div className="flex flex-col sm:flex-row gap-4">
          <ProfileSidebar />
          {renderContent()}
        </div>
      )}
    </>
  );
};

export default ProfileScreen;
