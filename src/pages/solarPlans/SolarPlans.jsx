import React from "react";
import SolarBanner from "./SolarBanner";
import SolarForm from "./SolarForm";
import Package from "./Package";
import House from "./House";
import Qualification from "./Qualification";
const SolarPlans = () => {
  return (
    <div>
      <SolarBanner />
      <Package />
      <SolarForm />
      <House />
      <Qualification />
    </div>
  );
};

export default SolarPlans;
