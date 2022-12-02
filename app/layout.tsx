import { Header } from '@components/layout/Header/Header';
import { Karla } from '@next/font/google';
import { Footer } from '@components/layout/Footer/Footer';

const karla = Karla();
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={karla.className}>
      <head />
      <body className='bg-[#E1EFE6]'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
