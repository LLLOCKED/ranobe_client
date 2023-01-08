'use client';

import { Card } from '@components/cards-list/card/Card';
import { useGetNotPublishedRanobesQuery } from '@store/services/ranobe.service';

const AdminPage = () => {
  const { data, isLoading } = useGetNotPublishedRanobesQuery({});
  return (
    <section>
      <div className='container mx-auto py-6 px-10'>
        <div>
          <div className='border-b-2 border-gray-300 py-2'>
            <span className='text-2xl font-bold'>Не опубліковані новели</span>
          </div>
          <ul className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 py-4'>
            {data?.map((ranobe) => {
              return (
                <li key={ranobe.id}>
                  <Card {...ranobe} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
