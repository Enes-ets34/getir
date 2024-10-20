'use client';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import Colors from './theme/Colors';
import Input from './components/input/Input';
import {useState} from 'react';
import {
  useLogoutMutation,
  useTestTokenMutation,
} from './queries/auth/auth.mutation';

export default function Home() {
  const testTokenMutation = useTestTokenMutation();
  const logoutMutation = useLogoutMutation();

  const onClick = async () => {
    await testTokenMutation.mutateAsync();
  };
  const logout = async () => {
    await logoutMutation.mutateAsync();
  };
  const [value, setValue] = useState('');
  return (
    <div>
      home
      <Button text="deneme" onClick={onClick} />
      <Button text="logout" color="secondary" onClick={logout} />
      <div className="bg-red 500 p-5">
        <Icon
          source="language"
          color={Colors.brandYellow}
          size={{width: 12, height: 24}}
        />
        <Icon source="language" size={{width: 12, height: 24}} />
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            placeholder="text"
            errorText="Lütfen TC Kimlik No gir"
            className=""
          />
          <Input
            onChange={e => setValue(e.target.value)}
            value={value}
            icon="alert_circle"
            type="text"
            label="text"
          />
        </div>
      </div>
    </div>
  );
}
