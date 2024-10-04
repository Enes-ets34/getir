'use client';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import Colors, { colors } from './theme/Colors';

export default function Home() {
  const onClick = (): void => {
    console.log('hello');
  };
  return (
    <div>
      home
      <Button text="deneme" onClick={onClick} />
      <div className="bg-red 500 p-5">
        <Icon source="language" color={Colors.brandYellow} size={{width: 12, height: 24}} />
        <Icon source="language"  size={{width: 12, height: 24}} />
      </div>
    </div>
  );
}
