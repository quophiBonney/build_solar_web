import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div>
      <div className="container-fluid home-hero">
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-6 hero-space text-light px-4">
            <h1 className="">Power modern living</h1>
            <h4 className="mb-5">
              Get ahead of your energy needs with cutting-edge solar and home
              backup.
            </h4>
            <div className="d-flex">
              <div className="btn btn-light p-3 rounded-circle">
                <BsArrowRight size={20} />
              </div>
              <div className="px-5">
                <Link to="/learn-more" className="text-light fw-bold fs-4 mt-2">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
