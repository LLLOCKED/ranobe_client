'use client';

import Image from 'next/image';

import styles from './Random.module.scss';
import { useGetRanobesQuery } from '@store/services/ranobe.service';

import cover from '../../images/ranobe-prew.png';
import Button from '@components/ui/button/Button';
import { useRouter } from 'next/navigation';

const Random = () => {
  const router = useRouter();


  const { data: last, isLoading: isLoadingLast } = useGetRanobesQuery({
    take: 10,
    orderByUpdated: 'desc'
  });

  const item = last?.[Math.floor(Math.random() * last?.length)];

  return (
    <div className={styles['container-bg']}>
        <Image
          className={styles.bg}
          src={item?.image ? `http://localhost:5000/uploads/image/${item?.image}` : cover}
          alt='popular'
          fill
        />
    
      <div className={styles.card}>
        <div className='relative w-1/4 h-full'>
          <Image
            className='object-cover'
            src={item?.image ? `http://localhost:5000/uploads/image/${item?.image}` : cover}
            alt='title'
            fill
          />
        </div>
        <div className='flex flex-col space-y-4 w-3/4 py-4 pr-4 '>
          <span className='text-3xl'>{item?.title}</span>
          {/* <div className='text-sm flex items-center space-x-1'>
            <AiFillStar className='text-orange-400' />
            <span>8.2</span>
          </div> */}
          <p className='text-sm w-full line-clamp-4'>{item?.description}</p>
          <Button title='Читати' click={()=> router.push(`/ranobe/${item?.id}`)} />
        </div>
      </div>
    </div>
  );
};

export default Random;
