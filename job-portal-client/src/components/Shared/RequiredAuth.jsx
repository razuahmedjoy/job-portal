import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RequiredAuth = ({ children }) => {

    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate('/login')
        }
    }, [auth.isAuthenticated, navigate])

    return children;
};

export default RequiredAuth;