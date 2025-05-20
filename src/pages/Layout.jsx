import React from "react";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
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