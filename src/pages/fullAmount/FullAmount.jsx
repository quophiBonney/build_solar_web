import React from "react";
import Banner from "./Banner";
import FullAmountPackage from "./FullAmountPackage";
import FullBenefits from "./FullBenefits";
import FullAmountForm from "./FullAmountForm";
import Faqs from "./Faqs";
import Lock from "./Lock";
const FullAmount = () => {
  return (
    <div>
      <Banner />
      <Lock />
      <FullBenefits />
      <FullAmountForm />
      <FullAmountPackage />
      <Faqs />
    </div>
  );
};

export default FullAmount;
