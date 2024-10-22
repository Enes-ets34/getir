'use client'
import React from 'react';
import { loadingStyles } from './loading.styles';
import { useLoadingStore } from '@store/loading';

const Loading: React.FC = () => {
  const { isLoading } = useLoadingStore();

  if (!isLoading) return null;

  return (
    <div className={loadingStyles.overlay}>
      <div className={loadingStyles.container}>
        <div className={`${loadingStyles.commonLoader} ${loadingStyles.loader1}`}></div>
        <div className={`${loadingStyles.commonLoader} ${loadingStyles.loader2}`}></div>
      </div>
    </div>
  );
};

export default Loading;
