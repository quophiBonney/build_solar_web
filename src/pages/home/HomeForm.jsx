import React, { useState } from "react";
import "./home.css";
const form = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-7 mt-5">
            <div className="px-4 mt-5">
              <h2 className="">Take control of your energy bills</h2>
              <h5>Get a free personalized quote</h5>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-12 col-lg-5 home-form"
            style={{ border: "1px solid gray", borderRadius: "5px" }}
          >
            <div className="px-4">
              <form action="" method="" className="mt-3 mb-5">
                <fieldset>
                  <legend className="mt-3 fs-6">First Name</legend>
                  <input
                    type="text"
                    required
                    className="form-control p-3"
                    style={{ border: "1px solid black" }}
                  />
                  <legend className="mt-3 fs-6">Last Name</legend>
                  <input
                    type="text"
                    required
                    className="form-control p-3"
                    style={{ border: "1px solid black" }}
                  />
                  <legend className="mt-3 fs-6">Email</legend>
                  <input
                    type="text"
                    required
                    className="form-control p-3"
                    style={{ border: "1px solid black" }}
                  />
                  <div className="d-flex mt-3">
                    <div>
                      <legend className="mt-3 fs-6">Zip Code</legend>
                      <input
                        type="text"
                        required
                        className="form-control p-3"
                        style={{ border: "1px solid black" }}
                      />
                    </div>
                    <div style={{ marginLeft: "15px" }} />
                    <div>
                      <legend className="mt-3 fs-6">Phone</legend>
                      <input
                        type="text"
                        required
                        className="form-control p-3"
                        style={{ border: "1px solid black" }}
                      />
                    </div>
                  </div>
                  <p className="mt-3 fs-6">Do you own your own room?</p>
                  <div className="d-flex mb-3">
                    <div className="d-flex">
                      <input
                        type="radio"
                        value="No"
                        checked={selectedOption === "No"}
                        onChange={handleOptionChange}
                      />
                      <label>Yes</label>
                    </div>
                    <div style={{ marginLeft: "10px" }} />
                    <div className="d-flex">
                      <input
                        type="radio"
                        checked={selectedOption === "Yes"}
                        value="Yes"
                        onChange={handleOptionChange}
                      />
                      <label>No</label>
                    </div>
                  </div>
                  <div>
                    <small className="fw-bold">
                      By clicking below, I authorize Build solar to call me and
                      send pre-recorded messages and text messages to me about
                      Sunrun products and services at the telephone number I
                      entered above, using an autodialer, even if I am on a
                      national or state “Do Not Call” list. Message and data
                      rates may apply. Maximum 10 texts per month. Consent for
                      calls & texts is optional. You can opt out anytime. You
                      also agree to our Terms of Service.
                    </small>
                  </div>
                  <input
                    type="submit"
                    value="Start your quote"
                    className="btn mt-3 text-light"
                    style={{ background: "teal" }}
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default form;
