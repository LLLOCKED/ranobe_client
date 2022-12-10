'use client';
import { Login } from '@components/Login/Login';
import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <div className='container mx-auto flex justify-center'>
        <div className='my-4 p-8 flex flex-col w-1/2 bg-white '>
          <Login />

          <Link className='text-center' href='/signup'>
            <span>Якщо ви ще не маєте акаунту, то перейдіть на сторінку Реєстрація</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
