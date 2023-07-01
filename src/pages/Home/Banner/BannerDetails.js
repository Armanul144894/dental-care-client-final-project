import React from "react";

const BannerDetails = ({ bannerItem }) => {
  const { image, title, description, color } = bannerItem;

  return (
    <div
      style={{ background: `${color}`, backgroundRepeat: "no-repeat" }}
      className="card w-full max-w-[450px] h-[190px] mx-auto card-side shadow-xl flex items-center justify-center px-10 text-white"
    >
      <figure>
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BannerDetails;
