import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import login from "../../assets/images/login.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { googleSignIn, createUser, updateUser, setUser } =
    useContext(AuthContext);

  const [signupError, setSignupError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (data) => {
    const email = data.email;
    const password = data.password;
    setSignupError("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.log(error));
        navigate("/");
        toast.success("Sign Up Successfully");
        reset();
      })
      .catch((error) => {
        console.error(error);
        setSignupError(error.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setCreatedUserEmail(email);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen container mx-auto">
      <div className="hero-content flex-col-reverse lg:flex-row gap-28 h-full">
        <div className="flex-shrink-0 max-w-[500px] w-full ">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 max-w-[500px] w-full shadow-2xl bg-base-100">
          <div className="mt-8">
            <h1 className="text-2xl text-center font-bold">Sign Up</h1>
          </div>
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered rounded"
                {...register("name", { required: true, maxLength: 20 })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered rounded"
                {...register("email", { required: true, maxLength: 20 })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered rounded"
                {...register("password", { required: true, maxLength: 20 })}
              />
              <label className="label">
                <Link to="/login">Forgot password?</Link>
              </label>
            </div>
            <div>
              {signupError && <p className="text-red-600">{signupError}</p>}
            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Register</PrimaryButton>
            </div>
          </form>
          <div className="card-body">
            <p className="text-[12px] font-bold text-center">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#19D3AE]">Please Login</span>
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline rounded w-full text-[#3A4256] text-[16px] font-[400] "
            >
              Continue With Google
            </button>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Register;
