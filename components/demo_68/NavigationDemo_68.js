import Link from 'next/link';

export default function NavigationDemo_68() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/demo_68/w02_tailwind_68'
            className='hover:text-accent-400 transition-colors'
          >
            w2_tailwind_68
          </Link>
        </li>
        <li>
          <Link
            href='/demo_68/w05_oasis_68'
            className='hover:text-accent-400 transition-colors'
          >
            w5_oasis_68
          </Link>
        </li>
        <li>
          <Link
            href='/demo_68/w06_blog_68'
            className='hover:text-accent-400 transition-colors'
          >
            w6_blog_68
          </Link>
        </li>
        <li>
          <Link
            href='/demo_68/w08_booklist_68'
            className='hover:text-accent-400 transition-colors'
          >
            w8_booklist_68
          </Link>
        </li>
      </ul>
    </nav>
  );
}
