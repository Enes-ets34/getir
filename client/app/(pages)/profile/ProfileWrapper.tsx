'use client';
import React from 'react';
import ContactView from '@/views/contact/ContactView';
import FavoritesView from '@/views/favorites/FavoritesView';
import InvoiceView from '@/views/invoice/InvoiceView';
import OrdersView from '@/views/orders/OrdersView';
import PaymentMethodsView from '@/views/payment-methods/PaymentMethodsView';
import AddressView from '@/views/address/AddressView';
import ProfileView from '@/views/profile/ProfileView';
import { ProfileRouteEnum } from '@/views/profile/profile.types';
import { useAuthStore } from '@/store/auth';
import SkeletonLoader from '@/components/skeleton-loader/SkeletonLoader';
import { Address } from '@/queries/address/address.types';
import ProfileSidebar from '@/components/profile-sidebar/ProfileSidebar';
import { useParams } from 'next/navigation';
import { useGetAddressByIdQuery } from '@/queries/address/address.query';

const ProfileWrapper = ({}) => {
  const params = useParams<{ path: ProfileRouteEnum }>();
  const { data: addressData } = useGetAddressByIdQuery();
  const { user } = useAuthStore();

  const renderContent = () => {
    switch (params?.path) {
      case ProfileRouteEnum.Address:
        return <AddressView addressData={addressData as Address[]} />;
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
    <div className='flex flex-col sm:flex-row items-start gap-4 pt-10 pb-24'>
      <ProfileSidebar />
      <div className='w-full'>{renderContent()}</div>
    </div>
  );
};

export default ProfileWrapper;
