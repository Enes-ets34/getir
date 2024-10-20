'use client';
import './globals.css';
import Header from '@/components/header/Header';
import Modal from '@/components/modal/Modal';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from '@/components/toast/Toast';
import Loading from './components/loading/Loading';
import {useAuthStore} from './store/auth';
import {useEffect} from 'react';
import Head from 'next/head';

export default function RootLayout({children}: {children: React.ReactNode}) {
  const queryClient = new QueryClient();
  const {setUser, setAccessToken} = useAuthStore();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('access_token');
      const user = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user') as string)
        : null;

      if (accessToken && user) {
        setUser(user);
        setAccessToken(accessToken);
      }
    }
  }, [setUser]);
  return (
    <html lang="en">
       <Head>
        <title>Getir</title> 
        <meta name="description" content="Getir clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`antialiased text-sm`}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Modal />
          <Toast />
          <Loading />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
