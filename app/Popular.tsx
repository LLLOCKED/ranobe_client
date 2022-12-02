import Image from 'next/image';
import img from '../src/images/ranobe.jpg';
import imgPrew from '../src/images/ranobe-prew.png';
import { AiFillStar } from 'react-icons/all';

export const Popular = () => {
  return (
    <div className='w-full relative'>
      <Image className='object-cover h-[400px] blur-[2px] w-full' src={imgPrew} alt='popular' />
      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white shadow-md w-2/3 h-3/4'>
        <div className='w-1/4 h-full'>
          <Image className='w-full h-full object-cover' src={imgPrew} alt='title' />
        </div>
        <div className='flex flex-col space-y-4 w-3/4 py-4 pr-4 '>
          <span className='text-3xl'>Ranobe no Pro!</span>
          <div className='text-sm flex items-center space-x-1'>
            <AiFillStar className='text-orange-400' />
            <span>8.2</span>
          </div>
          <p className='text-sm w-full line-clamp-4'>
            “YOU IDIOT! I told you I don’t want to buy famous works like this on the release date. I
            don’t want to contribute to the initial sales of authors who sell more books than me!”
            The annual income of Yota Jin—a self-conscious light novel author whose work’s anime
            adaptation flopped—is 25 million yen. While he still managed to earn that much money
            despite the anime’s failure, it wasn’t anything special in this industry. There is
            always someone better. In such a rough industry, Yota has steeled himself for a daily
            life of a pro, however—his childhood friend that he hired as an assistant for the sake
            of tax measure, Yuma Kizuki, knows nothing about light novels.
          </p>
          <button className='bg-[#EFCB68] text-[#000411] py-1 px-4 mr-auto'>Читати</button>
        </div>
      </div>
    </div>
  );
};
