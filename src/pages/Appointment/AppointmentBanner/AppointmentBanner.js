import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div className="flex flex-col gap-10 justify-around items-center pt-20 pb-20 lg:flex-row-reverse mx-10">
        <div>
          <img className="max-w-sm " src={chair} alt="" />
        </div>

        <div>
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
