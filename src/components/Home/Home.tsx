'use client';

import { ListCard } from '@components/ui/ListCard';
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
      <ListCard title='Останні' data={last} isLoading={isLoadingLast} />
      <ListCard title='Популярні' data={popular} isLoading={isLoadingPopular} />
    </div>
  );
};
