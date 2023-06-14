import React from "react";
// Optional CSS file for styling
import { Link as RouterLink, animateScroll as scroll } from "react-scroll";
import "./FixedHeader.css";

const Header: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="fixed-header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <RouterLink to="/" className="navbar-brand" onClick={scrollToTop}>
            Apan_demo
          </RouterLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <RouterLink
                to="green_section"
                className="nav-link"
                spy={false}
                smooth={false}
                offset={-70}
                duration={5}
              >
                Home
              </RouterLink>
              <RouterLink
                to="green_section"
                className="nav-link custom-link"
                spy={true}
                smooth={false}
                offset={-70}
                duration={500}
              >
                Green section
              </RouterLink>
              <RouterLink
                to="brown_section"
                className="nav-link customBrown-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5}
              >
                Brown section
              </RouterLink>
              <RouterLink
                to="disabled"
                className="nav-link disabled"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Disabled
              </RouterLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
