import React from "react";
import "./Solarplans.css";
import { Link } from "react-router-dom";
const Qualification = () => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-12 qualification-background"></div>
          <div className="col-12 mt-5">
            <div className="px-4">
              <h3 className="mb-3">Solar Qualification in Minutes</h3>
              <p className="mb-3">
                Sunrun’s Product Selector is a simple tool that lets you know in
                minutes if getting a monthly plan, system load or buying rooftop
                solar panels -- with or without a home battery -- can give you
                more benefits. This way, you can start your solar journey off on
                the right foot.
              </p>
              <Link
                to="/start-quote"
                className="mb-5 btn text-light"
                style={{ background: "teal" }}
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
