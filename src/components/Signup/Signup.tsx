'use client';

import { useRegisterMutation } from '@store/services/auth.service';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './Signup.module.scss';

type Inputs = {
  email: string;
  name: string;
  password: string;
};

export const Signup = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const [registerUser] = useRegisterMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    registerUser(data);
    router.push('/login');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='email' type='email' {...register('email', { required: true })} />
      <input placeholder='name' type='text' {...register('name', { required: true })} />
      <input placeholder='password' type='password' {...register('password', { required: true })} />
      {/*{errors.email && <span>Email field is required</span>}*/}
      {/*{errors.password && <span>Password field is required</span>}*/}
      <input className='bg-orange-300' type='submit' />
    </form>
  );
};
