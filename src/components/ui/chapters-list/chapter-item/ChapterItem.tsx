import Link from 'next/link';
import { FC } from 'react';
import { IChapterItem } from 'src/types/get-chapters';


const ChapterItem: FC<IChapterItem> = ({id, title, volume, number, createdAt, ranobeId}) => {
  return (
    <li className='py-3'>
      <Link href={`/ranobe/${ranobeId}/chapter/${id}`}>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <span>
              Volume {volume} Chapter {number}
            </span>
            <span>-</span>
            <span>{title}</span>
          </div>
          <div>{new Date(createdAt).toLocaleDateString()}</div>
        </div>
      </Link>
    </li>
  );
};

export default ChapterItem;
