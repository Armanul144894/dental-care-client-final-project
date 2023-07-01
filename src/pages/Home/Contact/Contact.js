import React from "react";
import background from '../../../assets/images/appointment.png'
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section style={{background:`url(${background})`,backgroundSize:"100% 100%"}} className="text-center py-20">
      <div className="text-center mb-10">
        <h1 className="text-[20px] font-bold text-[#19D3AE]">Contact Us</h1>
        <h1 className="text-4xl font-[400]  text-white">Stay connected with us</h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered rounded-[8px] border-0 w-full max-w-[450px] bg-[#FFFFFF]"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered rounded-[8px] border-0 w-full max-w-[450px] bg-white"
        />
        <textarea
          placeholder="Your message"
          className="textarea textarea-bordered rounded-[8px] border-0 textarea-lg w-full max-w-[450px] bg-white"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default Contact;
