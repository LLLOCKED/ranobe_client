'use client';

import { CardsList } from '@components/cards-list/CardsList';
import { useGetRanobesQuery } from '@store/services/ranobe.service';

export const Home = () => {
  const { data: last, isLoading: isLoadingLast } = useGetRanobesQuery({
    take: 10,
    orderByCreated: 'desc'
  });
  const { data: popular, isLoading: isLoadingPopular } = useGetRanobesQuery({
    take: 10,
    orderByViews: 'desc'
  });

  return (
    <div className='container mx-auto py-6 px-10'>
      <CardsList title='Нові' data={last} isLoading={isLoadingLast} link='/new' />
      <CardsList title='Популярні' data={popular} isLoading={isLoadingPopular} link='/popular' />
    </div>
  );
};
