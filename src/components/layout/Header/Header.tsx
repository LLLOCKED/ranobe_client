import { GiHamburgerMenu } from 'react-icons/gi';

export const Header = () => {
  return (
    <header className='text-[#160C28] bg-[#EFCB68]'>
      <div className='relative container mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-between '>
        <div className='flex flex-col lg:flex-row items-center lg:space-x-20'>
          <span className='text-2xl'>RanobeUA</span>
          <nav>
            <ul className='flex flex-col lg:flex-row lg:space-x-8 text-center'>
              <li>Останні</li>
              <li>Нові</li>
              <li>Популярні</li>
              <li>Категорії</li>
              <li>Випадкове</li>
            </ul>
          </nav>
        </div>
        <div >
          <span>Вхід</span>
        </div>
      </div>
    </header>
  );
};
