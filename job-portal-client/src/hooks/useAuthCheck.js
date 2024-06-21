import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { profileLog, userLoggedIn } from '../redux-rtk/features/auth/authSlice';

const apiBaseUrl = import.meta.env.VITE_API_URL;

export default function useAuthCheck() {

    // global and states
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        // get data from cookie
        const accessToken = Cookies.get('accessToken');
        const _id = Cookies.get('_id');

        if (accessToken && _id) {
            const headers = { Authorization: `Bearer ${accessToken}` };

            // getting logged user data
            fetch(`${apiBaseUrl}auth/profile`, { headers })
                .then(response => response.json())
                .then(data => {
                    dispatch(profileLog(data.data))

                    // storing data from cookies
                    dispatch(
                        userLoggedIn({
                            accessToken: accessToken,
                            isAuthenticated: true,
                            _id: _id,
                            role: data.data.role
                        })
                    );
                })
                .catch(error => console.error(error));
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]);

    return authChecked;
}