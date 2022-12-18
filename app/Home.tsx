'use client';

import { ListCard } from '@components/ui/ListCard';
import { useGetRanobesQuery } from '../src/store/services/ranobe.service';

export const Home = () => {
    const { data: last, isLoading: isLoadingLast } = useGetRanobesQuery({
        take: 10,
        orderByUpdated: 'desc'
    });
    const { data: popular } = useGetRanobesQuery({ take: 10 });

    return (
        <div className='container mx-auto py-6 px-10'>
            {!isLoadingLast ? <ListCard title='Останні' data={last} /> : <span>Loading...</span>}
            <ListCard title='Популярні' data={popular} />
        </div>
    );
};
