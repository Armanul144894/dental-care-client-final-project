import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51NPAOhLmrY4w4h0S48s5vgObUWt6WbjKIEgIjQfR0EXEaIvMJbOVabBhOIaNJ5gOEZ5w0GGc7YRmlkMp3gD60xbO007ivHLspI"
);

const Payment = () => {
  const booking = useLoaderData();

  return (
    <div>
      {booking.map((buy) => (
        <div>
          <h3 className="text-3xl">Payment for {buy.treatment}</h3>
          <p className="text-xl">
            Please pay <strong>${buy.price}</strong> for your appointment on{" "}
            {buy.appointmentDate} at {buy.slots}
          </p>
        </div>
      ))}
      <div className="w-96 my-12">
        {booking.map((booking) => (
          <Elements key={booking._id} stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        ))}
      </div>
    </div>
  );
};

export default Payment;
