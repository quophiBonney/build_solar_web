import React from "react";
import "./Lease.css";
import { Link } from "react-router-dom";
const LeaseBanner = () => {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-12 lease-banner-img lease-space">
              <div className="lease-space text-light text-center">
                <h3 className="mt-5 mb-3">The Easiest Way to Go Solar.</h3>
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

export default LeaseBanner;
