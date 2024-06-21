import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequiredCandidate = ({ children }) => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (auth.role !== 'candidate') {
            navigate('/login')
        }
    }, [auth.role, navigate])

    return children;
};

export default RequiredCandidate;