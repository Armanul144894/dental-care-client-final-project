import React from "react";
import Banner from "../Banner/Banner";
import BannerItem from "../Banner/BannerItem";
import Service from "../Service/Service";
import ServiceDetails from "../Service/ServiceDetails";
import MakeAppointment from "../MakeAppointment/MakeAppointment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerItem></BannerItem>
      <Service></Service>
      <ServiceDetails></ServiceDetails>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
