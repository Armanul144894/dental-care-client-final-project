import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login.png";
import logo from "../../assets/images/logo.png";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { googleSignIn, signIn, setUser } = useContext(AuthContext);

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const location =useLocation()
  const navigate =useNavigate()

  const from =location.state?.from?.pathname || '/'

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    setLoginError("");

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        setLoginUserEmail(email);
        navigate(from,{replace:true})
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
      
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from,{replace:true})
      })
      .catch((error) => console.log(error));

  };
  return (
    <div className="hero min-h-screen container mx-auto">
      <div className="hero-content flex-col-reverse lg:flex-row gap-28 h-full">
        <div className="flex-shrink-0 max-w-[500px] w-full ">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 max-w-[500px] w-full shadow-2xl bg-base-100">
          <div className="pt-8">
            <img className="w-10 h-10  mx-auto" src={logo} alt="" />
            <h1 className="text-2xl text-center font-bold">Login</h1>
          </div>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Login</PrimaryButton>
            </div>
          </form>
          <div className="card-body">
            <p className="text-[12px] font-bold text-center">
              New to Dental Care?{" "}
              <Link to="/register">
                <span className="text-[#19D3AE]">Create new account</span>
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline rounded w-full text-[#3A4256] text-[16px] font-[400]"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
