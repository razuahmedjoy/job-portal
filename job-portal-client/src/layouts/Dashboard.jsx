import { useState } from 'react';
import NavbarComponent from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import DashboardSidebar from '../components/Shared/DashboardSidebar';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className='w-full max-h-screen overflow-hidden'>
                <NavbarComponent />
                <div className='flex h-[calc(100vh-5rem)] overflow-hidden'>

                    <DashboardSidebar
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />

                    <div className="content bg-[#F5F7FC] w-full flex-grow p-3 md:p-8 lg:p-12 overflow-y-auto">
                        <button
                            className="md:hidden flex items-center gap-2"
                            onClick={toggleSidebar}
                        >
                            {!isSidebarOpen && <Bars3Icon className="h-5 w-5" />}
                            View Sidebar
                        </button>


                        <Outlet />

                    </div>

                </div>

            </div>


        </>
    );
};

export default Dashboard;