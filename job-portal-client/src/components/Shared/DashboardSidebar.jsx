import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { PresentationChartBarIcon, UserCircleIcon, Cog6ToothIcon, PowerIcon, XMarkIcon, Bars3Icon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../redux-rtk/features/auth/authSlice";

const sidebarItems = [
    { icon: PresentationChartBarIcon, label: 'Dashboard', path: 'dashboard' },
    { icon: UserCircleIcon, label: 'Profile', path: 'profile' },
    { icon: BriefcaseIcon, label: 'My Jobs', path: 'my-jobs' },
    { icon: UserCircleIcon, label: 'Profile', path: '/profile' },
    { icon: Cog6ToothIcon, label: 'Settings', path: '/settings' },
];


const DashboardSidebar = ({
    isSidebarOpen,
    // setIsSidebarOpen, 
    toggleSidebar
}) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userLoggedOut())
    }

    return (
        <div className="relative sidebar">

            <div className={`fixed -inset-10 bg-black bg-opacity-50 transition-opacity md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>

            <Card className={`fixed top-0 inset-y-0 left-0 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:h-[calc(100vh-2rem)] w-[20rem] p-4 shadow-md shadow-blue-gray-900/5 border-r border-gray-200`}>

                <button
                    className="md:hidden p-2"
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
                <div className="mb-2 p-4">
                    <div className="flex gap-2 items-center">
                        <figure className="avatar w-[90px] h[90px]">
                            <img src="https://cloudshee.com.au/wp-content/themes/superio/images/placeholder.png" alt="" className="w-full h-auto object-cover border border-primary-light rounded-md" />
                        </figure>
                        <div>
                            <h2 className="title text-base font-bold mb-2">RazuAhmedJoy</h2>
                            <Link to={'/user-dashboard'} className="btn btn-sm bg-primary text-white p-1 px-2 rounded">View Profile</Link>
                        </div>
                    </div>
                </div>
                <List>
                    {sidebarItems.map((item, index) => (
                        <Link to={item.path} key={index}>
                            <ListItem
                                className='hover:bg-primary-light hover:text-primary focus:bg-primary-light focus:text-primary duration-200 ease-linear'
                                path={item.path}
                            >
                                <ListItemPrefix>
                                    <item.icon className="h-5 w-5" />
                                </ListItemPrefix>
                                {item.label}
                            </ListItem>
                        </Link>
                    ))}

                    <ListItem
                        className='hover:bg-primary-light hover:text-primary focus:bg-primary-light focus:text-primary duration-200 ease-linear'
                        onClick={handleLogout}
                    >
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Logout
                    </ListItem>

                </List>
            </Card>
        </div>
    );
}
export default DashboardSidebar;