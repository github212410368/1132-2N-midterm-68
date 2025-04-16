import { Josefin_Sans } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';
import Header_68 from '@/components/Header_68';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const roboto = localFont({
  src: './Roboto-Regular.ttf',
});

export const metadata = {
  title: 'WEBProg of TKU_68',
  description: 'Web Programming of TKU_68, TING,212410368',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header_68 />
        <div className='flex-1 px-8'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
