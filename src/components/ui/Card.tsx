import Image from 'next/image';
import { AiFillEye, AiFillStar } from 'react-icons/ai';
import cover from '../../images/ranobe-prew.png'
import { FC } from 'react';
import Link from 'next/link';

interface ICard {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  image: string | null;
  views: number;
}

const updatedAgo = (days: number) => {
  if (days <= 1) {
    const minutes = Math.round(days * 60 * 24);

    if (minutes <= 1) {
      return 'менше хвилини тому';
    }
    if (minutes === 1) {
      return 'хвилину тому';
    }

    if (2 <= minutes && minutes <= 4) {
      return minutes + ' хвилини тому';
    }
    if (60 >= minutes) {
      return minutes + ' хвилин тому';
    }
    if (60 <= minutes && minutes <= 120) {
      return 'годину тому';
    }

    return 'cьогодні';
  }

  if (days === 1) {
    return 'день тому';
  }

  if (2 <= days && days <= 4) {
    return Math.round(days) + ' дні тому';
  }

  return Math.round(days) + ' днів тому';
};

export const Card: FC<ICard> = ({ id, title, description, createdAt, image, views }) => {
  // @ts-ignore
  const convertDate = (new Date() - new Date(createdAt)) / (1000 * 3600 * 24);

  return (
    <div className='bg-white p-2 flex flex-col space-y-2 shadow-md cursor-pointer border hover:border hover:border-amber-300 group'>
      <Link href={`/ranobe/${id}`}>
        <div>
          <div className='relative'>
            <div className='w-64 h-72'>
              <Image
                fill
                className='object-cover'
                src={image ? `http://localhost:5000/uploads/image/${image}` : cover}
                alt={title}
              />
            </div>

            <div className='hidden group-hover:flex absolute bg-black/[.80] top-0 left-0 w-full h-full text-white py-10 px-4 flex-col justify-between space-y-4'>
              <span>Опис:</span>
              <span className='text-sm line-clamp-6'>{description}</span>
              <span className='text-sm text-amber-400 hover:text-amber-600'>
                Дізнатися більше...
              </span>
            </div>
          </div>
          <div>
            <span className='font-bold line-clamp-1'>{title}</span>
          </div>
          {/* <div className='text-sm flex items-center space-x-1'>
            <AiFillStar className='text-orange-400' />
            <span>8.2</span>
          </div> */}
          <div className='flex justify-between items-center text-sm text-gray-400'>
            <div className='flex items-center space-x-2'>
              <AiFillEye />
              <span>{views}</span>
            </div>
            <span>{updatedAgo(convertDate)} </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
