import React from "react";
import SolarBanner from "./SolarBanner";
import MonthlyForm from "./MonthlyForm";
import MonthlyPackage from "./MonthlyPackage";
import Faqs from "./Faqs";
import Control from "./Control";
import SolarFinancing from "./SolarFinancing";
const SolarMonthly = () => {
  return (
    <div>
      <SolarBanner />
      <Control />
      <SolarFinancing />
      <MonthlyForm />
      <MonthlyPackage />
      <Faqs />
    </div>
  );
};

export default SolarMonthly;
