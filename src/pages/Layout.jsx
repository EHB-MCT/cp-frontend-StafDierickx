import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function Layout({children}) {
    return (
        <>
            <Header />
                <div className="center-body">
                    <Outlet />
                </div>
            <Footer />
        </>
    )
}

export default Layout