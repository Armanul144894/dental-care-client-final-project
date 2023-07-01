import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="rounded-md text-white border-0 btn btn-primary bg-gradient-to-r from-primary to-secondary font-bold text-[14px] px-5">
      {children}
    </button>
  );
};

export default PrimaryButton;
