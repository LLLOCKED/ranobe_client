import Link from 'next/link';

import { GetRanobeResponse } from '../../store/services/ranobe.service';
import Spinner from '../ui/spinner/Spinner';
import { Card } from './card/Card';

interface ICardsList {
  title: string;
  data?: GetRanobeResponse[];
  isLoading: boolean;
  link: string;
}

export const CardsList = ({ title, data, isLoading, link }: ICardsList) => {
  return (
    <div>
      <div className='border-b-2 border-gray-300 py-2'>
        <Link className='flex justify-between items-center hover:text-[#FF5A5F]' href={link}>
          <span className='text-2xl font-bold'>{title}</span>
          <span>Більше 🠒</span>
        </Link>
      </div>
      {!isLoading ? (
        <div className='grid xl:grid-cols-5 xl:grid-rows-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 py-4'>
          {data?.map((ranobe) => {
            return <Card key={ranobe.id} {...ranobe} />;
          })}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
