'use client';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import Colors, { colors } from './theme/Colors';
import Input from './components/input/Input';

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
        <div className="flex gap-2">
        <Input type='text' placeholder='text' errorText='Lütfen TC Kimlik No gir'/>
        <Input type='text' placeholder='text' errorText='Lütfen TC Kimlik No gir'/>
        </div>
      </div>
    </div>
  );
}
