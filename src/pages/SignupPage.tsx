import { Signup } from "@components/Signup/Signup";
import Link from "next/link";

const SignupPage = () => {
    return(
        <section>
        <div className='container mx-auto flex justify-center'>
          <div className='my-4 p-8 flex flex-col w-1/2 bg-white '>
            <Signup />
  
            <Link className='text-center' href='/login'>
              <span>Якщо ви вже маєте акаунт, то перейдіть на сторінку Вхід </span>
            </Link>
          </div>
        </div>
      </section>
    )
}

export default SignupPage;