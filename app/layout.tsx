'use client';

import '../styles/globals.css';
import { Header } from '@components/layout/header/Header';
import { Karla } from '@next/font/google';
import { Footer } from '@components/layout/footer/Footer';
import { ReduxProvider } from './redux-provider';
import AuthVerify from '../src/common/AuthVerify';

const karla = Karla();
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${karla.className}  h-full`}>
      <head />
      <body className='relative min-h-full pb-44 bg-[#F5F5F5]'>
        <ReduxProvider>
          <Header />
          <AuthVerify />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
