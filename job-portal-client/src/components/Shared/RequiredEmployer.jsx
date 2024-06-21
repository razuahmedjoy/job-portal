import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequiredEmployer = ({ children }) => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (auth.role !== 'employer') {
            navigate('/login')
        }
    }, [auth.role, navigate])

    return children;
};

export default RequiredEmployer;