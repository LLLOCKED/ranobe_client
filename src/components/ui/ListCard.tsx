import Link from 'next/link';
import { Card } from '@components/ui/Card';
import { GetRanobeResponse } from '../../store/services/ranobe.service';
import Spinner from './spinner/Spinner';

interface IListCard {
  title: string;
  data?: GetRanobeResponse[];
  isLoading: boolean;
}

export const ListCard = ({ title, data, isLoading }: IListCard) => {
  return (
    <div>
      <div className='border-b-2 border-gray-300 py-2'>
        <Link className='flex justify-between items-center hover:text-[#FF5A5F]' href='/latest'>
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
