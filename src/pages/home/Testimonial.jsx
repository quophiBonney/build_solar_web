import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { GrStar } from "react-icons/gr";
const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          background: "teal",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "30px",
          height: "30px",
          padding: "10px",
          borderRadius: "20px",
          marginLeft: "-8px",
        }}
        onClick={onClick}
      >
        Custom Prev
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          background: "teal",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "30px",
          height: "30px",
          padding: "10px",
          borderRadius: "20px",
          marginRight: "-8px",
        }}
        onClick={onClick}
      >
        Custom Next
      </div>
    );
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on larger screens
    slidesToScroll: 1,
    arrows: !isMobile, // Show arrows on non-mobile devices
    dots: isMobile, // Show dots on mobile devices
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992, // Breakpoint for medium-sized screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium-sized screens
        },
      },
      {
        breakpoint: 767, // Breakpoint for small screens (e.g., mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
        },
      },
    ],
  };

  return (
    <div className="container-fluid testimonial-background">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 mt-5 mb-5">
          <div className="px-4">
            <h2 className="fs-1 text-center mb-5">
              Easy Process. Better Technology. Happy Customers.
            </h2>
            <Slider {...settings}>
              <div>
                <div
                  className="card shadow px-4"
                  style={{ margin: "10px 10px" }}
                >
                  <div className="mt-5 mb-5">
                    <div className="mb-3">
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                    </div>
                    <h4>Manager</h4>
                  </div>
                  <div className="mt-5 mb-3">
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Omnis sequi tempora fugit odio molestiae adipisci dicta et
                      harum, numquam dolor laborum ducimus ut. Magni molestiae
                      blanditiis praesentium quod laudantium necessitatibus.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card shadow px-4"
                  style={{ margin: "10px 10px" }}
                >
                  <div className="mt-5 mb-5">
                    <div className="mb-3">
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                    </div>
                    <h4>Manager</h4>
                  </div>
                  <div className="mt-5 mb-3">
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Omnis sequi tempora fugit odio molestiae adipisci dicta et
                      harum, numquam dolor laborum ducimus ut. Magni molestiae
                      blanditiis praesentium quod laudantium necessitatibus.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card shadow px-4"
                  style={{ margin: "10px 10px" }}
                >
                  <div className="mt-5 mb-5">
                    <div className="mb-3">
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                    </div>
                    <h4>Manager</h4>
                  </div>
                  <div className="mt-5 mb-3">
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Omnis sequi tempora fugit odio molestiae adipisci dicta et
                      harum, numquam dolor laborum ducimus ut. Magni molestiae
                      blanditiis praesentium quod laudantium necessitatibus.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card shadow px-4"
                  style={{ margin: "10px 10px" }}
                >
                  <div className="mt-5 mb-5">
                    <div className="mb-3">
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                    </div>
                    <h4>Manager</h4>
                  </div>
                  <div className="mt-5 mb-3">
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Omnis sequi tempora fugit odio molestiae adipisci dicta et
                      harum, numquam dolor laborum ducimus ut. Magni molestiae
                      blanditiis praesentium quod laudantium necessitatibus.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card shadow px-4"
                  style={{ margin: "10px 10px" }}
                >
                  <div className="mt-5 mb-5">
                    <div className="mb-3">
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                      <GrStar size={30} className="mx-1 text-warning" />
                    </div>
                    <h4>Manager</h4>
                  </div>
                  <div className="mt-5 mb-3">
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Omnis sequi tempora fugit odio molestiae adipisci dicta et
                      harum, numquam dolor laborum ducimus ut. Magni molestiae
                      blanditiis praesentium quod laudantium necessitatibus.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
