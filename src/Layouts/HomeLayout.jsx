import React from "react";

import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer";
;

const HomeLayout = () => {
  return (
    <div className="w-full">
      
      <Outlet></Outlet>
<Footer></Footer>
    </div>
  );
};

export default HomeLayout;