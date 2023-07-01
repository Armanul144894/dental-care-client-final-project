import React from 'react';
import doctor from "../../../assets/images/doctor-small.png";
import background from "../../../assets/images/appointment.png";
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
      }}
      className="mt-52"
    >
      <div className="hero">
        <div className="hero-content lg:p-0 flex-col lg:flex-row ">
          <img
            src={doctor}
            alt=""
            className="lg:w-1/2 h-full -mt-28 hidden lg:block md:block"
          />
          <div className="max-w-[534px] w-full mx-auto ">
            <h1 className="font-bold text-xl text-secondary">Appointment</h1>
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
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
    );
};

export default MakeAppointment;


