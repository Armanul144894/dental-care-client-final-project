import React from "react";
import treatment from "../../../assets/images/Finding-a-therapist.jpeg";

const ServiceDetails = () => {
  return (
    <div className="my-40 max-w-[1282px] mx-auto">
      <div className="">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src={treatment}
              alt=""
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:mx-10">
            <h1 className="text-5xl font-bold">
              Exceptional Therapy Guide, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="text-base text-white px-[33px] py-[10px] bg-[#008575] rounded-[5px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
