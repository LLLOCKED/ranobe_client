'use client';

import Image from 'next/image';
import image from '../../images/ranobe-prew.png';
import { FC } from 'react';
import { useGetRanobeQuery } from 'src/store/services/ranobe.service';
import { useGetChaptersOfRanobeQuery } from 'src/store/services/chapter.service';

interface IRanobeProps {
  id: string;
}

export const Ranobe: FC<IRanobeProps> = ({ id }) => {
  const { data, isLoading } = useGetRanobeQuery(id);
  const { data: chapters, isLoading: isLoadingChapters } = useGetChaptersOfRanobeQuery(id);

  if (isLoading) {
    return <div className='bg-white p-12'>Loading...</div>;
  }

  return (
    <div className='flex flex-col gap-12 bg-white text-black p-10'>
      <div className='flex gap-12 bg-gray-50 p-4 rounded-sm shadow-xl'>
        <div>
          <Image width={250} height={350} alt='Cover' src={image} />
        </div>
        <div className='flex flex-col gap-4 '>
          <h2 className='font-bold text-2xl'>{data?.title}</h2>
          <div className='flex gap-2'>
            {data?.categories.map((category) => (
              <span key={category.name}>{category.name}</span>
            ))}
          </div>
          <span>0 читають 8.0</span>
          <div className='flex flex-col gap-1'>
            <p className='font-bold'>
              Статус новели:{' '}
              <span
                className={` p-1 font-normal ${
                  data?.status === 'ONGOING' ? 'bg-yellow-300' : 'bg-green-400'
                }`}
              >
                {data?.status === 'ONGOING' ? 'Онгоїнг' : 'Завершено'}
              </span>
            </p>
            <p className='font-bold'>
              Статус перекладу:{' '}
              <span
                className={` p-1 font-normal ${
                  data?.status === 'ONGOING' ? 'bg-yellow-300' : 'bg-green-400'
                }`}
              >
                {data?.tStatus === 'ONGOING' ? 'Онгоїнг' : 'Завершено'}
              </span>
            </p>
          </div>
          <span>{data?.description}</span>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-2xl border-b pb-2'>Chapters List</h2>
        <div>
          <ul className='divide-y divide-slate-200'>
            {chapters?.map((chapter) => {
              return (
                <li key={chapter.id} className='py-3'>
                  <div className='flex justify-between'>
                    <div className='flex gap-2'>
                      <span>Volume {chapter.volume} Chapter {chapter.number}</span>
                      <span>-</span>
                      <span>{chapter.title}</span>
                    </div>
                    <div>20.12.2022</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
