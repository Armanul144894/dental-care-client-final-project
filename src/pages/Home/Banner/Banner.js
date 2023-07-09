import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";
import bg from '../../../assets/images/Background@4x.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneVolume } from 'react-icons/fa6';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { BiSolidMessageRounded } from 'react-icons/bi';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    // <div className="banner-container  relative">
    //   <div className="flex flex-col-reverse justify-around pt-40 pb-64 lg:flex-row mx-10">
    //     <div className="text-start my-auto banner-content max-w-[665px] w-full">
    //       <h1 className="text-3xl font-bold">
    //         Your New Smile Starts <br /> Here
    //       </h1>
    //       <p className="mb-10">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum,
    //         ducimus tenetur unde molestias quia illo quas tempora architecto?
    //         Perspiciatis.
    //       </p>

    //       <PrimaryButton>Book consultion</PrimaryButton>
    //     </div>
    //     <div>
    //       <img className="chair-img " src={chair} alt="" />
    //     </div>
    //   </div>
    // </div>
    // < !--hero - section-- >
    <section className="hero relative w-full max-w-[1920px] mx-auto">
      <div className="lg:flex justify-between w-full px-5 2xl:px-[183px] pb-[150px]">
        {/* <!-- left side  --> */}
        <div className="lg:w-1/2 pt-[20px] lg:pt-[100px]">
          <div className="w-full max-w-[700px]">
            <h1 className="text-[38px] lg:text-[50px] font-['Poppins'] font-semibold lg:leading-[60px] text-[#252B42]">
              Empowering Mental Well-being: Predictive Insights and Personalized Consultation
            </h1>
            <p className="font-['Poppins'] text-xl leading-[22px] text-[#737373] text-justify py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dignissimos quod quaerat harum amet itaque non cumque et hic delectus excepturi reprehenderit est reiciendis eveniet temporibus doloribus aliquam blanditiis atque!
            </p>

            <div className="relative flex justify-center lg:justify-start">
              <Link to='/appointment'>
                <button className="text-base text-white px-[33px] py-[10px] bg-[#008575] rounded-[5px]">
                  Book For Free Counciling
                </button>
              </Link>
              <img className="absolute top-[-30px] right-[280px] max-w-[70px] hidden lg:block" src="Assets/icon/arrows.png"
                alt="" />
            </div>

            <div className="flex justify-center lg:justify-start gap-6 py-6">
              <p className="font-['Montserrat'] text-[#252B42] text-sm flex  items-center">
                <AiOutlineCheck className="text-[#008575] mr-1 font-bold rounded-full border border-1 border-[#008575]" />
                <span>Free Counseling</span>
              </p>
              <p className="font-['Montserrat'] text-[#252B42] text-sm flex  items-center">
                <AiOutlineCheck className="text-[#008575] mr-1 font-bold rounded-full border border-1 border-[#008575]" />
                <span>Great Service</span>
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-6">
              <FaFacebookF size={20} />
              <FaLinkedinIn size={20} />
              <FaInstagram size={20} />
              <BiSolidMessageRounded size={20} />
            </div>
          </div>
        </div>

        {/* <!-- right side  --> */}
        <div className="lg:w-1/2 pt-[60px] flex justify-end">
          <img className="max-h-[570px]" src={bg} alt="" />
        </div>
      </div>

      {/* <!-- card  --> */}
      <div className="absolute bottom-[-60px] lg:bottom-[-90px] w-full px-5">
        <div className="flex gap-[10px] lg:gap-16 justify-center">

          <a href="tel:01919101030" className="working-card p-[10px] lg:p-[30px]">
            <FaPhoneVolume className="text-[30px] lg:text-[70px] text-[#008575] mb-2" />
            <h1 className="font-semibold text-[12px] lg:text-xl font-['Montserrat'] text-[#252B42] text-center">
              Talk with our Counselors
            </h1>
          </a>

          <a href="/appointment" className="working-card p-[10px] lg:p-[30px]">
            <MdDateRange className="text-[30px] lg:text-[70px] text-white mb-2" />
            <h1 className="font-semibold text-[12px] lg:text-xl font-['Montserrat'] text-[white] text-center">
              Book an Appointment
            </h1>
          </a>

          <div className="working-card p-[10px] lg:p-[30px]">
            <BiSolidMessageRounded className="text-[30px] lg:text-[70px] text-[#008575] mb-2" />
            <h1 className="font-semibold text-[12px] lg:text-xl font-['Montserrat'] text-[#252B42] text-center">
              Advice on Bank Sponsor
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
