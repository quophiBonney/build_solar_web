import React from "react";
import LeaseBanner from "./LeaseBanner";
import Hassle from "./Hassle";
import LeaseBenefits from "./LeaseBenefits";
import LeaseForm from "./LeaseForm";
import LeasePackage from "./LeasePackage";
import Faqs from "./Faqs";

const MonthlyLease = () => {
  return (
    <div>
      <LeaseBanner />
      <Hassle />
      <LeaseBenefits />
      <LeaseForm />
      <LeasePackage />
      <Faqs />
    </div>
  );
};

export default MonthlyLease;
