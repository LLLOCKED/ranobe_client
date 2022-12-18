import {Controller, useForm, SubmitHandler, UseFormRegister} from 'react-hook-form';
import Select from "react-select";
import {forwardRef} from "react";
import {useCreateRanobeMutation} from "../../store/services/ranobe.service";

type Inputs = {
    title: string;
    description: string;
    categories: { value: string; label: string }[];
};


export const Create = () => {
    const [createRanobe, {isLoading}] = useCreateRanobeMutation();


    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => createRanobe({
        title: data.title,
        description: data.description,
        categories: data.categories.map((category) => category.value)
    });

    return (
        <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Title' type='text' {...register('title', {required: true})} />
            <input placeholder='Description' type='text' {...register('description', {required: true})} />
            <Controller
                name="categories"
                control={control}
                render={({field}) =>
                    <Select
                        {...field}
                        isMulti
                        options={[
                            {value: "chocolate", label: "Chocolate"},
                            {value: "strawberry", label: "Strawberry"},
                            {value: "6399b6d9479bfe9049f495f6", label: "6399b6d9479bfe9049f495f6"}
                        ]}
                    />}
            />
            <input className='bg-orange-300' type='submit'/>
        </form>
    );
};
