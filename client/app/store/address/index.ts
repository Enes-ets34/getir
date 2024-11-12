import { create } from 'zustand';
import { AddressState } from './addressStore.types';

export const useAddressStore = create<AddressState>(set => ({
  addressList: null,
  selectedAddress: null,
  setAddressList: addressList  => set({ addressList }),
  setSelectedAddress: selectedAddress => set({ selectedAddress }),
}));
