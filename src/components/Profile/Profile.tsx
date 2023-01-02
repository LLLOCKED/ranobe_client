'use client';

import ChaptersList from '@components/ui/chapters-list/ChaptersList';
import { ListCard } from '@components/ui/ListCard';
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

  const { data } = useGetRanobesByUserQuery({});

  const { data: chapters } = useGetChaptersByUserQuery({});

  useEffect(() => {
    console.log(user);
    if (!user) {
      router.push('/');
    }
  }, []);
  return (
    <div className='flex flex-col bg-white p-6 gap-10'>
      <span>{user?.name}</span>
      <div>
        <Link
          className='px-2 py-2 bg-orange-100 rounded-lg hover:bg-orange-200'
          href='/create/ranobe'
        >
          Додати новелу
        </Link>
      </div>
      <ListCard title='Мої новели' data={data} />
      {chapters ? <ChaptersList title='Мої розділи' chapters={chapters} /> : null}
    </div>
  );
};
