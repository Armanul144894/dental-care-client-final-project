import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentOption = ({
  appointmentOption,
  openModal,
  setTreatment,

}) => {
  const { name, slots, price } = appointmentOption;

  return (
    <div
      key={appointmentOption._id}
      className="card max-w-[440px] w-full bg-base-100 shadow-xl mx-auto"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[#19D3AE] text-[20px] font-[600]">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>Fees: {price}$ </p>
        {slots.length === 0 ? (
          <button
            className="bg-gray-500 btn-disabled btn rounded "
            onClick={openModal}
          >
            Book Appointment
          </button>
        ) : (
          <label onClick={openModal}>
            <div onClick={() => setTreatment(appointmentOption)}>
              <button className="text-base text-white px-[33px] py-[10px] hover:bg-[#008575] bg-[#13a998] rounded-[5px]">
                Book Appointment
              </button>
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default AppointmentOption;
