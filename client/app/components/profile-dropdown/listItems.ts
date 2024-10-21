export interface ListItemType {
    id: number;
    text?: string;
    onClick?: () => void;
  }
  
  export const listItems: ListItemType[] = [
    {
      id: 1,
      text: 'Adreslerim',
      onClick: () => {
        console.log('adreslerim');
      },
    },
    {
      id: 2,
      text: 'Favori Ürünlerim',
      onClick: () => {
        console.log('favori ürünlerim');
      },
    },
    {
      id: 3,
      text: 'Geçmiş Siparişlerim',
      onClick: () => {
        console.log('geçmiş siparişlerim');
      },
    },
    {
      id: 4,
      text: 'Ödeme Yöntemlerim',
      onClick: () => {
        console.log('ödeme yöntemlerim');
      },
    },
    {
      id: 5,
      text: 'Fatura Bilgileri',
      onClick: () => {
        console.log('fatura bilgileri');
      },
    },
    {
      id: 6,
      text: 'İletişim Tercihlerim',
      onClick: () => {
        console.log('iletişim tercihlerim');
      },
    },
  ];
  