import Link from 'next/link';

export default function Navigation_68() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/mid1_68'
            className='hover:text-accent-400 transition-colors'
          >
            mid1_68
          </Link>
        </li>
        <li>
          <Link
            href='/demo_68'
            className='hover:text-accent-400 transition-colors'
          >
            demo_68
          </Link>
        </li>
        <li>
          <Link
            href='/prep_quiz1_68'
            className='hover:text-accent-400 transition-colors'
          >
            prep_quiz1_68
          </Link>
        </li>
      </ul>
    </nav>
  );
}
