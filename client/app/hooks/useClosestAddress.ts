import { useEffect } from 'react';
import { Address } from '@/queries/address/address.types';

const useClosestAddress = (
  addressList: Address[],
  setSelectedAddress: (address: Address) => void
) => {
  const haversine = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
      console.error('Invalid coordinates:', { lat1, lon1, lat2, lon2 });
      return NaN;
    }

    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
  };

  const setAddressBasedOnLocation = () => {
    if (navigator.geolocation && addressList && addressList.length > 0) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          let closestAddress = addressList[0];
          let closestDistance = haversine(
            latitude,
            longitude,
            closestAddress.lat,
            closestAddress.long
          );

          addressList.forEach((address) => {
            if (isNaN(address.lat) || isNaN(address.long)) {
              console.error(
                `Invalid coordinates for address ${address._id}:`,
                address.lat,
                address.long
              );
              return;
            }

            const distance = haversine(
              latitude,
              longitude,
              address.lat,
              address.long
            );
          

            if (distance < closestDistance) {
              closestAddress = address;
              closestDistance = distance;
            }
          });


          setSelectedAddress(closestAddress); 
        },
        () => {
          setSelectedAddress(addressList[0]);
        }
      );
    } else if (addressList && addressList.length > 0) {
      setSelectedAddress(addressList[0]);
    }
  };

  useEffect(() => {
    if (addressList && addressList.length > 0) {
      setAddressBasedOnLocation();
    }
  }, [addressList]);
};

export default useClosestAddress;
