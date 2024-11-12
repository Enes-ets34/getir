import React from 'react';

import { AddressListProps } from './addressList.types';
import Icon from '@/components/icon/Icon';
import Colors from '@/theme/Colors';
import { addressListStyles } from './addressList.styles';

export default function AddressList({
  addressData,
  selectedAddress,
  setSelectedAddress,
  handleDeleteAddress,
}: AddressListProps) {
  return (
    <>
      {addressData && addressData?.length > 0 && (
        <ul className={addressListStyles.wrapper}>
          {[
            selectedAddress,
            ...addressData.filter(
              address => address._id !== selectedAddress?._id
            ),
          ].map(address => (
            <li
              onClick={() => setSelectedAddress(address)}
              key={address?._id}
              className={`${addressListStyles.listItem} ${
                !(selectedAddress?._id === address?._id)
                  ? `${addressListStyles.nonSelected}`
                  : ''
              }`}
            >
              {address?.title && (
                <div
                  className={`${addressListStyles.container} ${
                    !(selectedAddress?._id === address?._id)
                      ? 'border-t border-lilac'
                      : ''
                  }`}
                >
                  <div className={addressListStyles.flexCol}>
                    <div className={addressListStyles.border}>
                      <Icon source={'house'} size={{ width: 24 }} />
                    </div>
                    <div className='font-semibold'>
                      <span className='text-black'>Ev</span>
                      <span className='text-gray ml-2'>
                        {address?.address}, {address?.apartment}
                      </span>
                    </div>
                  </div>
                  {selectedAddress?._id === address?._id ? (
                    <Icon
                      source={'success'}
                      color={Colors.success}
                      size={{ width: 18 }}
                    />
                  ) : (
                    <span onClick={() => handleDeleteAddress(address?._id)}>
                      <Icon
                        source={'delete_1'}
                        color={Colors.primary}
                        size={{ width: 18 }}
                      />
                    </span>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
