import React from "react";

import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navber";
const HomeLayout = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto w-full flex-1">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
