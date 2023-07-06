import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOption from "../AppointmentOption/AppointmentOption";
import { useQuery } from "@tanstack/react-query";

import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [treatment, setTreatment] = useState("");
  const date = format(selectedDate, "PP");

  const openModal = () => {
    setIsOpen(true);
  };

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://dental-care-server-ppyny589o-armanul144894.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  //   if (isLoading) {
  //     return <Loading></Loading>;
  //   }

  return (
    <div>
      <p className="text-[#19D3AE] text-center text-[22px] font-[400]">
        Available Appointments on {format(selectedDate, "PP")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOption
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            openModal={openModal}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
            refetch={refetch}
          ></AppointmentOption>
        ))}
      </div>
      <BookingModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        treatment={treatment}
        selectedDate={selectedDate}
        refetch={refetch}
      ></BookingModal>
    </div>
  );
};

export default AvailableAppointment;
