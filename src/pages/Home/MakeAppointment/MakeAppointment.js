import React from 'react';
import doctor from "../../../assets/images/doctor-small.png";
import background from "../../../assets/images/appointment.png";


const MakeAppointment = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
      }}
      className="mt-52"
    >
      <div className="max-w-[1282px] mx-auto">
        <div className="flex lg:p-0 flex-col lg:flex-row lg:justify-between">
          <img
            src={doctor}
            alt=""
            className="lg:w-1/2 h-full -mt-28 hidden lg:block md:block"
          />
          <div className="max-w-[534px] w-full mx-auto my-auto">
            <h1 className="font-bold text-xl text-[#008575]">Appointment</h1>
            <h1 className="text-4xl font-bold text-white ">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
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
    </section>
  );
};

export default MakeAppointment;


