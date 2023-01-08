'use client';

import ChaptersList from '@components/ui/chapters-list/ChaptersList';
import { CardsList } from '@components/cards-list/CardsList';
import { useGetChaptersByUserQuery } from '@store/services/chapter.service';
import { useGetRanobesByUserQuery } from '@store/services/ranobe.service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

export const Profile = () => {
  const router = useRouter();

  const user = useSelector((state: RootState) => state.userState.user);

  const { data, isLoading } = useGetRanobesByUserQuery({});

  const { data: chapters } = useGetChaptersByUserQuery({});

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);
  return (
    <div className='flex flex-col bg-white p-6 gap-6'>
      <span>{user?.name}</span>
      <div className='flex gap-6'>
        <Link
          className='px-2 py-2 bg-orange-100 rounded-lg hover:bg-orange-200'
          href='/create/ranobe'
        >
          Додати новелу
        </Link>
        {user?.role === 'ADMIN' ? (
          <span className='px-2 py-2 bg-orange-100 rounded-lg hover:bg-orange-200'>
            <Link href='/admin'>Адмінка</Link>
          </span>
        ) : ''}
      </div>
      <CardsList title='Мої новели' data={data} isLoading={isLoading} link='' />
      {chapters ? <ChaptersList title='Мої розділи' chapters={chapters} /> : null}
    </div>
  );
};
