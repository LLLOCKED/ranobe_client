import Image from 'next/image';
import image from '../../images/ranobe-prew.png';
import { AiFillEye, AiFillStar } from 'react-icons/ai';

export const Card = () => {
  return (
    <div className='bg-white p-2 flex flex-col space-y-2 shadow-md cursor-pointer border hover:border hover:border-amber-300 group'>
      <div className="relative">
        <Image src={image} alt='title' />
        <div className='hidden group-hover:flex absolute bg-black/[.80] top-0 left-0 w-full h-full text-white py-10 px-4 flex-col justify-between space-y-4'>
            <span>Опис:</span>
            <span className="text-sm line-clamp-6">“YOU IDIOT! I told you I don’t want to buy famous works like this on the release date. I
            don’t want to contribute to the initial sales of authors who sell more books than me!”
            The annual income of Yota Jin—a self-conscious light novel author whose work’s anime
            adaptation flopped—is 25 million yen. While he still managed to earn that much money
            despite the anime’s failure, it wasn’t anything special in this industry. There is
            always someone better. In such a rough industry, Yota has steeled himself for a daily
            life of a pro, however—his childhood friend that he hired as an assistant for the sake
            of tax measure, Yuma Kizuki, knows nothing about light novels.</span>
            <span className="text-sm text-amber-400 hover:text-amber-600">Дізнатися більше...</span>
        </div>
      </div>
      <div>
        <span className='font-bold'>Title</span>
      </div>
      <div className='text-sm flex items-center space-x-1'>
        <AiFillStar className='text-orange-400' />
        <span>8.2</span>
      </div>
      <div className='flex justify-between items-center text-sm text-gray-400'>
        <div className='flex items-center space-x-2'>
          <AiFillEye />
          <span>32</span>
        </div>
        <span>3 хвилини тому</span>
      </div>
    </div>
  );
};
