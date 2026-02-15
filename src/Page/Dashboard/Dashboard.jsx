import React from "react";
import useRole from "../../hooks/useRole";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import LibrarianDashboard from "./LibrarianDashboard/LibrarianDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";

const Dashboard = () => {
  const { role } = useRole();
  // console.log(role);

  if (role === "admin") {
    return <AdminDashboard></AdminDashboard>;
  } else if (role === "librarian") {
    return <LibrarianDashboard></LibrarianDashboard>;
  } else {
    return <UserDashboard></UserDashboard>;
  }
};

export default Dashboard;
