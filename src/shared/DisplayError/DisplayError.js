import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const DisplayError = () => {
  const { LogOut } = useContext(AuthContext);

  const error = useRouteError();
  const navigate = useNavigate();

  const handleSignOut = () => {
    LogOut()
      .then(() => {
        toast("Logout Successfully");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <p className="text-red-500 text-xl">Something went wrong</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h1>
        <h1 onClick={handleSignOut}>
          <PrimaryButton>Sign Out</PrimaryButton>
        </h1>
      </h1>
      <Toaster></Toaster>
    </div>
  );
};

export default DisplayError;
