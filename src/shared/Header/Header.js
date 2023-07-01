import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

import logo from "../../assets/images/dental-care.png";
import { Toaster, toast } from "react-hot-toast";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleSignOut = () => {
    LogOut()
      .then(() => {
        toast("Logout Successfully");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>

      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <div onClick={handleSignOut}>
              <PrimaryButton>Sign Out</PrimaryButton>
            </div>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52 rounded-box text-[16px] font-[400]"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl text-[#19D3AE] flex items-center gap-2 "
        >
          <img className="w-12 h-12 " src={logo} alt="" />
          <span> Dental Care</span>
        </Link>
      </div>

      <div className="hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-[16px] font-[400] flex justify-center items-center">
          {menuItems}
        </ul>
      </div>
      <Toaster />
    </div>
  );
};

export default Header;
