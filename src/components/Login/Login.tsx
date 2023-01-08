'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { useLoginMutation } from '../../store/services/auth.service';

import styles from './Login.module.scss';

type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const router = useRouter();

  const user = useSelector((state: RootState) => state.userState.user);
  const [loginUser, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    loginUser(data);
    router.push('/');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='email' type='email' {...register('email', { required: true })} />
      <input placeholder='password' type='password' {...register('password', { required: true })} />
      {/*{errors.email && <span>Email field is required</span>}*/}
      {/*{errors.password && <span>Password field is required</span>}*/}
      <input className='bg-[#087E8B] text-[#F5F5F5] cursor-pointer' type='submit' />
    </form>
  );
};
