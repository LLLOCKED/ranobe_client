import Link from "next/link";
import {Card} from "@components/ui/Card";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface IListCard {
    title: string;
}

export const ListCard = ({title}:IListCard) => {
  return (
      <div>
          <div className='border-b-2 border-gray-300 py-2'>
              <Link className='flex justify-between items-center hover:text-amber-500' href='/latest'>
                  <span className='text-2xl font-bold'>{title}</span>
                  <span>Більше 🠒</span>
              </Link>
          </div>
          <div className='grid xl:grid-cols-5 xl:grid-rows-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 py-4'>
              {cards.map((card) => {
                  return <Card key={card} />;
              })}
          </div>
      </div>
  )
}