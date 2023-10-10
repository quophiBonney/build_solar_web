import React from "react";
import "./Solarplans.css";
const House = () => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-12 house-background"></div>
          <div className="col-12 mt-5">
            <div className="px-4">
              <h3 className="mb-5">Rechargeable Solar Battery System</h3>
              <h4 className="mb-5">
                Control your energy and savings with Build’s solar power & smart
                battery solution
              </h4>
              <p className="mb-5">
                Energy safe, clean, and reliable backup power to keep your
                family powering forward in the event of a blackout. Brightbox
                saves you money by seamlessly optimizing when a home uses
                electricity generated from solar, stored in the battery, or from
                the grid. Purchase or lease Brightbox from Build Solar today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
