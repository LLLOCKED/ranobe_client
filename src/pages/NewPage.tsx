'use client'

import { CardsList } from '@components/cards-list/CardsList';
import { useGetRanobesQuery } from '@store/services/ranobe.service';

const NewPage = () => {
  const { data: last, isLoading: isLoadingLast } = useGetRanobesQuery({
    take: 10,
    orderByCreated: 'desc'
  });
  return (
    <section>
      <div className='container mx-auto py-6 px-10'>
        <CardsList title='Нові' isLoading={isLoadingLast} data={last} link='/new' />
      </div>
    </section>
  );
};

export default NewPage;
