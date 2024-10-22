'use client';

import {ProfileRouteEnum} from '@/views/profile/profile.types';

export interface ListItemType {
  id: number;
  text?: string;
  path?: ProfileRouteEnum;
}
export const listItems: ListItemType[] = [
  {
    id: 1,
    text: 'Adreslerim',
    path: ProfileRouteEnum.Address,
  },
  {
    id: 2,
    text: 'Favori Ürünlerim',
    path: ProfileRouteEnum.Favorites,
  },
  {
    id: 3,
    text: 'Geçmiş Siparişlerim',
    path: ProfileRouteEnum.Orders,
  },
  {
    id: 4,
    text: 'Ödeme Yöntemlerim',
    path: ProfileRouteEnum.PaymentMethods,
  },
  {
    id: 5,
    text: 'Fatura Bilgileri',
    path: ProfileRouteEnum.Invoice,
  },
  {
    id: 6,
    text: 'İletişim Tercihlerim',
    path: ProfileRouteEnum.Contact,
  },
];
