import { useEffect, useState } from "react";
import { useLoginMutation } from "../redux-rtk/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {

    // global
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [login, { isLoading, isSuccess }] = useLoginMutation();
    const [input, setInput] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    // if api call success then redirect to dashboard
    useEffect(() => {
        if (isSuccess && auth.isAuthenticated) {
            if (auth.role === 'candidate') {
                navigate('/candidate/dashboard')
            }
            if (auth.role === 'employer') {
                navigate('/employer/dashboard')
            }
        }
    }, [isSuccess, navigate, auth.isAuthenticated, auth.role])

    useEffect(() => {
        if (auth.isAuthenticated) {
            if (auth.role === 'candidate') {
                navigate('/candidate/dashboard')
            }
            if (auth.role === 'employer') {
                navigate('/employer/dashboard')
            }
        }
    }, [navigate, auth.isAuthenticated, auth.role])

    // login action
    const handleLogin = () => {
        const formData = new FormData();
        formData.append("data", JSON.stringify(input));
        login(formData)
    }

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="w-[300px] bg-blue-gray-100 p-5 flex flex-col gap-5">
                <input
                    type="text"
                    name="email"
                    className="enter email"
                    value={input.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    className="enter password"
                    value={input.password}
                    onChange={handleChange}
                />
                <button
                    type="button"
                    onClick={handleLogin}
                >
                    {isLoading ? "Loading" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default Login;