import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  function closeDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.remove("show");
  }
  useEffect(() => {
    const changeNavbarBackgroundScroll = () => {
      if (window.scrollY > 2) {
        setNavbarBackground("teal");
      } else {
        setNavbarBackground("transparent");
      }
    };
    window.addEventListener("scroll", changeNavbarBackgroundScroll);
    return () => {
      window.removeEventListener("scroll", changeNavbarBackgroundScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg fixed-top px-4 ${navbarBackground}`}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light">
            Bride Solar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-evenly">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Plans & Services
                </a>
                <ul className="dropdown-menu shadow border-0 vw-50">
                  <li>
                    <Link
                      to="/solar-plans-and-services"
                      className="dropdown-item"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solar-plans-and-services/monthly-solar-lease"
                      className="dropdown-item"
                    >
                      Monthly Solar Lease
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/full-amount-solar-lease"
                      className="dropdown-item"
                    >
                      Full Amount Solar Lease
                    </Link>
                  </li>
                  <li>
                    <Link to="/monthly-solar-loan" className="dropdown-item">
                      Monthly Solar Loan
                    </Link>
                  </li>
                  <li>
                    <Link to="/purchase-solar-system" className="dropdown-item">
                      Purchase Solar System
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Why Build Solar
                </a>
                <ul className="dropdown-menu shadow border-0 vw-50">
                  <li>
                    <Link to="/why-overview" className="dropdown-item">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-gurantee" className="dropdown-item">
                      Our Gurantee
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-customers" className="dropdown-item">
                      Our Customers
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="dropdown-item">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/make-moving-easy" className="dropdown-item">
                      Make Moving Easy
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Solar Storage
                </a>
                <ul className="dropdown-menu shadow border-0 vw-50">
                  <li>
                    <Link to="/storage-overview" className="dropdown-item">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/tesla-powerwall" className="dropdown-item">
                      Tesla Powerwall
                    </Link>
                  </li>
                  <li>
                    <Link to="/shift" className="dropdown-item">
                      Shift
                      <small>
                        <sup>TM</sup>
                      </small>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  EV Charging
                </a>
                <ul className="dropdown-menu shadow border-0 vw-50">
                  <li>
                    <Link to="/lightning" className="dropdown-item">
                      F-150 Lightning
                      <small>
                        <sup>TM</sup>
                      </small>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ev-charger" className="dropdown-item">
                      Build EV Charger
                    </Link>
                  </li>
                </ul>
              </li>
              <a
                href="tel: 0596840018"
                className="nav-link text-decoration-none"
              >
                0596840018
              </a>
              <button className="btn btn-light btn-lg text-dark">
                Get A Quote
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
