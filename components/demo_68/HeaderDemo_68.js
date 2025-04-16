import NavigationDemo_68 from '@/components/demo_68/NavigationDemo_68';
import Logo_68 from '@/components/Logo_68';

function HeaderDemo_68() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_68 text='demo_68' />
        <NavigationDemo_68 />
      </div>
    </header>
  );
}

export default HeaderDemo_68;
