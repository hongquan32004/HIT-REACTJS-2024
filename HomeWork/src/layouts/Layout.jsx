import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/HeaderD11/HeaderD11";


const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;