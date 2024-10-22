'use client';
import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

interface CustomQueryClientProviderProps {
  children: ReactNode;
}

const CustomQueryClientProvider = ({
  children,
}: CustomQueryClientProviderProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default CustomQueryClientProvider;
