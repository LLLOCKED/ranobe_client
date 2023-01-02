import { FC } from 'react';
import { IChapterItem } from 'src/types/get-chapters';
import ChapterItem from './chapter-item/ChapterItem';

interface IChapter {
  title: string;
  chapters: IChapterItem[];
}

const ChaptersList: FC<IChapter> = ({ title, chapters }) => {
  return (
    <div>
      <div className='border-b-2 border-gray-300 py-2'>
        <span className='text-2xl font-bold'>{title}</span>
      </div>
      <ul className='divide-y divide-slate-200'>
        {chapters?.map((chapter) => {
          return <ChapterItem key={chapter.id} {...chapter} />;
        })}
      </ul>
    </div>
  );
};

export default ChaptersList;
