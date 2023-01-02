'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useGetRanobeQuery } from 'src/store/services/ranobe.service';
import { useGetChaptersOfRanobeQuery } from 'src/store/services/chapter.service';
import ChaptersList from '@components/ui/chapters-list/ChaptersList';
import CategoriesList from '@components/ui/categories-list/CategoriesList';

interface IRanobeProps {
  id: string;
}

const stringReplace = (string: string | undefined) => {
  return string ? string.replace(/\\n/g, '\n') : null;
};

export const Ranobe: FC<IRanobeProps> = ({ id }) => {
  const { data, isLoading } = useGetRanobeQuery(id);
  const { data: chapters, isLoading: isLoadingChapters } = useGetChaptersOfRanobeQuery(id);

  if (isLoading) {
    return <div className='bg-white p-12'>Loading...</div>;
  }

  return (
    <div className='flex flex-col gap-12 bg-white text-black p-10'>
      <div className='flex gap-12 bg-gray-50 p-4 rounded-sm shadow-xl'>
        <div className='w-1/4'>
          <Image
            width={250}
            height={350}
            alt='Cover'
            src={`http://localhost:5000/uploads/image/${data?.image}`}
          />
        </div>
        <div className='w-3/4 flex flex-col gap-4'>
          <h2 className='font-bold text-2xl'>{data?.title}</h2>

          <CategoriesList categories={data?.categories} />

          <div className='flex flex-col gap-1'>
            <p className='font-bold'>
              Статус новели:{' '}
              <span
                className={` px-2 py-1 font-normal rounded-xl ${
                  data?.status === 'ONGOING' ? 'bg-yellow-300' : 'bg-green-400'
                }`}
              >
                {data?.status === 'ONGOING' ? 'Онгоїнг' : 'Завершено'}
              </span>
            </p>
            <p className='font-bold'>
              Статус перекладу:{' '}
              <span
                className={` px-2 py-1 font-normal rounded-xl ${
                  data?.status === 'ONGOING' ? 'bg-yellow-300' : 'bg-green-400'
                }`}
              >
                {data?.tStatus === 'ONGOING' ? 'Онгоїнг' : 'Завершено'}
              </span>
            </p>
          </div>
          <p>{stringReplace(data?.description)}</p>
        </div>
      </div>
      <div>
        {/* <h2 className='font-bold text-2xl border-b pb-2'>Chapters List</h2> */}
        {chapters ? <ChaptersList title='Список розділів' chapters={chapters} /> : null}
      </div>
    </div>
  );
};
