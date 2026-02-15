import React from "react";
import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AutheticationLayout";
import HomeLayout from "../Layouts/HomeLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Register from "../Page/Authentication/Register";
import Login from "../Page/Authentication/Login";
import Home from "../Page/Home/Home";
import AllBooks from "../Page/AllBooks/AllBooks";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../Components/BookDetails/BookDetails";
import MyProfile from "../Page/Dashboard/UserDashboard/MyProfile/MyProfile";
import MyOrders from "../Page/Dashboard/UserDashboard/MyOrders/MyOrders";
import PaymentHistory from "../Page/Dashboard/UserDashboard/PaymentHistory/PaymentHistory";
import LibrarianRoute from "./LibrarianRoute";
import AddBook from "../Page/Dashboard/LibrarianDashboard/AddBook/AddBook";
import MyBooks from "../Page/Dashboard/LibrarianDashboard/MyBooks/MyBooks";
import Bookedit from "../Components/Bookedit/Bookedit";
import Orders from "../Page/Dashboard/LibrarianDashboard/Orders/Orders";
import AdminRoute from "./AdminRoute";
import Users from "../Page/Dashboard/AdminDashboard/Users/Users";
import ManageBooks from "../Page/Dashboard/AdminDashboard/ManageBooks/ManageBooks";
import PaymentSuccess from "../Page/Dashboard/Payment/PaymentSuccess/PaymentSuccess";
import PaymentCancelled from "../Page/Dashboard/Payment/PaymentCancel/PaymentCancel";
import WishList from "../Page/Dashboard/UserDashboard/WishList/WishList";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-books",
        Component: AllBooks,
      },
      {
        path: "book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
      },
    ],
  },
  {
    path: "authentication",
    Component: AuthLayout,

    children: [
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "*",
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),

    children: [
      {
        path: "my-profile",
        Component: MyProfile,
      },
      {
        path: "my-orders",
        Component: MyOrders,
      },
      {
        path: "invoices",
        Component: PaymentHistory,
      },
      {
        path: "add-book",
        element: (
          <LibrarianRoute>
            <AddBook></AddBook>
          </LibrarianRoute>
        ),
      },
      {
        path: "my-books",
        element: (
          <LibrarianRoute>
            <MyBooks></MyBooks>
          </LibrarianRoute>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <LibrarianRoute>
            <Bookedit></Bookedit>
          </LibrarianRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <LibrarianRoute>
            <Orders></Orders>
          </LibrarianRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "manage-books",
        element: (
          <AdminRoute>
            <ManageBooks></ManageBooks>
          </AdminRoute>
        ),
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      {
        path: "wishlist",
        Component: WishList,
      },
      {
        path: "*",
      },
    ],
  },
]);

export default Router;
