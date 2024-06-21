import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../layouts/Dashboard";
import Profile from "../Pages/Employers/Profile";
import EmployerDashboard from "../Pages/Employers/UserDashboard";
import MyJobs from "../Pages/Employers/MyJobs";
import AllJobs from "../Pages/AllJobs";
import TransperentHeader from "../layouts/TransparentHeader";
import CommonHeader from "../layouts/CommonHeader";
import Candidates from "../Pages/Candidates";
import Login from "../Pages/Login";
import RequiredAuth from "../components/Shared/RequiredAuth";
import RequiredEmployer from "../components/Shared/RequiredEmployer";
import RequiredCandidate from "../components/Shared/RequiredCandidate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TransperentHeader />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            }
        ]
    },
    {
        path: "/",
        element: <CommonHeader />,
        children: [
            {
                path: "jobs",
                element: <AllJobs />,
            },
            {
                path: "candidates",
                element: <Candidates />,
            },

        ]
    },
    {
        path: "/employer",
        element: <RequiredAuth> <RequiredEmployer>
            <Dashboard />
        </RequiredEmployer> </RequiredAuth>,
        children: [
            {
                path: "dashboard",
                element: <EmployerDashboard />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "my-jobs",
                element: <MyJobs />
            },
        ]
    },
    {
        path: "/candidate",
        element: <RequiredAuth><RequiredCandidate>
            <Dashboard />
        </RequiredCandidate></RequiredAuth>,
        children: [
            {
                path: "dashboard",
                element: <EmployerDashboard />
            },
        ]
    },
    {
        path: "/home",
        element: <div>Hello Home!</div>,
    },
]);


export default router;