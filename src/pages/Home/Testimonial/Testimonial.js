import React from "react";
import comma from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const comments = [
    {
      id: 1,
      name: "Winson Herry",
      city: "California",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people1,
    },
    {
      id: 2,
      name: "Winson Herry",
      city: "California",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people2,
    },
    {
      id: 3,
      name: "Winson Herry",
      city: "California",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people3,
    },
  ];
  return (
    <section className="my-10">
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <h1 className="text-[20px] font-bold text-[#19D3AE]">Testimonial</h1>
          <h1 className="text-4xl font-[400]  ">What Our Patients Says</h1>
        </div>
        <div>
          <img className="max-w-[192px]" src={comma} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {comments.map((comment) => (
          <TestimonialCard key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
