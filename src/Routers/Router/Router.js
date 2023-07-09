import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MyAppointment from "../../pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../../pages/Dashboard/ManageDoctor/ManageDoctor";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Payment from "../../pages/Dashboard/Payment/Payment";
import DisplayError from "../../shared/DisplayError/DisplayError";
import Contact from "../../pages/Contact/Contact";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <DisplayError></DisplayError>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/appointment",
          element: <Appointment></Appointment>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoutes>
          <DashboardLayout></DashboardLayout>
        </PrivateRoutes>
      ),
      errorElement: <DisplayError></DisplayError>,
      children: [
        {
          path: "/dashboard",
          element: <MyAppointment></MyAppointment>,
        },
        {
          path: "/dashboard/allUsers",
          element: <AllUsers></AllUsers>,
        },
        {
          path: "/dashboard/addDoctor",
          element: <AddDoctor></AddDoctor>,
        },
        {
          path: "/dashboard/manageDoctors",
          element: <ManageDoctor></ManageDoctor>,
        },
        {
          path: "/dashboard/payment/:id",
          element: <Payment></Payment>,
          loader: ({ params }) =>
            fetch(
              `https://dental-care-server-ppyny589o-armanul144894.vercel.app/bookings/${params.id}`
            ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Router;
