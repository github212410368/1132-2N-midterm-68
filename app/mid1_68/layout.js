import { Josefin_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import HeaderMid1_68 from '@/components/mid1_68/HeaderMid1_68';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const roboto = localFont({
  src: '../Roboto-Regular.ttf',
});

export const metadata = {
  title: 'Mid_68 page',
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <HeaderMid1_68 />
        <div className='flex-1 px-8 py-8'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
