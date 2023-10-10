import React from "react";
import { Link } from "react-router-dom";

const Power = () => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row jusity-content-center">
          <div className="col-sm-12 col-md-6 col-lg-5 power-background">
            <div className="px-3 mt-5 text-light">
              <h4 className="fs-1">Pure Power</h4>
              <p className="fs-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, nobis nesciunt. Mollitia placeat magni distinctio?
                Repellendus odit assumenda reiciendis in?
              </p>
              <Link to="/learn-more" className="text-light mt-5 fw-bold">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 car-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Power;
