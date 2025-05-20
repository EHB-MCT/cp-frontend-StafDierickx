import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="center-body">
          <Outlet />
        </div>
        <br/>
        <br/>
        <br/>
      <Footer />
    </>
  )
}

export default Layout