'use client';
import './globals.css';
import Header from '@/components/header/Header';
import Modal from '@/components/modal/Modal';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from '@/components/toast/Toast';
import Loading from './components/loading/Loading';
import Head from 'next/head';
import AuthContext from './context/AuthContext';

export default function RootLayout({children}: {children: React.ReactNode}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <Head>
        <title>Getir</title>
        <meta name="description" content="Getir clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`antialiased text-sm`}>
        <QueryClientProvider client={queryClient}>
          <AuthContext />
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
