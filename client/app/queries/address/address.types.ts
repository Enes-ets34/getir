export interface Address {
  _id: string;
  userId: string;
  address: string;
  description: string;
  apartment: string;
  floor: string;
  title: string;
  number: string;
  lat: number;
  long: number;
}

export interface CreateAddressRequest {
  address: string;
  description: string;
  apartment: string;
  floor: string;
  title: string;
  number: string;
  lat: number;
  long: number;
}

export interface UpdateAddressRequest {
  _id: string;
  contactName?: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  zipCode?: string;
}

export interface AddressResponse {
  status?: string;
  data?: Address[];
}

export type GetAddressResponse = AddressResponse;
export type CreateAddressResponse = AddressResponse;
export type UpdateAddressResponse = AddressResponse;

export interface DeleteAddressResponse {
  message?: string;
}
