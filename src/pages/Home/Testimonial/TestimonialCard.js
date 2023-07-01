import React from "react";

const TestimonialCard = ({ comment }) => {
  const { name, city, details, image } = comment;
  return (
    <div className="card max-w-[395px] w-full bg-base-100 shadow-xl mx-auto mt-16">
      <div className="card-body items-center ">
        <p>{details}</p>
      </div>
      <div className="px-10 pt-6 pb-6 flex gap-3 items-center">
        <div className="avatar">
          <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
            <img className="w-[75px] h-[75px]" src={image} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-[20px] font-[600]">{name}</h1>
          <h1>{city}</h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
