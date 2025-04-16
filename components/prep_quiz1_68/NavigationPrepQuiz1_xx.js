import Link from 'next/link';

export default function NavigationQuiz1_68() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/prep_quiz1_68/p1_68'
            className='hover:text-accent-400 transition-colors'
          >
            p1_68
          </Link>
        </li>
        <li>
          <Link
            href='/prep_quiz1_68/p2_68'
            className='hover:text-accent-400 transition-colors'
          >
            p2_68
          </Link>
        </li>
        <li>
          <Link
            href='/prep_quiz1_68/p3_68'
            className='hover:text-accent-400 transition-colors'
          >
            p3_68
          </Link>
        </li>
        <li>
          <Link
            href='/prep_quiz1/p4_68'
            className='hover:text-accent-400 transition-colors'
          >
            p4_68
          </Link>
        </li>
      </ul>
    </nav>
  );
}
