import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Suspense } from 'react';
import Header from '@/components/header/Header';
import Modal from '@/components/modal/Modal';
import Toast from '@/components/toast/Toast';
import Loading from '@/components/loading/Loading';
import ProtectedRoute from '@/components/protected-route/ProtectedRoute';
import CustomQueryClientProvider from './providers/CustomQueryClientProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getir',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='tr'>
      <body className={`antialiased text-sm bg-[#f8f7f9]`}>
        <Suspense>
          <CustomQueryClientProvider>
            <Header />
            <Modal />
            <Toast />
            <Loading />
            <ProtectedRoute>{children}</ProtectedRoute>
          </CustomQueryClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
