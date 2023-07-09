import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { HiBars4 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import './Header.css'

import logo from "../../assets/logo/Picture1.png";
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
    // <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52 rounded-box text-[16px] font-[400]"
    //       >
    //         {menuItems}
    //       </ul>
    //     </div>
    //     <Link
    //       to="/"
    //       className="btn btn-ghost normal-case text-xl text-[#19D3AE] flex items-center gap-2 "
    //     >
    //       <img className="w-[320px]" src={logo} alt="" />
    //     </Link>
    //   </div>

    //   <div className="hidden lg:flex ">
    //     <ul className="menu menu-horizontal px-1 text-[16px] font-[400] flex justify-center items-center">
    //       {menuItems}
    //     </ul>
    //   </div>
    //   <Toaster />
    // </div>
    <nav
      class="sticky top-0 z-30 w-full bg-[#F0FFFC] px-5 2xl:px-[183px] border-b-[0.07px] border-[#EAEAEA] font-['Poppins'] shadow-md">
      <div class="wrapper">
        <div class="logo">
          <a href="index.html"><img class="w-[250px]" src={logo} alt="" />
          </a>
        </div>

        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />

        <ul class="nav-links">
          <label for="close-btn" class="btn close-btn inline">
            <RxCross1></RxCross1>
          </label>

          {/* <!-- home  --> */}
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* <!-- ABOUT US --> */}
          <li>
            <Link to="/about">About</Link>
          </li>

          {/* <!-- appointment --> */}
          <li>
            <Link to="/appointment">Appointment</Link>
          </li>

          {/* <!-- contact us  --> */}
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          {/* <!-- CONTACT US  --> */}
          <li>
            {
              user?.uid ?
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                :
                <li>

                </li>

            }
          </li>

          {/* <!-- call us  --> */}
          <li class="pl-3 py-[13px] flex items-center md:hidden">
            <div class="flex gap-[5px] items-center text-[#006CEC] text-xs lg:text-sm font-medium">
              {
                user?.uid ? (
                  <>
                    <button onClick={handleSignOut} class="text-[#008575] text-[20px] border border-[#008575] px-[24px] py-[14px] rounded-[8px]">
                      Logout
                    </button>
                  </>
                ) : (
                  <button class="text-[#008575] border border-[#008575] text-[20px] px-[24px] py-[14px] rounded-[8px]">
                    <Link to="/login">Login</Link>
                  </button>
                )
              }
            </div>
          </li>
        </ul>

        <div class="hidden xl:block">
          <div class="flex gap-[5px] items-center text-[#006CEC] text-xs lg:text-sm font-medium">
            {
              user?.uid ? (
                <>
                  <button onClick={handleSignOut} class="text-[#008575] text-[20px] border border-[#008575] px-[24px] py-[14px] rounded-[8px]">
                    Logout
                  </button>
                </>
              ) : (
                <button class="text-[#008575] border border-[#008575] text-[20px] px-[24px] py-[14px] rounded-[8px]">
                  <Link to="/login">Login</Link>
                </button>
              )
            }
          </div>
        </div>

        <label for="menu-btn" class="btn menu-btn">
          <HiBars4 className="h-12"></HiBars4>
        </label>
      </div>
    </nav>
  );
};

export default Header;
