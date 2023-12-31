import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `https://dental-care-server-ppyny589o-armanul144894.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        url
        //     {
        //     headers: {
        //       authorization: `bearer ${localStorage.getItem("accessToken")}`,
        //     }.catch((rejected) => {
        //       console.log(rejected);
        //     }),
        //   }
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3 className="text-3xl mb-5">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patientName}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>
                  {booking?.price && !booking?.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-secondary text-white btn-sm">
                        Pay
                      </button>
                    </Link>
                  )}
                  {booking?.price && booking?.paid && (
                    <span className="text-secondary">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
