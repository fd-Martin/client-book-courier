import React from "react";
import { Outlet } from "react-router";


const AuthLayout = () => {
  return (
    <div className=" w-11/12 mx-auto md:flex items-center justify-center gap-20">
      <Outlet></Outlet>
      
    </div>
  );
};

export default AuthLayout;