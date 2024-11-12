'use client';

import { useParams } from 'next/navigation';
import ProfileScreen from '../page';
import { ProfileRouteEnum } from '@/views/profile/profile.types';
import { useGetAddressByIdQuery } from '@/queries/address/address.query';
import { Address } from '@/queries/address/address.types';

const Path = () => {
  const params = useParams<{ path: ProfileRouteEnum }>();
  const { data: addressData } = useGetAddressByIdQuery();

  return (
    <div>
      {typeof params?.path === 'string' && (
        <ProfileScreen
          params={{ path: params.path }}
          addressData={addressData as Address[]}
        />
      )}
    </div>
  );
};

export default Path;
