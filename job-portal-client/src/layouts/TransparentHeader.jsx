import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";


function TransperentHeader() {


    return (
        <>
            <NavbarComponent transparent />

            <Outlet />
            <Footer />
        </>
    )
}

export default TransperentHeader
