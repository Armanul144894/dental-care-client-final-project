import React from "react";
import Banner from "../Banner/Banner";
// import BannerItem from "../Banner/BannerItem";
import Service from "../Service/Service";
import ServiceDetails from "../Service/ServiceDetails";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import { ScrollRestoration } from "react-router-dom";
import ClinicalOutcomes from "../ClinicalOutcomes/ClinicalOutcomes";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <BannerItem></BannerItem> */}
      <Service></Service>
      <ClinicalOutcomes></ClinicalOutcomes>
      <ServiceDetails></ServiceDetails>
      <MakeAppointment></MakeAppointment>
      <ScrollRestoration />
    </div>
  );
};

export default Home;
