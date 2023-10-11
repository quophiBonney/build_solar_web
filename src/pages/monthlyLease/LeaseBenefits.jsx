import React from "react";
import "./Lease.css";
import solarMan from "../../assets/solarMan.jpg";
const LeaseBenefits = () => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <h3 className="px-4">
            The Benefits of a Monthly Solar Lease with Sunrun
          </h3>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-2">
            <div className="px-4">
              <img src={solarMan} alt="" className="img-fluid mb-5" />
              <h5>Lock in Low Up-Front Costs</h5>
              <p className="mb-5">
                For as little as $0 down, you can take advantage of customized
                clean energy, resilient backup power, and predictable rates with
                an affordable monthly plan.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-2">
            <div className="px-4">
              <img
                src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoic3VucnVuXC9maWxlXC9QYkdBUHFTMjlTWHBBRmk5TEN2WS5qcGcifQ:sunrun:xHWBYoZoVhGF4ftg_NLLceqG9eVFuGLubMEdrSl5jB0?width=650"
                alt=""
                className="img-fluid mb-5"
              />
              <h5>Expert Solar Support</h5>
              <p className="mb-5">
                We’re here for you every step of the way. From paperwork to
                permits, our experienced Solar Advisors can handle all aspects
                of your home solar system installation.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-2">
            <div className="px-4">
              <img
                src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoic3VucnVuXC9maWxlXC81SHJ4N1J3SERVZVpocUgzR0pHRi5qcGcifQ:sunrun:qJ9bYQM4ST9yfFoXRcGSmha5YD6mqOU6dHV51GBFvuk?width=650"
                alt=""
                className="img-fluid mb-5"
              />
              <h5>Expert Solar Support</h5>
              <p className="mb-5">
                We’re here for you every step of the way. From paperwork to
                permits, our experienced Solar Advisors can handle all aspects
                of your home solar system installation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaseBenefits;
