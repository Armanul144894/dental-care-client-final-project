import React from "react";
import image1 from "../../../assets/images/assessment.png";
import image2 from "../../../assets/images/emergency-call.png";
import image3 from "../../../assets/images/mental-care.png";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Mental Health Assessment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: image1,
    },
    {
      id: 2,
      title: "Therapy Counseling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: image2,
    },
    {
      id: 3,
      title: "Mental Health Support",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: image3,
    },
  ];
  return (
    <div className="max-w-[1282px] mx-auto mt-[150px]">
      <div className="text-center py-10">
        <h1 className="text-[#19D3AE] text-[20px] font-[700]">Our Services</h1>
        <h1 className="text-[36px] font-[400] text-[#3A4256]">
          Services We Provide
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 align-middle">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
