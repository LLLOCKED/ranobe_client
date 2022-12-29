import Link from 'next/link';
import Menu from './menu/Menu';
import Profile from './profile/Profile';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container__heder}>
        <div className='flex flex-col lg:flex-row items-center lg:space-x-20'>
          <span className='text-2xl'>
            <Link href='/'>RanobeUA</Link>
          </span>
          <Menu />
        </div>
        <Profile />
      </div>
    </header>
  );
};
