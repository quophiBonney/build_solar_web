import React from "react";

const NumberOne = () => {
  return (
    <div>
      <div className="container-fluid mt-5 number-one-background">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 mt-3 mb-5">
              <div className="row">
                <div className="d-flex justify-content-around">
                  <div className="home-img-one mt-3 text-light">
                    <p className="fs-5 text-center">
                      15 years of solar expertise
                    </p>
                  </div>
                  <div className="home-img-two mt-3 text-light">
                    <p className="fs-5 text-center">Tech to take charge</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="d-flex justify-content-around">
                  <div className="home-img-three mt-3 text-light">
                    <p className="fs-5 text-center">Solar for every budget</p>
                  </div>
                  <div className="home-img-four mt-3 text-light">
                    <p className="fs-5 text-center">Always at your service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
              <div className="mt-5 text-light px-4">
                <h3>#1 Home Solar Company in America</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberOne;
