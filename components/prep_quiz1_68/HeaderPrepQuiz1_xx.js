import NavigationQuiz1_68 from '@/components/prep_quiz1_68/NavigationPrepQuiz1_68';
import Logo_68 from '@/components/Logo_68';

function HeaderQuiz1_68() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_68 text='quiz1_68' />
        <NavigationQuiz1_68 />
      </div>
    </header>
  );
}

export default HeaderQuiz1_68;
