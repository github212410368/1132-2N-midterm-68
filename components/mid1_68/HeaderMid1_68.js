import NavigationMid1_68 from '@/components/mid1_68/NavigationMid1_68';
import Logo_68 from '@/components/Logo_68';

function HeaderMid1_68() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_68 text='mid1_68' />
        <NavigationMid1_68 />
      </div>
    </header>
  );
}

export default HeaderMid1_68;
