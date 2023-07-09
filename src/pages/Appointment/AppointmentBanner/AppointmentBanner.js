import React from "react";
// import chair from "../../../assets/images/motopress-appointment-731x548.jpg";
import { DayPicker } from "react-day-picker";


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div className="flex flex-col gap-10 justify-center items-center pt-10 pb-10 lg:flex-row-reverse bg-[#008575]">
        {/* <div className="max-w-[600px]">
          <img className="w-full" src={chair} alt="" />
        </div> */}

        <div className="bg-white p-10 rounded-2xl">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
