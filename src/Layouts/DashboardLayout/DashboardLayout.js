import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "../../shared/Header/Header";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  return (
    <div>
      <Header></Header>

      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 ">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            {
              <div>
                <li>
                  <Link to="/dashboard/allUsers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/addDoctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageDoctors">Manage Doctor</Link>
                </li>
              </div>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
