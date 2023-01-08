import Link from 'next/link';
import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { logout } from '@store/slices/user.slice';
import { RootState } from '@store/store';

import styles from './Profile.module.scss';
 
const Profile: FC = () => {
  const router = useRouter();
  const [, , removeCookie] = useCookies(['logged_in']);

  const user = useSelector((state: RootState) => state.userState.user);

  const dispatch = useDispatch();

  const clickLogout = () => {
    dispatch(logout());
    removeCookie('logged_in');
    router.push('/');
  };

  return (
    <div>
      {!user ? (
        <span>
          <Link className={styles.text} href='/login'>Вхід</Link>
        </span>
      ) : (
        <div className='flex items-center gap-10'>
          <span className={styles.text}>
            <Link  href='/profile'>{user.name}</Link>
          </span>
          <button className={styles.text} onClick={clickLogout}>Вихід</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
