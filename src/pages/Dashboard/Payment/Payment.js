import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51NPAOhLmrY4w4h0S48s5vgObUWt6WbjKIEgIjQfR0EXEaIvMJbOVabBhOIaNJ5gOEZ5w0GGc7YRmlkMp3gD60xbO007ivHLspI"
);

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  return (
    <div>
      <h1 className="text-2xl font-bold my-5 text-start">
        Payment for{" "}
        {booking.map((pay) => (
          <span key={pay._id}>{pay.treatment}</span>
        ))}
      </h1>
    </div>
  );
};

export default Payment;
