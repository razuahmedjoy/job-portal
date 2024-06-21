import React from 'react';
import NavbarComponent from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const CommonHeader = () => {

    return (
        <>
            <NavbarComponent />
            <main className='w-full mx-auto'>

                <Outlet />
            </main>
            <Footer />
        </>
    )
};

export default CommonHeader;