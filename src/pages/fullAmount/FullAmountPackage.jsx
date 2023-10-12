import React from "react";
import {
  AiFillDollarCircle,
  AiFillCheckCircle,
  AiFillPlusSquare,
  AiFillTool,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const FullAmountPackage = () => {
  return (
    <div className="">
      <div className="container-fluid mt-5 lease-package-background px-4">
        <div className="row equal-height-cards">
          <div className="px-4">
            <h4>Sunrun Solar Plans and Services</h4>
            <p className="">
              We’ll customize your agreement based on your individual needs
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
            <div className="card px-4  FullAmountPackage-card mb-5">
              <h5 className="mt-5">Lease</h5>
              <small className="fw-bold mb-3">
                Build Solar's lease plan offers predictable rates while
                providing clean, affordable, resilient energy for as little as
                $0 down. You’ll only be responsible for paying a low monthly
                bill or pay the lease up-front.
              </small>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  marginTop: "0",

                  display: "block",
                }}
              >
                <li>Benefits</li>
                <li>
                  <AiFillCheckCircle style={{ color: "teal" }} />
                  <span className="mx-2">Low upfront cost</span>
                </li>
                <li>
                  <AiFillCheckCircle style={{ color: "teal" }} />{" "}
                  <span className="mx-2">Rate hike protection</span>
                </li>
                <li>
                  <AiFillCheckCircle style={{ color: "teal" }} />
                  <span className="mx-2">25 year warranty</span>
                </li>
                <li>
                  <AiFillCheckCircle style={{ color: "teal" }} />
                  <span className="mx-2">100% service coverage</span>
                </li>
                <li className="mt-3">Payments</li>
                <li>
                  <AiFillDollarCircle style={{ color: "teal" }} />
                  <span className="mx-2">$0 to little down</span>
                </li>
                <li>
                  <AiFillDollarCircle style={{ color: "teal" }} />
                  <span className="mx-2">Payment to Build Solar</span>
                </li>
                <li className="mt-3">Ownership</li>
                <li>
                  <AiFillTool style={{ color: "teal" }} />
                  <span className="mx-2">
                    Build Solar owns and maintains system
                  </span>
                </li>
              </ul>
              <Link
                to="get-quote"
                className="btn text-light mb-5"
                style={{ background: "teal" }}
              >
                Get Quote
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
            <div className="card px-4  FullAmountPackage-card mb-5">
              <h5 className="mt-5">Loan</h5>
              <small className="fw-bold mb-3">
                Build solar's monthly loan gives you the benefits of owning your
                solar energy system through fixed monthly payments at a
                competitive rate.
              </small>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  marginTop: "0",

                  display: "block",
                }}
              >
                <li className="mb-2">Benefits</li>
                <li>
                  <AiFillCheckCircle style={{ color: "teal" }} />
                  <span className="mx-2">Purchase and finance</span>
                </li>
                <li>
                  <AiFillCheckCircle style={{ color: "teal" }} />
                  <span className="mx-2">Rate hike protection</span>
                </li>
                <li>
                  <AiFillCheckCircle style={{ color: "teal" }} />
                  <span className="mx-2">Rate hike protection</span>
                </li>
                <li>
                  <AiFillPlusSquare style={{ color: "red" }} />
                  <span className="mx-2">
                    100% service coverage available with Protection Plus
                  </span>
                </li>
                <li className="mt-4">Payments</li>
                <li>
                  <AiFillDollarCircle style={{ color: "teal" }} />
                  <span className="mx-2">$0 down</span>
                </li>
                <li>
                  <AiFillDollarCircle style={{ color: "teal" }} />
                  <span className="mx-2">Payment to loan provider</span>
                </li>
                <li className="mt-4">Ownership</li>
                <li>
                  <AiFillTool style={{ color: "teal" }} />
                  <span className="mx-2">
                    Homeowner owns and maintains system
                  </span>
                </li>
              </ul>
              <Link
                to="get-quote"
                className="btn text-light mb-5"
                style={{ background: "teal" }}
              >
                Get Quote
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
            <div className="card px-4  FullAmountPackage-card mb-5">
              <h5 className="mt-5">Purchase</h5>
              <small className="fw-bold mb-3">
                Build solar allows customers to purchase solar system fully
                outright.
              </small>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  marginTop: "0",
                  display: "block",
                }}
              >
                <li>Benefits</li>
                <li>
                  <AiFillCheckCircle style={{ color: "teal" }} />
                  <span className="mx-2">Own your system outright</span>
                </li>
                <li>
                  <AiFillCheckCircle style={{ color: "teal" }} />
                  <span className="mx-2">Rate hike protection</span>
                </li>
                <li>
                  <AiFillPlusSquare style={{ color: "red" }} />
                  <span className="mx-2">
                    100% service coverage available with Protection Plus
                  </span>
                </li>
                <li className="mt-5">Payments</li>
                <li>
                  <AiFillDollarCircle style={{ color: "teal" }} />
                  <span className="mx-2">Full system cost</span>
                </li>
                <li className="mt-5">Ownership</li>
                <li>
                  <AiFillTool style={{ color: "teal" }} />
                  <span className="mx-2">
                    Homeowner owns and maintains system
                  </span>
                </li>
              </ul>
              <Link
                to="get-quote"
                className="btn text-light mt-5 mb-5"
                style={{ background: "teal" }}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullAmountPackage;
