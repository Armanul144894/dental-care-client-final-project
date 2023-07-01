import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="banner-container  relative">
      <div className="flex flex-col-reverse justify-around pt-40 pb-64 lg:flex-row mx-10">
        <div className="text-start my-auto banner-content max-w-[665px] w-full">
          <h1 className="text-3xl font-bold">
            Your New Smile Starts <br /> Here
          </h1>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum,
            ducimus tenetur unde molestias quia illo quas tempora architecto?
            Perspiciatis.
          </p>

          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <div>
          <img className="chair-img " src={chair} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
