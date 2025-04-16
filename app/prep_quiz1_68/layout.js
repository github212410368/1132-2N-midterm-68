import { Josefin_Sans } from 'next/font/google';
import '@/app/globals.css';
import HeaderQuiz1_68 from '@/components/prep_quiz1_68/HeaderPrepQuiz1_68';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'The Wild Oasis - 68',
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <HeaderQuiz1_68 />
        <div className='flex-1 px-8 py-12'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
