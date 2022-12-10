import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../store/slices/user.slice";
import {RootState} from "../../../store/store";
import {useCookies} from "react-cookie";

export const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['logged_in']);

  const user = useSelector((state: RootState) => state.userState.user);
  const dispatch = useDispatch()

  const clickLogout = () => {
    dispatch(logout());
    removeCookie('logged_in');
  }

  return (
    <header className='text-[#160C28] bg-[#EFCB68]'>
      <div className='relative container mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-between '>
        <div className='flex flex-col lg:flex-row items-center lg:space-x-20'>
          <span className='text-2xl'>
            <Link href='/'>RanobeUA</Link>
          </span>
          <nav>
            <ul className='flex flex-col lg:flex-row lg:space-x-8 text-center'>
              <li>Останні</li>
              <li>
                <Link href='/new'>Нові</Link>
              </li>
              <li>Популярні</li>
              <li>Категорії</li>
              <li>Випадкове</li>
            </ul>
          </nav>
        </div>
        <div>
          {!user ?
              <span>
            <Link href='/login'>Вхід</Link>
          </span>
              :
              <span>
            <button onClick={clickLogout}>Вихід</button>
          </span>
          }
        </div>
      </div>
    </header>
  );
};
