import { Address } from '@/queries/address/address.types';

export interface AddressState {
  addressList: Address[] | null;
  selectedAddress: Address | null;
  setSelectedAddress: (selectedAddress: Address | null) => void;
  setAddressList: (addressList: Address[] | null) => void;
}
