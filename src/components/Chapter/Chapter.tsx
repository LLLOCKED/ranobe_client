'use client';

import Link from 'next/link';
import { FC, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BaseEditor, Descendant } from 'slate';
import { createEditor } from 'slate';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';
import { useGetChapterQuery } from 'src/store/services/chapter.service';

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string | undefined };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

interface IChapter {
  id: string;
}

export const Chapter: FC<IChapter> = ({ id }) => {
  const { data, isLoading } = useGetChapterQuery(id);

  const [editor] = useState(() => withReact(createEditor()));

  const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [{ text: `${data?.text}` }]
    }
  ];

  return (
    <div className='bg-white p-10 flex flex-col gap-6'>
      <div className='flex items-center gap-1'>
        <div className='bg-gray-50 p-3 shadow-sm h-full'>
          <Link href={`/ranobe/${data?.ranobeId}`}>
            <BiArrowBack />
          </Link>
        </div>
        <div className='w-full flex justify-between bg-gray-50 p-2 shadow-sm'>
          <span className='font-bold'>{data?.title}</span>
          <span>
            Volume {data?.volume} Chapter {data?.number}
          </span>
        </div>
      </div>
      <div className='container mx-auto px-40'>
        {data?.text ? (
          <Slate editor={editor} value={initialValue}>
            <Editable readOnly  />
          </Slate>
        ) : null}
      </div>
    </div>
  );
};
