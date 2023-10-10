import React from "react";
import "./Solarplans.css";
const SolarBanner = () => {
  return (
    <div>
      <div className="container-fluid solar-banner">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6 solar-banner-img solar-space"></div>
          <div className="col-sm-12 col-md-6 col-lg-6 solar-space">
            <div className="text-light px-3">
              <h3 className="mt-5 mb-5">
                Generate your own solar energy. Become less reliant on the
                utilities.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarBanner;
