'use client'

import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    email: string,
    name: string,
    password: string,
};

export  const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return(
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="email" type="email" {...register("email", {required: true})} />
            <input placeholder="name" type="text" {...register("name", {required: true})}/>
            <input placeholder="password" type="password" {...register("password", { required: true })} />
            {/*{errors.email && <span>Email field is required</span>}*/}
            {/*{errors.password && <span>Password field is required</span>}*/}
            <input className="bg-orange-300" type="submit" />
        </form>
    )
}