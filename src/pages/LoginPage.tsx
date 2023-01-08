import { Login } from '@components/Login/Login';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <section>
      <div className='container mx-auto py-10 flex justify-center'>
        <div className=' flex flex-col w-1/2 bg-white p-10'>
          <Login />

          <Link className='text-center' href='/signup'>
            <span>Якщо ви ще не маєте акаунту, то перейдіть на сторінку Реєстрація</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
