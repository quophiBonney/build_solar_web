import React from "react";
import { Link } from "react-router-dom";

const Journey = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row jusity-content-center">
          <div className="col-sm-12 col-md-6 col-lg-5 text-dark">
            <div className="px-3 mt-5">
              <h2>Start your Solar Journey Today</h2>
              <Link
                to="/learn-more"
                className="text-light mt-3 fw-bold btn mb-3"
                style={{
                  background: "teal",
                  borderRadius: "20px",
                  padding: "20px",
                }}
              >
                Start your quote
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 fire-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
