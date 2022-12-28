'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

export const Profile = () => {
  const router = useRouter();

  const user = useSelector((state: RootState) => state.userState.user);

  useEffect(() => {
    console.log(user);
    if (!user) {
      router.push('/');
    }
  }, []);
  return <div className='bg-white p-6'>{user?.name}</div>;
};
