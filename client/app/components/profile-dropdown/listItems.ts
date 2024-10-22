import {ProfileRouteEnum} from '@/(pages)/profile/page';

export interface ListItemType {
  id: number;
  text?: string;
  path?: string;
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
    path: 'favorites',
  },
  {
    id: 3,
    text: 'Geçmiş Siparişlerim',
    path: ProfileRouteEnum.Orders,
  },
  {
    id: 4,
    text: 'Ödeme Yöntemlerim',
    path: 'payments',
  },
  {
    id: 5,
    text: 'Fatura Bilgileri',
    path: 'invoice',
  },
  {
    id: 6,
    text: 'İletişim Tercihlerim',
    path: ProfileRouteEnum.Contact,
  },
];
