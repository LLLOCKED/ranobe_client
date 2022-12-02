import Link from 'next/link';
import { ListCard } from '@components/ui/ListCard';

export const Home = () => {
  return (
    <div className='container mx-auto py-6 px-10'>
      <ListCard title="Останні" />
      <ListCard title="Популярні" />
    </div>
  );
};
