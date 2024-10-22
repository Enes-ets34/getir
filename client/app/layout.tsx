import './globals.css';
import Header from '@/components/header/Header';
import Modal from '@/components/modal/Modal';
import Toast from '@/components/toast/Toast';
import Loading from './components/loading/Loading';
import AuthContext from './context/AuthContext';
import CustomQueryClientProvider from './providers/CustomQueryClientProvider';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Getir',
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="tr">
      <body className={`antialiased text-sm`}>
        <CustomQueryClientProvider>
          <AuthContext />
          <Header />
          <Modal />
          <Toast />
          <Loading />
          {children}
        </CustomQueryClientProvider>
      </body>
    </html>
  );
}
