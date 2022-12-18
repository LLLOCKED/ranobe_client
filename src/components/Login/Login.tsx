import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '../../store/services/auth.service';
import {log} from "util";

type Inputs = {
  email: string;
  password: string;
};
 
export const Login = () => {
  const [loginUser, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => loginUser(data);
  return (
    <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='email' type='email' {...register('email', { required: true })} />
      <input placeholder='password' type='password' {...register('password', { required: true })} />
      {/*{errors.email && <span>Email field is required</span>}*/}
      {/*{errors.password && <span>Password field is required</span>}*/}
      <input className='bg-orange-300' type='submit' />
    </form>
  );
};
