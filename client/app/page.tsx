'use client';
import { useEffect } from 'react';
import { useTestTokenMutation } from './queries/auth/auth.mutation';
import { useLoadingStore } from './store/loading';
import useNavigation from './utils/handleNavigation';
import { RoutePaths } from './types/RoutePaths.enum';

export default function Home() {
  const testTokenMutation = useTestTokenMutation();
  const { isPending } = testTokenMutation;
  const { showLoading, hideLoading } = useLoadingStore();
  const navigation = useNavigation();
  useEffect(() => {
    if (isPending) showLoading();
    else hideLoading();
  }, [isPending]);
  useEffect(() => {
    navigation(RoutePaths.Categories)
  }, []);
  return <div></div>;
}
