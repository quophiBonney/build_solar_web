import React from "react";
import "./Monthly.css";
import { Link } from "react-router-dom";
const SolarBanner = () => {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-12 solar-banner-img full-amount-space">
              <div className="full-amount-space text-light text-center">
                <h3 className="mt-5 mb-3">Monthly Solar Loan from Sunrun.</h3>
                <Link to="/" className="btn btn-light text-dark p-3">
                  Start your quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarBanner;
