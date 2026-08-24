import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* outlet */}
            <div className="min-h-[calc(100vh-303px)]">
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;