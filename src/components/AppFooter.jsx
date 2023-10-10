import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="container-fluid bg-black footer">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-3 mt-5 text-light">
            <ul style={{ listStyle: "none" }}>
              <li className="mb-3 fs-5 fw-bold">Why Build Solar</li>
              <li className="mt-2">
                <Link to="/overview" className="text-light">
                  Overview
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/customer-stories" className="text-light">
                  Customer Stories
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/seven-steps" className="text-light">
                  7-Steps to Solar
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/solar-by-state" className="text-light">
                  Solar by State
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/solar-education" className="text-light">
                  Solar Education
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/cost-of-solar" className="text-light mt-2">
                  Cost of Solar
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-5 text-light">
            <ul style={{ listStyle: "none" }}>
              <li className="mb-3 fs-5 fw-bold">Products</li>
              <li className="mt-2">
                <Link to="/overview" className="text-light">
                  Overview
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/solar-panels" className="text-light">
                  Solar Panels
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/solar-battery" className="text-light">
                  Solar Battery
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-5 text-light">
            <ul style={{ listStyle: "none" }}>
              <li className="mb-3 fs-5 fw-bold">About</li>
              <li className="mt-2">
                <Link to="/team" className="text-light">
                  Team
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/careers" className="text-light">
                  Careers
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/investors" className="text-light">
                  Investors
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/home-builders" className="text-light">
                  Home Builders
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-5 text-light">
            <ul style={{ listStyle: "none" }}>
              <li className="mb-3 fs-5 fw-bold">Help</li>
              <li className="mt-2">
                <Link to="/team" className="text-light">
                  Team
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/careers" className="text-light">
                  Careers
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/investors" className="text-light">
                  Investors
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/home-builders" className="text-light">
                  Home Builders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
