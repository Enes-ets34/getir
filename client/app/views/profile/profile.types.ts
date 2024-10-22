export enum ProfileRouteEnum {
    Address = 'address',
    Contact = 'contact',
    Orders = 'orders',
    Favorites = 'favorites',
    Invoice = 'invoice',
    PaymentMethods = 'payment-methods',
  }
  export interface ProfileViewProps {
    path: ProfileRouteEnum;
  }