import {useCookies} from 'react-cookie';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {usePathname} from 'next/navigation';
import {useDispatch, useSelector} from 'react-redux';
import {logout, userSlice} from '../store/slices/user.slice';
import {authApi, useProfileQuery} from "../store/services/auth.service";
import {RootState} from "../store/store";

const AuthVerify = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [cookies] = useCookies(['logged_in']);

    const isLogged = useSelector((state: RootState) => state.userState.isLogged)
    const dispatch = useDispatch();

    const [trigger, result] = authApi.endpoints.profile.useLazyQuery();


    useEffect(() => {
        if (!cookies.logged_in) {
            dispatch(logout());
        }else{
            trigger(null);
        }
    }, [pathname]);

    return <></>;
};

export default AuthVerify;
