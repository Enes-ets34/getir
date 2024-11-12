import { Address } from '@/queries/address/address.types';

export interface AddressListProps {
  addressData: Address[];
  selectedAddress: Address;
  setSelectedAddress: (selectedAddress: Address) => void;
  handleDeleteAddress: (addressId: string) => void;
}
