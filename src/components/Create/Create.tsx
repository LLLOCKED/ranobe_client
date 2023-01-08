'use client';

import { useCreateRanobeMutation, useGetCategoriesQuery } from '@store/services/ranobe.service';
import { useRouter } from 'next/navigation';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import Select from 'react-select';

import styles from './Create.module.scss';

type Inputs = {
  title: string;
  description: string;
  categories: { value: string; label: string }[];
  image: FileList;
};

export const Create = () => {
  const router = useRouter();
  const [createRanobe, { isLoading }] = useCreateRanobeMutation();

  const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery({});

  const options = categories?.map((category) => {
    return { value: category.value, label: category.name };
  });


  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    data.categories.map((category) => formData.append('categories', category.value));
    formData.append('image', data.image[0]);

    createRanobe(formData);
    router.push('/profile');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Title' type='text' {...register('title', { required: true })} />
      <textarea placeholder='Description' {...register('description', { required: true })} />
      <Controller
        name='categories'
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            isMulti
            options={options}
          />
        )}
      />
      <input type='file' {...register('image')} />
      <input className='bg-[#087E8B] text-[#F5F5F5] cursor-pointer' type='submit' />
    </form>
  );
};
