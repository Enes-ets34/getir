export type CounterProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  direction?: 'horizontal' | 'vertical';
  productId?:string
};
