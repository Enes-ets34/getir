import React from 'react';
import { useStyles } from './counter.styles';
import { CounterProps } from './counter.types';
import Icon from '@/components/icon/Icon';

const Counter: React.FC<CounterProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  direction = 'horizontal',
}) => {
  const styles = useStyles(direction);

  return (
    <div className={styles.wrapper}>
      <button onClick={onDecrease} className={styles.iconWrapper}>
        {quantity === 1 ? (
          <Icon source='delete_1' size={{ width: 14 }} />
        ) : (
          <Icon source='minus' size={{ width: 14 }} />
        )}
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button onClick={onIncrease} className={styles.iconWrapper}>
        <Icon source='plus' size={{ width: 10 }} />
      </button>
    </div>
  );
};

export default Counter;
