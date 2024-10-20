'use client'; // Bu satırı ekleyin
import './globals.css';
import Header from '@/components/header/Header';
import Modal from '@/components/modal/Modal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from '@/components/toast/Toast';
import Loading from './components/loading/Loading';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={`antialiased text-sm`}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Modal />
          <Toast />
          <Loading/>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
