'use client';
import {useEffect} from 'react';
import Button from '@/components/button/Button';
import {
  useLogoutMutation,
  useTestTokenMutation,
} from './queries/auth/auth.mutation';
import {useLoadingStore} from './store/loading';

export default function Home() {
  const testTokenMutation = useTestTokenMutation();
  const {isPending} = testTokenMutation;
  const {showLoading, hideLoading} = useLoadingStore();

  const logoutMutation = useLogoutMutation();

  const triggerTestTokenMutation = async () => {
    await testTokenMutation.mutateAsync();
  };
  const onClick = async () => {
    triggerTestTokenMutation();
  };
  const logout = async () => {
    await logoutMutation.mutateAsync();
  };
  useEffect(() => {
    isPending ? showLoading : hideLoading;
  }, [isPending]);
  return (
    <div>
      home
      <Button text="deneme" onClick={onClick} />
      <Button text="logout" color="secondary" onClick={logout} />
    </div>
  );
}
